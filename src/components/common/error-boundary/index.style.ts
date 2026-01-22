import { BASE_COLORS } from '@/constants';
import { styled } from 'styled-components';

import { BaseButton } from '../base-button';

export const wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  z-index: 9999;
`;

export const reloadBtn = styled(BaseButton)`
  background-color: ${BASE_COLORS.skyblue} !important;
  color: ${BASE_COLORS.white} !important;
`;
