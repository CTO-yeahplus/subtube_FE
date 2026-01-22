import { media } from '@/constants';
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { HeaderActionWrapper } from '../../index.styles';

export const ProfileDropdownHeader = styled(HeaderActionWrapper)`
  cursor: pointer;
  width: 100%;
  min-width: 120px;

  .menusProfile {
    ul {
      margin-top: 2px;
      li {
        padding: 1rem !important;
        border-radius: 0 !important;
        display: flex;
        flex-direction: row-reverse;

        &:first-child {
          border-bottom: 1px solid #ccc;
        }

        > span {
          font-weight: 500;
        }
      }
    }
  }

  @media only screen and ${media.md} {
    border-radius: 50px;
    padding: 0.3125rem 0.2rem;
  }
`;

export const DownArrow = styled(DownOutlined)`
  color: var(--text-secondary-color);

  @media only screen and ${media.md} {
    color: var(--text-main-color);
  }
`;

export const NameAvatar = styled.div`
  color: var(--text-main-color);
  font-size: 20px;
  font-weight: 700;
`;

export const Name = styled.h2`
  color: var(--text-dark-color);
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #404040;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
