import React from 'react';
import styled, { css } from 'styled-components';

interface BurgerProps {
  className?: string;
  onClick: () => void;
}

export const Burger: React.FC<BurgerProps> = ({ className, onClick }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="280 215 400 220"
    fill="currentColor"
    className={className}
    onClick={onClick}>
    <path
      d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
      id="top"
    />
    <path d="M300,320 L540,320" id="middle" />
    <path
      d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
      id="bottom"
      transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
    />
  </svg>
);

// 2. 여기서 MenuOutlined 대신 Burger를 넣으세요!
export const BurgerIcon = styled(Burger)` 
  font-size: 24px; /* 크기 조금 키움 */
  color: #1d1d1f;
  cursor: pointer;
  margin-right: 20px;
  
  /* 모바일 터치 영역 확보 */
  padding: 8px; 
  border-radius: 50%;
  transition: background 0.2s;

  &:hover {
    background: rgba(0,0,0,0.05);
  }

  /* 모바일에서만 보이게 */
  @media (max-width: 768px) {
    display: block; 
  }
`;
