import { FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const Title = styled.div`
  color: var(--primary-color);
  font-size: 24px;
  font-weight: ${FONT_WEIGHT.bold};
  text-align: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  color: #404040;
  text-align: center;
  font-size: 16px;
  font-weight: ${FONT_WEIGHT.medium};
`;
