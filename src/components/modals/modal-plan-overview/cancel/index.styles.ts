import { BaseButton } from '@/components/common/base-button';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 48px;
`;

export const Button = styled(BaseButton)`
  width: 190px;

  &.ant-btn-default {
    border: 1px solid #01509a;
    color: #01509a;
  }
`;

export const Card = styled.div`
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 24px;
  border-radius: 12px;
  background-color: var(--white);
  margin-bottom: 24px;
`;

export const Note = styled.p`
  margin-bottom: 24px;
  span {
    text-decoration: underline;
    font-weight: 500;
  }
`;

export const PlanDescription = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const PlanName = styled.div`
  margin-bottom: 12px;

  b {
    font-size: 18px;
  }
`;

export const PlanData = styled.div`
  display: flex;
  justify-content: space-between;
`;
