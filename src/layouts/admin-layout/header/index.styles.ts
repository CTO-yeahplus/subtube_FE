import { BaseLayout } from '@/components/common/base-layout';
import { LAYOUT } from '@/constants';
import { media } from '@/constants';
import styled, { css } from 'styled-components';

interface HeaderProps {
  $isTwoColumnsLayoutHeader: boolean;
}

export const Header = styled(BaseLayout.Header)<HeaderProps>`
  line-height: 1.5;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);

  @media only screen and ${media.md} {
    height: ${LAYOUT.desktop.headerHeight};
  }

  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayoutHeader &&
      css`
        padding: 0;
      `}
  }
`;
