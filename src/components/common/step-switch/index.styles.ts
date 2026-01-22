import { BaseSteps } from '@/components/common/base-steps';
import styled, { css } from 'styled-components';

export const WrapperStep = styled(BaseSteps)`
  width: 1000px;
  margin: auto;
  .ant-steps-item {
    padding-inline-start: 0 !important;
    .ant-steps-item-container {
      align-items: stretch;
      .ant-steps-item-icon {
        margin: 0;
      }
      .ant-steps-item-title {
        padding-inline-end: 0;
        &::after {
          background: #d9d9d9 !important;
        }
      }
    }
  }
`;

export const StepItem = styled.div<{ waiting: string; finished: string }>`
  display: flex;
  padding: 15px 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  align-self: stretch;

  border-radius: 8px;
  border: 1px solid #d9d9d9;

  background: var(--white);

  .ant-radio-inner {
    border-color: #d9d9d9 !important;
  }

  ${(props) =>
    props.waiting === 'true' &&
    css`
      background: var(--primary1-color);
      .ant-radio-inner {
        background: var(--primary1-color);
      }
    `};

  ${(props) =>
    props.finished === 'true' &&
    css`
      border: 1px solid var(--ant-primary-5);
      background: var(--notification-primary-color);
    `};
`;

export const StepTitle = styled.div`
  color: var(--text-main-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 3px 0;
`;
