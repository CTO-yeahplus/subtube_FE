import { FONT_SIZE } from '@/constants';
import styled from 'styled-components';

export const RememberMeText = styled.span`
  color: var(--primary-color);
  font-size: ${FONT_SIZE.xs};
`;

export const ForgotPasswordText = styled.div`
  color: var(--text-light-color);
  font-size: ${FONT_SIZE.xs};
  text-decoration: underline;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;
