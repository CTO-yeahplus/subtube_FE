import React from 'react';
import useTranslateVideo from './index.utils';

// 🩺 디버깅용 UI 컴포넌트
const TranslatorComponent = () => {
  // 1. 훅 실행
  const hookResult = useTranslateVideo();
  
  // 2. 훅이 터졌는지 확인
  if (!hookResult) {
    return <h1 style={{ color: 'red', padding: 50 }}>🚨 Hook 결과가 null입니다! (로직 에러)</h1>;
  }

  const {
    accountSelected,
    listOptionsAccount,
    dataTable,
    current,
    steps
  } = hookResult;

  return (
    <div style={{ padding: '50px 20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h2 style={{ color: 'blue' }}>🛠️ Translator 디버깅 모드</h2>
      
      <div style={{ background: 'white', padding: 20, borderRadius: 8, marginBottom: 20 }}>
        <h3>1. 계정 데이터 상태</h3>
        <p><strong>선택된 계정 ID:</strong> {accountSelected ? accountSelected : '없음 (Loading...)'}</p>
        <p><strong>불러온 계정 목록 수:</strong> {listOptionsAccount?.length ?? 0} 개</p>
        
        {/* 계정 목록 자세히 보기 */}
        <details>
            <summary>계정 목록 열기</summary>
            <pre>{JSON.stringify(listOptionsAccount, null, 2)}</pre>
        </details>
      </div>

      <div style={{ background: 'white', padding: 20, borderRadius: 8, marginBottom: 20 }}>
        <h3>2. 비디오 데이터 상태</h3>
        <p><strong>비디오 목록 수:</strong> {dataTable?.length ?? 0} 개</p>
        
        {/* 비디오 데이터 자세히 보기 */}
        <details>
            <summary>비디오 데이터(첫번째 항목) 확인</summary>
            <pre>{dataTable && dataTable.length > 0 ? JSON.stringify(dataTable[0], null, 2) : '비디오 없음'}</pre>
        </details>
      </div>

      <div style={{ background: 'white', padding: 20, borderRadius: 8 }}>
        <h3>3. UI 상태</h3>
        <p><strong>현재 단계 (Current Step):</strong> {current}</p>
        <p><strong>총 단계 수:</strong> {steps?.length ?? 0}</p>
      </div>
    </div>
  );
};

export default TranslatorComponent;