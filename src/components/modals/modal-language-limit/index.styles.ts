import { BaseButton } from '@/components/common/base-button';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const PopupContent = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled('p')`
  font-size: ${FONT_SIZE.xxl};
  font-weight: ${FONT_WEIGHT.bold};
  text-align: center;
`;

export const WrapSubtitle = styled('p')`
  /* text-align: center; */
  /* display: flex; */
  text-align: center;
`;

export const SubtitleText = styled('span')``;

export const SubtitleTextBold = styled('span')`
  font-weight: ${FONT_WEIGHT.bold};
`;

export const WrapActionButton = styled('div')`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const WrapIconLevel = styled('div')`
  margin: 2rem 0;
`;

export const ActionButton = styled(BaseButton)`
  width: 190px !important;
`;
