import { BaseButton } from '@/components/common/base-button';
import { BaseLayout } from '@/components/common/base-layout';
import { media } from '@/constants';
import { LAYOUT } from '@/constants';
import Link from 'next/link';
import styled, { css } from 'styled-components';

// 사이드바 전체 컨테이너
export const Sider = styled(BaseLayout.Sider)`
  &.ant-layout-sider {
    position: fixed;
    /* 배경을 투명하게 해서 부모(LayoutMaster)의 Glass 효과가 보이게 함 */
    background: transparent !important; 
    border-right: 1px solid rgba(0,0,0,0.05); /* 아주 연한 경계선 추가 */
  }

  overflow: visible;
  right: 0;
  z-index: 100; /* 헤더보다 위에 오거나 비슷하게 */
  min-height: 100vh;
  max-height: 100vh;

  /* 기본 글자색: Apple Dark Gray */
  color: #1d1d1f !important;

  /* 내부의 모든 텍스트 강제 변경 (상속 문제 해결) */
  * {
    color: #1d1d1f; 
  }

  @media only screen and ${media.md} {
    right: unset;
    left: 0;
  }

  @media only screen and ${media.xl} {
    &.ant-layout-sider {
      position: unset;
    }
  }

  /* 🚨 중요: 내부 Ant Design Menu 스타일 강제 오버라이딩 🚨 */
  .ant-menu {
    background: transparent !important;
    color: #1d1d1f !important;
    border-right: none !important;
  }

  /* 메뉴 아이템 평소 상태 */
  .ant-menu-item, .ant-menu-submenu-title {
    color: #424245 !important; /* 조금 연한 회색 */
    margin-bottom: 4px;
    border-radius: 8px; /* 둥근 모서리 */
    
    &:hover {
      color: #000 !important;
      background-color: rgba(0, 0, 0, 0.05) !important; /* 호버 시 연한 회색 배경 */
    }
  }

  /* 메뉴 아이콘 */
  .anticon {
    color: #424245 !important;
  }

  /* 메뉴 선택된(Active) 상태: Apple Blue */
  .ant-menu-item-selected {
    background-color: #0071e3 !important;
    color: #ffffff !important; /* 선택됐을 때만 흰색 글씨 */
    box-shadow: 0 4px 10px rgba(0, 113, 227, 0.3);

    .ant-menu-title-content {
      color: #ffffff !important;
    }
    
    .anticon {
      color: #ffffff !important;
    }

    &:hover {
      background-color: #0077ed !important;
      color: #ffffff !important;
    }
  }
`;

interface Collapse {
  $isCollapsed: boolean;
}

// 사이드바 접기/펼치기 버튼
export const CollapseButton = styled(BaseButton)<Collapse>`
  background: #ffffff; /* 버튼 배경 흰색 */
  border: 1px solid #d2d2d7; /* Apple Border Color */
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  
  transition: all 0.2s ease;
  position: absolute;
  right: 0.5rem;
  top: 24px; /* 위치 살짝 조정 */
  z-index: 101;
  
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; /* 완전 원형 */

  ${(props) =>
    props.$isCollapsed &&
    css`
      right: -1rem;
    `}

  color: #1d1d1f; /* 화살표 색상 */

  &.ant-btn:not(:disabled):hover,
  &.ant-btn:not(:disabled):focus {
    color: #0071e3;
    background: #f5f5f7;
    border-color: #0071e3;
  }
`;

export const SiderContent = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - ${LAYOUT.mobile.headerHeight});

  /* 스크롤바 숨기기 (깔끔하게) */
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  @media only screen and ${media.md} {
    max-height: calc(100vh - ${LAYOUT.desktop.headerHeight});
  }
`;

export const SiderLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  
  /* 로고 아이콘 색상 변경 */
  .anticon {
    color: #1d1d1f !important; /* 흰색 -> 검정색 */
    transition: color 0.3s;
    
    svg {
      height: 2.2rem; /* 크기 살짝 조정 */
      width: 2.2rem;
    }
  }

  &:hover .anticon {
    color: #0071e3 !important; /* 호버시 파란색 포인트 */
  }
`;

// 로고 영역 배경도 투명하게
export const SiderLogoDiv = styled.div`
  height: ${LAYOUT.mobile.headerHeight};
  padding: ${LAYOUT.mobile.headerPadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background-color: transparent !important; /* 흰색 -> 투명 */
  
  /* 로고 아래 구분선 */
  /* border-bottom: 1px solid rgba(0,0,0,0.05); */ 

  @media only screen and ${media.md} {
    height: ${LAYOUT.desktop.headerHeight};
    padding-left: 1.5rem;
  }
`;

// 로고 텍스트 스타일
export const BrandSpan = styled.span`
  margin: 0 1rem;
  font-weight: 700;
  font-size: 1.125rem;
  color: #1d1d1f !important; /* 흰색 -> 검정색 */
  letter-spacing: -0.02em;
`;