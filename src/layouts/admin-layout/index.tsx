import { useResponsive } from '@/hooks/useResponsive';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MainContent from './content';
import * as S from './index.styles';

// 헤더와 푸터만 불러옵니다. (사이드바 삭제)
const MainHeader = dynamic(() => import('./header'), { ssr: false });
const MainFooter = dynamic(() => import('./footer'), { ssr: false });

// 헤더 고정을 위한 래퍼
const FixedHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* 무조건 제일 위에 */
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eaeaea;
  height: 64px; /* 헤더 높이 고정 */
`;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { isMobile } = useResponsive();

  return (
    <S.LayoutMaster>
      {/* 1. 상단 고정 헤더 (메뉴 포함) */}
      <FixedHeaderWrapper>
        <MainHeader />
      </FixedHeaderWrapper>

      {/* 2. 메인 콘텐츠 */}
      <S.LayoutMain>
        <S.MainContent id="main-content">
          {children}
        </S.MainContent>
        
        <MainFooter />
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default AppLayout;