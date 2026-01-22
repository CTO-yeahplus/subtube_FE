import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 32px;
  position: relative;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const Body = styled.div`
  max-height: 550px;
  overflow: auto;
`;

export const Card = styled.div`
  border-radius: 12px;
  background-color: var(--white);
  padding: 24px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  &:nth-last-of-type(1) {
    margin-top: 32px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const PriceInfos = styled.div`
  margin-bottom: 16px;
  ${InfoItem} {
    &:first-child {
      font-size: 18px;
      font-weight: 700;
    }

    &:last-child {
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export const PriceTotal = styled.div`
  font-size: 14px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid #d9d9d9;
  ${InfoItem} {
    &:first-child {
      font-size: 16px;
      font-weight: 600;
    }

    &:last-child {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export const Date = styled.div``;

export const CardHeader = styled.div`
  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const CardsWrapper = styled.div`
  margin-top: 40px;
`;

export const CardDesc = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #404040;
  line-height: normal;
  font-style: normal;
  margin-top: 12px;
  font-size: 14px;
  font-weight: 400;
  svg {
    margin-left: 6px;
    margin-top: 3px;
  }
`;
