import IconCloudActive from '@/assets/images/svg/menu/icon-cloud-active.svg';
import IconCloud from '@/assets/images/svg/menu/icon-cloud.svg';
import IconProfileActive from '@/assets/images/svg/menu/icon-profile-active.svg';
import IconProfile from '@/assets/images/svg/menu/icon-profile.svg';
import React from 'react';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
  iconActive?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'sider.cloudSoftware',
    key: 'cloudSoftware',
    icon: <IconCloud />,
    iconActive: <IconCloudActive />,
    children: [
      {
        title: 'sider.youTubeAccounts',
        key: 'youTubeAccounts',
        url: '/cloud-software/youtube-accounts',
      },
      {
        title: 'sider.translator',
        key: 'translator',
        url: '/cloud-software/translator',
      },
      {
        title: 'sider.captionizer',
        key: 'captionizer',
        url: '/cloud-software/captionizer',
      },
    ],
  },
  {
    title: 'sider.myProfile',
    key: 'myProfile',
    url: '/my-profile',
    icon: <IconProfile />,
    iconActive: <IconProfileActive />,
    children: [
      {
        title: 'sider.personalInfo',
        key: 'personalInfo',
        url: '/my-profile/personal-info',
      },
      {
        title: 'sider.securitySettings',
        key: 'securitySettings',
        url: '/my-profile/security-settings',
      },
      {
        title: 'sider.paymentHistory',
        key: 'paymentHistory',
        url: '/my-profile/payment-history',
      },
    ],
  },
];
