import styled from 'styled-components';

export const CardWrapper = styled.div`
  background: #ffffff;
  border-radius: 24px; /* 더 둥글게 */
  padding: 24px;
  position: relative;
  overflow: hidden;
  
  /* 부드러운 그림자 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.02);
  
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* 떠오르는 효과 */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  }
`;

export const IconBox = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  border-radius: 14px; /* 아이콘 배경도 둥글게 */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 16px;
  
  /* 애플 스타일 파스텔톤 배경 */
  background: ${props => props.$color}20; /* 투명도 20% */
  color: ${props => props.$color};
`;

export const Value = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #1d1d1f;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
`;

export const Label = styled.div`
  font-size: 14px;
  color: #86868b;
  font-weight: 500;
`;