import { LAYOUT, media } from '@/constants';
import styled, { css } from 'styled-components';

import { BurgerIcon } from '../common/base-burger/BurgerIcon';
import { BaseButton } from '../common/base-button';
import { BaseCol } from '../common/base-col';
import { BaseCollapse } from '../common/base-collapse/base-collapse';
import { BaseInput } from '../common/inputs/base-input';

export const HeaderActionWrapper = styled.div`
  cursor: pointer;

  & > .ant-btn span[role='img'],
  .ant-badge {
    font-size: 1.25rem;

    @media only screen and ${media.md} {
      font-size: 1.625rem;
    }
  }

  & .ant-badge {
    display: inline-block;
  }
`;

export const DropdownCollapse = styled(BaseCollapse)`
  & > .ant-collapse-item > .ant-collapse-header {
    font-weight: 600;
    font-size: 0.875rem;

    color: var(--primary-color);

    @media only screen and ${media.md} {
      font-size: 1rem;
    }
  }

  & > .ant-collapse-item-disabled > .ant-collapse-header {
    cursor: default;

    & > span[role='img'] {
      display: none;
    }
  }
`;

export const BurgerCol = styled(BaseCol)`
  z-index: 999;
  display: flex;
`;

export const SearchColumn = styled(BaseCol)`
  padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
`;

interface ProfileColumnProps {
  $isTwoColumnsLayout: boolean;
}

export const ProfileColumn = styled(BaseCol)<ProfileColumnProps>`
  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayout &&
      css`
        background-color: var(--sider-background-color);
        padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
      `}
  }
`;

export const InputSearch = styled(BaseInput)`
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 40px;
  display: inline-flex;
  padding: 20px;
  position: relative;
  border: none;
  .ant-input-prefix {
    margin-right: 8px;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
`;

export const HeaderRowMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ButtonHeader = styled(BaseButton)`
  cursor: pointer;
  padding: 0;
  margin: 0;
  .ant-btn {
    height: 0;
  }
`;
