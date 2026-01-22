import { FONT_WEIGHT } from '@/constants/theme';
import styled from 'styled-components';

export const WrapCaptionTitle = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1.4rem;
`;

export const TimeTitle = styled.div`
  width: 260px;
  color: var(--primary-color);
  font-weight: ${FONT_WEIGHT.bold};
`;

export const ExistCaptionTitle = styled.div`
  color: var(--primary-color);
  font-weight: ${FONT_WEIGHT.bold};
`;

export const WrapCaptionItems = styled.div`
  /* max-height: 500px; */
  /* overflow-y: auto; */
  padding-bottom: 2rem;
`;
