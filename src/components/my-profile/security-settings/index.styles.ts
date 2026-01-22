import { BaseButton } from '@/components/common/base-button';
import { BaseForm } from '@/components/common/forms/base-form';
import { FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ContentRight = styled.div`
  flex: 1;
  padding: 3.75rem 3.125rem;
  border-radius: 0.75rem;
  background-color: var(--white);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: ${FONT_WEIGHT.bold};
  color: var(--text-dark-color);
  margin-bottom: 1.5rem;
`;

export const FormItem = styled(BaseForm.Item)`
  margin-bottom: 1.5rem;
`;

export const BtnCancel = styled(BaseButton)`
  width: 100%;
  color: var(--primary-color);
  border-color: var(--primary-color);
  margin-top: 1.5rem;
`;

export const BtnSave = styled(BaseButton)`
  width: 100%;
  margin-top: 1.5rem;
`;
