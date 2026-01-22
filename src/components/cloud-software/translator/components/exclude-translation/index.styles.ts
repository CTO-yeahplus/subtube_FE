import { BaseButton } from '@/components/common/base-button';
import { BaseInput } from '@/components/common/inputs/base-input';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 8px;
  background: var(--colors-nutral-white-white-main, #fff);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  margin-top: 32px;
  padding: 24px;
`;

export const Title = styled.div`
  color: var(--text-main-color);
  font-size: 20px;
  font-weight: ${FONT_WEIGHT.bold};
`;

export const Required = styled.span`
  color: #ff0000;
`;

export const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  height: 50px;
`;

export const Input = styled(BaseInput)``;

export const InputTitle = styled.div`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.bold};
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const InputDescription = styled.div`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.bold};
  margin-bottom: 12px;
  margin-top: 32px;
`;

export const InputButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 1.125rem;
  margin-bottom: 1rem;
  padding: 0 24px;
  gap: 12px;
  &:disabled {
    color: var(--white);
    background: #99b9d7;
  }
`;

export const WrapperTextarea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export const Textarea = styled(BaseInput.TextArea)`
  resize: none !important;
  overflow: auto !important;
`;

export const WrapperExclusionTag = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
`;

export const ExclusionTag = styled.div`
  display: flex;
  padding: 4px 4px 4px 8px;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: #d04545;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.regular};
  color: var(--white);
`;

export const TextError = styled.div`
  margin-top: 12px;
  color: #ff0000;
`;
