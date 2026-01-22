import { BaseButton } from '@/components/common/base-button';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import styled from 'styled-components';

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

export const PlanDescription = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const CheckoutModal = styled(BaseModal)`
  .ant-modal-content {
    border-radius: 40px;
    background: #f8fbff;
  }
  .ant-modal-body {
    padding: 32px;
  }
`;
