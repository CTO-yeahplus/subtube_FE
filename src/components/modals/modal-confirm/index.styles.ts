import { BaseButton } from '@/components/common/base-button';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const Title = styled.div`
  font-size: ${FONT_SIZE.xxl};
  font-weight: ${FONT_WEIGHT.bold};
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const Content = styled.div`
  margin-bottom: 1.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.25rem;
`;

export const Button = styled(BaseButton)<{ bg: string; color: string; border: string }>`
  border-radius: 0.5rem;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  background-color: ${({ bg }) => bg} !important;
  color: ${({ color }) => color} !important;
  border: ${({ border }) => border};
  min-width: 150px;
`;
