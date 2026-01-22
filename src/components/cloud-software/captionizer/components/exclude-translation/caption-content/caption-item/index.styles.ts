import { BaseInput } from '@/components/common/inputs/base-input';
import styled from 'styled-components';

export const Time = styled.div`
  width: 260px;
`;

export const WrapperTextarea = styled.div`
  flex: 1;
`;

export const Textarea = styled(BaseInput.TextArea)`
  resize: none !important;
  overflow: auto !important;
  min-height: 85px !important;
`;

export const Input = styled(BaseInput)`
  height: 100% !important;
`;

export const CaptionItem = styled.div`
  display: flex;
  gap: 1.4rem;
  margin-top: 16px;
  margin-bottom: 5px;
`;

export const PseudoMargin = styled.div`
  height: 1.1rem;
`;
