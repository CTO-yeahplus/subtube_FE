import { BaseButton } from '@/components/common/base-button';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const Title = styled.div`
  color: var(--primary-color);
  font-size: 24px;
  font-weight: ${FONT_WEIGHT.bold};
  margin-bottom: 2rem;
  text-align: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Text = styled.div`
  color: #404040;
  text-align: center;
  font-size: 20px;
  font-weight: ${FONT_WEIGHT.medium};
  margin-bottom: 2rem;
`;

export const SubTextItem = styled.span<{ highlight?: boolean }>`
  color: #404040;
  text-align: center;
  font-size: ${FONT_SIZE.md};
  font-weight: ${(props) => (props.highlight ? FONT_WEIGHT.bold : FONT_WEIGHT.medium)};
`;

export const SubText = styled.div`
  color: #404040;
  text-align: center;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.medium};
`;

export const SubTextContainer = styled.div`
  margin-bottom: 2rem;
`;

export const WrapperButton = styled.span`
  display: flex;
  justify-content: center;
`;

export const CloseButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 1.125rem;
  padding: 0 24px;
  width: 150px;
  height: 50px;
`;

export const IFrame = styled.iframe`
  width: 100%;
  height: 315px;
`;

export const Link = styled.a`
  text-decoration: underline;
`;
