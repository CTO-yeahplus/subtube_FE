import { BaseButton } from '@/components/common/base-button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  .ant-checkbox-group {
    flex-direction: column;
    padding: 0 23px;
    > label {
      margin-bottom: 24px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
`;

export const AccoutSelectWrapper = styled.div``;

export const CheckboxWrapper = styled.div`
  max-height: 200px;
  overflow: scroll;
`;

export const Description = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 16px;
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

export const InfoCard = styled.ul`
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 24px;
  border-radius: 12px;
  background-color: var(--white);
  margin-bottom: 24px;
`;

export const InfoItem = styled.li`
  &:first-child {
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 2px solid #d9d9d9;
  }
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
