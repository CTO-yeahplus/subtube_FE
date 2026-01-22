import styled from 'styled-components';

interface CardProps {
  $bgColor?: string;
  $boxShadowColor?: string;
}

export const Card = styled.div<CardProps>`
  width: 100%;
  height: 113px;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: ${({ $bgColor }) => $bgColor};
  box-shadow: ${({ $boxShadowColor }) => `0px 0px 16px 0px ${$boxShadowColor} !important`};
`;

export const LeftInsideCard = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  gap: 8px;
`;

export const RightInsideCard = styled.div`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const NumberInsideCard = styled.h2`
  color: var(--colors-nutral-white-white-main, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: start;
`;

export const NumberInsideCardLeft = styled.h2`
  color: var(--colors-nutral-white-white-main, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: end;
`;

export const SubTitleInsideCard = styled.h2`
  color: var(--colors-nutral-white-white-main, #fff);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
