import os
import datetime
import fnmatch

# ==========================================
# ⚙️ 설정 (내 프로젝트에 맞게 수정 가능)
# ==========================================

# 스캔할 파일 확장자 목록 (분석이 필요한 코드 파일만 포함)
INCLUDE_EXTENSIONS = {
    # Front-end
    '.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.json',
    # Back-end
    '.py', '.java', '.go', '.rb', '.php',
    # Config / Etc
    '.md', '.yml', '.yaml', '.sql', '.prisma', '.env.example'
}

# 무시할 폴더 및 파일 패턴 (용량을 줄이고 노이즈 제거)
IGNORE_PATTERNS = [
    'node_modules', '.git', '.next', '.vscode', '.idea', 'dist', 'build', 'out',
    'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
    '*.png', '*.jpg', '*.jpeg', '*.gif', '*.svg', '*.ico', '*.woff', '*.woff2', '*.ttf',
    '__pycache__', 'venv', 'env', '.DS_Store',
    'generate_snapshot.py', 'SNAPSHOT_*.md' # 자기 자신과 결과물 제외
]

# ==========================================
# 🛠️ 로직 시작
# ==========================================

def should_ignore(path, is_dir=False):
    """무시할 파일/폴더인지 확인"""
    name = os.path.basename(path)
    for pattern in IGNORE_PATTERNS:
        if fnmatch.fnmatch(name, pattern):
            return True
        # 경로 상에 무시할 폴더가 포함되어 있는지 확인 (예: src/node_modules/...)
        if is_dir and pattern in path.split(os.sep):
             return True
    return False

def generate_file_tree(startpath):
    """프로젝트 구조를 트리 형태로 문자열 반환"""
    tree_str = "## 🗺️ File Map\n```text\n.\n"
    for root, dirs, files in os.walk(startpath):
        # 무시할 폴더 필터링 (in-place 수정)
        dirs[:] = [d for d in dirs if not should_ignore(os.path.join(root, d), is_dir=True)]
        
        level = root.replace(startpath, '').count(os.sep)
        indent = '│   ' * (level)
        subindent = '│   ' * (level + 1)
        
        # 현재 폴더 이름 (루트 제외)
        if root != startpath:
            tree_str += '{}{}/\n'.format(indent, os.path.basename(root))
            
        for f in files:
            if not should_ignore(f) and os.path.splitext(f)[1] in INCLUDE_EXTENSIONS:
                tree_str += '{}{}\n'.format(subindent, f)
    tree_str += "```\n\n---\n"
    return tree_str

def summarize_context(content, filename):
    """코드 내용을 간단히 분석하여 Context Summary 생성"""
    summary = []
    lines = content.split('\n')
    
    # 주요 키워드 추출 (간단한 파싱)
    imports = []
    exports = []
    types = []
    functions = []

    for line in lines:
        line = line.strip()
        if line.startswith('import '):
            imports.append(line[:50] + '...' if len(line) > 50 else line)
        elif line.startswith('export interface') or line.startswith('export type'):
            types.append(line.split('{')[0].strip())
        elif line.startswith('export const') or line.startswith('export function') or line.startswith('export class'):
            # 함수나 컴포넌트 이름 추출 시도
            parts = line.split(' ')
            if len(parts) > 2:
                exports.append(parts[2].split('(')[0].split(':')[0])

    if imports:
        summary.append(f"* 🔗 **Imports:** {len(imports)} found")
    if types:
        summary.append(f"* 🛠️ **Types/Interfaces:** {', '.join(types[:5])}" + ("..." if len(types)>5 else ""))
    if exports:
        summary.append(f"* 🚀 **Exports/Components:** {', '.join(exports[:5])}" + ("..." if len(exports)>5 else ""))
        
    return "\n".join(summary) if summary else "* (No significant exports/imports detected)"

def create_snapshot(root_path='.'):
    """전체 스냅샷 파일 생성"""
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    project_name = os.path.basename(os.path.abspath(root_path))
    output_filename = f"SNAPSHOT_{project_name.upper()}_{datetime.datetime.now().strftime('%Y%m%d_%H%M')}.md"

    print(f"📸 Generating snapshot for: {project_name}...")

    with open(output_filename, 'w', encoding='utf-8') as outfile:
        # 1. 헤더 작성
        outfile.write(f"# 🧠 Deep Context Snapshot\n\n")
        outfile.write(f"**Generated at:** {timestamp}\n")
        outfile.write(f"**Project:** {project_name}\n")
        outfile.write(f"\n> **🛑 INSTRUCTION FOR AI:**\n")
        outfile.write(f"> Use this document to understand the current architecture, directory structure, and code logic.\n")
        outfile.write(f"> Always refer to the specific file contents below when proposing changes.\n\n")

        # 2. 파일 트리 작성
        outfile.write(generate_file_tree(root_path))

        # 3. 파일 내용 순회 및 작성
        file_count = 0
        for root, dirs, files in os.walk(root_path):
            dirs[:] = [d for d in dirs if not should_ignore(os.path.join(root, d), is_dir=True)]
            
            for file in files:
                if should_ignore(file):
                    continue
                
                ext = os.path.splitext(file)[1]
                if ext not in INCLUDE_EXTENSIONS:
                    continue

                file_path = os.path.join(root, file)
                relative_path = os.path.relpath(file_path, root_path)
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    file_count += 1
                    print(f"Scanning: {relative_path}")

                    # 섹션 헤더
                    outfile.write(f"\n### 📄 {relative_path}\n")
                    
                    # Context Summary 생성
                    summary = summarize_context(content, file)
                    outfile.write(f"> **Context Summary**\n> \n")
                    for line in summary.split('\n'):
                        outfile.write(f"> {line}\n")
                    outfile.write("\n")

                    # 코드 블록
                    lang = ext.replace('.', '')
                    if lang == 'tsx' or lang == 'ts': lang = 'typescript'
                    if lang == 'js' or lang == 'jsx': lang = 'javascript'
                    
                    outfile.write(f"```{lang}\n{content}\n```\n")
                    outfile.write("---\n")

                except Exception as e:
                    print(f"⚠️ Error reading {file_path}: {e}")

    print(f"\n✅ Snapshot created successfully: {output_filename}")
    print(f"📊 Total files scanned: {file_count}")

if __name__ == "__main__":
    create_snapshot()