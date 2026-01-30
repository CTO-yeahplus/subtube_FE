import styled from 'styled-components';

export const LayoutMaster = styled.div`
  display: flex;
  flex-direction: column; /* 세로 배치 */
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f7;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
`;

export const LayoutMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px; /* 너무 퍼지지 않게 중앙 정렬 */
  margin: 0 auto;
  padding: 24px;
  
  /* 🚨 중요: 헤더(64px) 뒤에 숨지 않도록 윗 여백 추가 */
  padding-top: 100px; 

  @media (max-width: 768px) {
    padding: 16px;
    padding-top: 80px;
  }
`;