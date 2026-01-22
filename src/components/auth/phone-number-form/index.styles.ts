import { VerificationCodeInput } from '@/components/common/inputs/verification-code-input';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import PhoneInput from 'react-phone-input-2';
import styled, { css } from 'styled-components';

export const PhoneNumber = styled(PhoneInput)<{ phoneCodeValid: boolean }>`
  border-radius: 6px;

  input.form-control {
    font-size: ${FONT_SIZE.md};
    background: var(--white);
    font-weight: ${FONT_WEIGHT.light};
    width: 100%;
    height: 50px;
    color: black;
  }

  .flag-dropdown {
    border: none;
    outline: none;
    background: transparent;
  }

  .flag-dropdown.open,
  .selected-flag .open {
    background: var(--white) !important;
  }

  .selected-flag {
    background: var(--white) !important;
    border: 1px solid #cacaca;

    ${(props) =>
      !props.phoneCodeValid &&
      css`
        .flag {
          background-image: none;
        }
      `}
  }

  .country-list {
    position: fixed;
  }
`;

export const VerificationCodeInputWrapper = styled(VerificationCodeInput)<{ invalid: boolean }>`
  .vi__character--default {
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${(props) => (props.invalid ? '1px solid #ff0000' : '1px solid #bec0c6')};
    /* outline: ${(props) => (props.invalid ? 'none' : '')}; */
  }

  .vi__character--inactive--default.character--inactive {
    background-color: var(--white);
  }
`;

export const TextError = styled.div`
  margin-top: 12px;
  color: #ff0000;
`;
