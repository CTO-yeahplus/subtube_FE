import IconExpandArrows from '@/assets/images/svg/icon-fi-rr-expand-arrows.svg';
import IconSettings from '@/assets/images/svg/icon-fi-rr-settings.svg';
import { BaseRow } from '@/components/common/base-row';
import LanguageSwitcher from '@/components/language-switcher';
import React from 'react';

import * as S from '../index.styles';
import { ProfileDropdown } from '../profile/profile-dropdown';

interface DesktopHeaderProps {
  isTwoColumnsLayout: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isTwoColumnsLayout }) => {
  return (
    <S.HeaderRow>
      {/* <S.InputSearch
          placeholder="Search"
          prefix={<IconSearch />}
          suffix={<S.ButtonHeader type="link" icon={<IconFilterSearch />} />}
        /> */}
      <S.ProfileColumn xl={8} xxl={7} $isTwoColumnsLayout={isTwoColumnsLayout}>
        <BaseRow justify="end">
          <S.ContainerRight>
            <S.ButtonHeader type="link" icon={<IconExpandArrows />} />
            <LanguageSwitcher />
            <S.ButtonHeader type="link" icon={<IconSettings />} />
            <ProfileDropdown />
          </S.ContainerRight>
        </BaseRow>
      </S.ProfileColumn>
    </S.HeaderRow>
  );
};
