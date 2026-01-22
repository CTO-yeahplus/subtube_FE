import IconQS from '@/assets/images/svg/icon-question.svg';
import { BaseSelect } from '@/components/common/selects/base-select';
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

export const WrapperSelect = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SelectTitle = styled.div`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.bold};
  margin-top: 24px;
`;

export const Required = styled.span`
  color: #ff0000;
`;

export const Select = styled(BaseSelect)`
  width: 560px;
  margin-top: 12px;
`;

export const TextError = styled.div`
  margin-top: 12px;
  color: #ff0000;
`;

export const LanguageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const Available = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconQuestion = styled(IconQS)`
  cursor: pointer;
`;
