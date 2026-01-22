import styled from 'styled-components';

import { BaseTypography } from '../base-typography';

export const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

export const ImgWrapper = styled.div`
  max-width: 7.5rem;
`;

export const Text = styled(BaseTypography.Text)<{ size?: string }>`
  color: #404040;
  text-align: center;
  font-size: ${(props) => (props.size === 'md' ? '20px' : '16px')};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SubText = styled(BaseTypography.Text)`
  color: #404040;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
