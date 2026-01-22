import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import { FormTitle } from '@/layouts/auth-layout/index.styles';
import PhoneInput from 'react-phone-input-2';
import styled, { css } from 'styled-components';

export const Title = styled(FormTitle)`
  margin-bottom: 1.875rem;
  font-size: ${FONT_SIZE.xxxl};
`;

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
`;
