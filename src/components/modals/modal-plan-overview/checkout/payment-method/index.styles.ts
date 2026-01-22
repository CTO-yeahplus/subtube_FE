import { BaseButton } from '@/components/common/base-button';
import {
  PayPalCVVField,
  PayPalExpiryField,
  PayPalNameField,
  PayPalNumberField,
} from '@paypal/react-paypal-js';
import styled from 'styled-components';

export const ButtonPay = styled(BaseButton)`
  margin-bottom: 24px;
`;

export const WrapperDivide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  margin: 17px 0px 24px 0px;
`;

export const DivideText = styled.span`
  color: #404040;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Divide = styled.div`
  background: #d9d9d9;
  height: 1px;
  flex: 1 0 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const Item = styled.div`
  width: 50%;
`;

export const AcceptText = styled.div`
  color: #404040;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

export const Note = styled.div`
  margin-bottom: 24px;
`;

export const Required = styled.span`
  color: #ff0000;
`;

export const NoteTitle = styled.span`
  color: #404040;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;

export const NoteContent = styled.span`
  color: #404040;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CardNumber = styled(PayPalNumberField)`
  width: 100%;
  height: 50px;
  border-radius: 8px;
`;

export const CardName = styled(PayPalNameField)`
  width: 100%;
  height: 50px;
  border-radius: 8px;
`;

export const CardExpiry = styled(PayPalExpiryField)`
  width: 100%;
  height: 50px;
  border-radius: 8px;
`;

export const CardCvv = styled(PayPalCVVField)`
  width: 100%;
  height: 50px;
  border-radius: 8px;
`;

export const TextError = styled.div`
  color: #ff0000;
  font-size: 14px;
  height: 20px;
  margin: 6px 0px;
`;
