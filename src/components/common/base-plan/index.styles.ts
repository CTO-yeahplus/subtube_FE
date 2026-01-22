import styled, { css } from 'styled-components';

import { BaseButton } from '../base-button';

interface ICard {
  $mostPopular: boolean;
}
export const Container = styled.div<ICard>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  ${({ $mostPopular }) =>
    css`
      margin-top: ${$mostPopular ? '0' : '44px'};
    `}
`;

export const MostPopular = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px 12px 0px 0px;
  background: #01509a;
  color: var(--colors-nutral-white-white-main, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

export const Card = styled.div<ICard>`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #404040;
  background: #fff;
  ${({ $mostPopular }) =>
    css`
      border-radius: ${$mostPopular ? '0 0 12px 12px' : '12px'};
    `}
`;

export const ContainerLevel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Level = styled.span`
  color: #404040;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;

export const Description = styled.p`
  color: #404040;
  font-size: 13px;
  margin-bottom: 16px;
`;

export const SubSale = styled.del`
  color: #01509a;
  font-size: 16px;
  line-height: normal;
  justify-content: start;
  position: relative;
  width: fit-content;
  margin-bottom: 10px;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    border-top: 3px solid red;
    transform: translateY(-50%);
  }
`;

export const ContainerPrice = styled.div`
  max-width: 235px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceYear = styled.span`
  color: #01509a;
  font-size: 42px;
  font-weight: 700;
  line-height: normal;
`;

export const PriceMonthDollar = styled.b`
  color: #01509a;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
`;

export const PriceMonth = styled.span`
  color: #01509a;
  font-size: 14px;
  line-height: normal;
`;

export const BilledAnnually = styled.span`
  color: #404040;
  font-size: 14px;
  margin-bottom: 12px;
`;

export const Free2MonthContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

export const Free2Month = styled.div`
  display: flex;
  height: 21px;
  width: 250px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 45px;
  background: linear-gradient(90deg, #ed171b 0%, #f89806 100%);
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  svg {
    margin-bottom: 13px;
  }
`;

export const DateValid = styled.span`
  margin-bottom: 12px;
  line-height: 21px;
  font-size: 14px;
  font-weight: 500;
`;

export const Button = styled(BaseButton)<{ color?: string }>`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: 8px;
  ${({ color }) => css`
    color: ${color};
    border-color: ${color};
  `}

  &.ant-btn-primary:disabled {
    background: #99b9d7;
    color: var(--white);
  }
`;

export const CancelButton = styled.div`
  color: #ff5252 !important;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

export const TextInfo = styled.div`
  color: #404040;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80px;
  margin-top: 8px;
`;
