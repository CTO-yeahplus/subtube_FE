import React from 'react';
import { YoutubeFilled } from '@ant-design/icons'; // 로고 아이콘 (없으면 다른 걸로 대체 가능)
import * as S from '../sider/index.styles'; // 스타일 파일 경로 주의

interface SiderLogoProps {
  isSiderCollapsed: boolean;
  toggleSider: () => void;
}

// 🚨 export const로 내보냅니다 (Named Export)
export const SiderLogo: React.FC<SiderLogoProps> = ({ isSiderCollapsed, toggleSider }) => {
  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink href="/">
        {/* 로고 아이콘 */}
        <YoutubeFilled style={{ fontSize: '28px', color: '#ff0000' }} />
        
        {/* 메뉴가 접혀있지 않을 때만 텍스트 표시 */}
        {!isSiderCollapsed && (
          <S.BrandSpan>SubTube</S.BrandSpan>
        )}
      </S.SiderLogoLink>
    </S.SiderLogoDiv>
  );
};