import { BaseButton } from '@/components/common/base-button';
import { BaseForm } from '@/components/common/forms/base-form';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import PhoneInput from 'react-phone-input-2';
import styled, { css } from 'styled-components';

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

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: ${FONT_WEIGHT.bold};
  color: var(--text-dark-color);
`;

export const Plan = styled.div`
  > div {
    flex-direction: row;
  }
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

export const PhoneNumber = styled(PhoneInput)<{ disabled: boolean; phoneCodeValid: boolean }>`
  border-radius: 6px;

  input.form-control {
    font-size: ${FONT_SIZE.md};
    background: var(--white);
    font-weight: ${FONT_WEIGHT.light};
    width: 100%;
    height: 50px;
    color: black;
    &::placeholder {
      color: #ccc;
    }
  }

  .flag-dropdown {
    border: none;
    outline: none;
    background: transparent;
  }

  .selected-flag {
    border: 1px solid #cacaca;
    background: transparent !important;

    ${(props) =>
      !props.phoneCodeValid &&
      css`
        .flag {
          background-image: none;
        }
      `}
  }

  ${(props) =>
    props.disabled &&
    css`
      input.form-control {
        background: var(--disabled-bg-color);
        color: var(--disabled-color);
      }
    `}
`;
