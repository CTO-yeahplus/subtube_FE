import { BaseMenu } from '@/components/common/base-menu';
import styled, { css } from 'styled-components';

export const Menu = styled(BaseMenu)`
  a {
    width: 100%;
    display: block;
  }

  .ant-menu-item.ant-menu-item-selected::after {
    border-color: var(--primary-color);
  }

  .ant-menu-item:not(:last-child),
  .ant-menu-submenu-title {
    margin-bottom: 8px;
  }
`;

export const PathItem = styled.span<{ active: string }>`
  @media (min-width: 768px) and (max-width: 1280px) {
    color: var(--black);
  }
  ${(props) =>
    props.active === 'true'
      ? css`
          color: var(--text-sider-primary-color) !important;
        `
      : css`
          color: var(--white);
        `};
`;
