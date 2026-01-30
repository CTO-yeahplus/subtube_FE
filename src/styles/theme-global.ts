import { FONT_FAMILY } from '@/constants';
import 'react-phone-input-2/lib/style.css';
import * as styled from 'styled-components';
import { resetCss } from './theme-reset';
import { commonThemeVariables, getThemeVariables } from './themes/theme-variables';

export default styled.createGlobalStyle`
  ${resetCss}

  :root {
    /* Apple uses SF Pro Display, standard fallback is systematic */
    --font-main: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  body {
    font-family: var(--font-main);
    background-color: #fbfbfd; /* Apple off-white background */
    color: #1d1d1f;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.015em; /* 글자 간격을 살짝 좁혀서 단단한 느낌 */
    -webkit-user-select: none;
    user-select: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    letter-spacing: -0.02em; /* 제목은 더 타이트하게 */
  }

  /* Ant Design Override - 둥글고 부드럽게 */
  .ant-btn {
    border-radius: 980px !important; /* 알약 모양 (Pill Shape) */
    font-weight: 500;
    box-shadow: none !important;
  }
  
  .ant-input, .ant-select-selector {
    border-radius: 12px !important; /* 입력창 둥글게 */
    padding-top: 8px;
    padding-bottom: 8px;
  }
    /* 모든 버튼에 물리적 터치감 부여 */
  button, .ant-btn {
    transition: all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1) !important;
    
    &:active {
      transform: scale(0.96) !important; /* 누르면 살짝 작아짐 */
      opacity: 0.8;
    }
  }

  /* 1. 테이블 헤더: 배경 투명, 글씨 작고 진하게 */
  .ant-table-thead > tr > th {
    background: transparent !important;
    color: #86868b !important;
    font-weight: 600 !important;
    font-size: 13px !important;
    text-transform: uppercase; /* 대문자로 세련되게 */
    border-bottom: 1px solid rgba(0,0,0,0.06) !important;
    padding: 16px 24px !important;
  }

  /* 2. 테이블 바디: 행 높이 키우기 */
  .ant-table-tbody > tr > td {
    padding: 20px 24px !important;
    font-size: 15px;
    color: #1d1d1f;
    border-bottom: 1px solid rgba(0,0,0,0.03) !important; /* 아주 연한 줄 */
  }

  /* 3. 호버 효과: 전체 행이 둥글게 하이라이트 */
  .ant-table-tbody > tr:hover > td {
    background: #f5f5f7 !important; /* 배경색 연한 회색 */
  }

  /* 4. 테이블 전체 테두리 제거 */
  .ant-table {
    background: transparent !important;
  }
  .ant-table-container {
    border-radius: 0 !important;
  }

`;



