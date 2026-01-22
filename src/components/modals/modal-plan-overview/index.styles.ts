import { BaseModal } from '@/components/common/base-modal/BaseModal';
import { Col, Row } from 'antd';
import styled from 'styled-components';

export const ModalPlan = styled(BaseModal)`
  display: flex;
  flex-direction: column;
  .ant-modal-content {
    border-radius: 30px;
  }
  .ant-modal-body {
    padding: 40px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Close = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  svg {
    cursor: pointer;
  }
`;

export const Header = styled.div`
  text-align: center;
  color: #404040;
  font-weight: 700;
  line-height: normal;
`;

export const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  font-size: 24px;
`;

export const Notification = styled.div`
  font-size: 14px;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid #01509a;
  background: #d7ebff;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  span {
    color: #01509a;
    margin-left: 24px;
  }
`;

export const RowPlan = styled(Row)`
  width: 100%;
  margin-top: 20px;
`;

export const ColPlan = styled(Col)``;

export const CheckoutModal = styled(BaseModal)`
  .ant-modal-content {
    border-radius: 40px;
    background: #f8fbff;
  }
  .ant-modal-body {
    padding: 32px;
  }
`;

export const DowngradeModal = styled(BaseModal)`
  .ant-modal-content {
    background: #f8fbff;
  }
`;

export const Restart = styled.span`
  margin-left: 24px;
  text-decoration: underline;
  cursor: pointer;
`;
