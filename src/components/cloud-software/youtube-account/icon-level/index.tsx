import IconBronzeLarge from '@/assets/images/svg/my-profile/icon-bronze-large.svg';
import IconBronzeMiddle from '@/assets/images/svg/my-profile/icon-bronze-middle.svg';
import IconBronze from '@/assets/images/svg/my-profile/icon-bronze.svg';
import IconGoldLarge from '@/assets/images/svg/my-profile/icon-gold-large.svg';
import IconGoldMiddle from '@/assets/images/svg/my-profile/icon-gold-middle.svg';
import IconGold from '@/assets/images/svg/my-profile/icon-gold.svg';
import IconSilverLarge from '@/assets/images/svg/my-profile/icon-silver-large.svg';
import IconSilverMiddle from '@/assets/images/svg/my-profile/icon-silver-middle.svg';
import IconSilver from '@/assets/images/svg/my-profile/icon-silver.svg';
import { LEVEL_USER } from '@/interfaces';
import React from 'react';

interface IProps {
  level?: string;
  size?: 'normal' | 'middle' | 'large';
}

const IconType: Record<
  string,
  { normal: React.ReactNode; middle: React.ReactNode; large: React.ReactNode }
> = {
  [LEVEL_USER.DEFAULT]: {
    large: <IconBronzeLarge />,
    middle: <IconBronzeMiddle />,
    normal: <IconBronze />,
  },
  [LEVEL_USER.BRONZE]: {
    large: <IconBronzeLarge />,
    middle: <IconBronzeMiddle />,
    normal: <IconBronze />,
  },
  [LEVEL_USER.SILVER]: {
    large: <IconSilverLarge />,
    middle: <IconSilverMiddle />,
    normal: <IconSilver />,
  },
  [LEVEL_USER.GOLD]: {
    large: <IconGoldLarge />,
    middle: <IconGoldMiddle />,
    normal: <IconGold />,
  },
};

export const IConLevel: React.FC<IProps> = ({ level, size = 'normal' }: IProps) => {
  return level ? IconType[level][size] : null;
};
