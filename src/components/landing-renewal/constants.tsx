// src/components/landing-renewal/constants.ts
import React from 'react';
import Icon1 from '@/assets/images/svg/dashboard/icon1.svg';
import Icon2 from '@/assets/images/svg/dashboard/icon2.svg';
import Icon3 from '@/assets/images/svg/dashboard/icon3.svg';
import Icon4 from '@/assets/images/svg/dashboard/icon4.svg';
import { LEVEL_USER } from '@/interfaces';
import { PRICE } from '@/constants/price';

export const TYPING_WORDS = [
  'Global Reach.', '전 세계로.', '世界へのリーチ。', 'Alance Global.', 'Reichweite weltweit.',
];

export const SUPPORTED_LANGUAGES = [
  'English', '한국어', '日本語', 'Español', 'Français', 'Deutsch', 'Italiano', 
  'Português', 'Русский', '中文', 'Tiếng Việt', 'Indonesian', 'Hindi', 'Arabic',
];

export const getBentoData = (t: any) => [
  {
    title: t('expand.card.title1'),
    desc: 'Speak to the world. Translate into 40+ languages instantly.',
    icon: <Icon1 />,
    colSpan: 2,
  },
  {
    title: t('expand.card.title2'),
    desc: 'Reach audiences in North America, Asia, and Europe.',
    icon: <Icon2 />,
    colSpan: 1,
  },
  {
    title: 'Boost Engagement',
    desc: 'Higher retention with native subtitles.',
    icon: <Icon3 />,
    colSpan: 1,
  },
  {
    title: 'Save Time & Cost',
    desc: 'AI automation replaces expensive manual work.',
    icon: <Icon4 />,
    colSpan: 2,
  },
];

export const PLAN_DATA = [
  {
    level: LEVEL_USER.BRONZE,
    title: 'Bronze',
    price: Number(PRICE[LEVEL_USER.BRONZE].salePrice),
    features: ['1 YouTube Account', '12 Languages Translation'],
  },
  {
    level: LEVEL_USER.SILVER,
    title: 'Silver',
    price: Number(PRICE[LEVEL_USER.SILVER].salePrice),
    features: ['5 YouTube Accounts', '40 Languages Translation'],
    mostPopular: true,
  },
  {
    level: LEVEL_USER.GOLD,
    title: 'Gold',
    price: Number(PRICE[LEVEL_USER.GOLD].salePrice),
    features: ['Unlimited Accounts', 'Unlimited Languages'],
  },
];

export const FAQ_DATA = [
  {
    q: 'Is the translation accurate?',
    a: 'Yes, we use the latest Whisper AI model combined with our proprietary optimization for 99% accuracy.',
  },
  {
    q: 'Can I edit the subtitles?',
    a: 'Absolutely. You get a full editor to tweak timestamps and text before publishing.',
  },
  {
    q: 'Does it upload directly to YouTube?',
    a: 'Yes. Once you approve, Sub-tube pushes the captions and metadata directly to your channel.',
  },
];