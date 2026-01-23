import IconLogout from '@/assets/images/svg/icon-logout.svg';
import IconProfile from '@/assets/images/svg/icon-profile.svg';
import { BaseAvatar } from '@/components/common/base-avatar';
import { BaseCol } from '@/components/common/base-col';
import { BaseDropdown } from '@/components/common/base-dropdown';
import { BaseRow } from '@/components/common/base-row';
import { ROUTER_PATH } from '@/constants';
import { useLogout } from '@/hooks/features/useAuth';
import { useGetDetailUserQuery } from '@/hooks/features/useUsers';
import { useFeedback } from '@/hooks/useFeedback';
import { useResponsive } from '@/hooks/useResponsive';
import { removeCredentials, updateUserInfo } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { selectIsProgress } from '@/stores/progress/progress.slice';
import { MenuProps } from 'antd';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import * as S from './index.styles';

const progessUrls = [ROUTER_PATH.TRANSLATOR, ROUTER_PATH.CAPTION];

export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive();
  const { t } = useTranslation('common');
  const { push, pathname } = useRouter();
  const { notification } = useFeedback();
  const dispatch = useAppDispatch();
  const { data: useDetail } = useGetDetailUserQuery();
  const { mutate: signOut } = useLogout();
  const isProgress = useAppSelector(selectIsProgress);

  const user = useAppSelector((state) => state.auth.user);
  const fName = user?.first_name?.charAt(0).toUpperCase();

  const menus: MenuProps['items'] = [
    {
      label: t('header.myProfile'),
      key: 'profile',
      icon: <IconProfile />,
    },
    {
      label: t('header.logout'),
      key: 'logout',
      icon: <IconLogout />,
    },
  ];

  const handleLogout = () => {
    if (user?.id) {
      const isPageProgessCheck = progessUrls.some((url) => pathname.startsWith(url));
      const doLogout = () => {
        signOut(Number(user.id), {
          onSuccess() {
            dispatch(removeCredentials());
            push(ROUTER_PATH.LOGIN);
            notification.success({ message: t('header.logoutSuccess') });
          },
        });
      };

      if (isPageProgessCheck && isProgress) {
        if (window.confirm('Do you really want to leave?')) {
          doLogout();
        }
      } else {
        doLogout();
      }
    }
  };

  const handleClickMenu = ({ key }: { key: string }) => {
    switch (key) {
      case 'logout':
        handleLogout();
        break;
      case 'profile':
        push('/my-profile/personal-info');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (useDetail?.data) {
      dispatch(updateUserInfo(useDetail.data));
    }
  }, [useDetail, dispatch]);

  return useDetail ? (
    <BaseDropdown
      menu={{
        items: menus,
        onClick: handleClickMenu,
      }}
      overlayClassName="menusProfile"
      trigger={['click']}
      placement="bottomRight">
      <S.ProfileDropdownHeader as={BaseRow} gutter={[10, 10]} align="middle">
        <BaseCol>
          <BaseAvatar alt="User" shape="circle" size={40}>
            <S.NameAvatar>{`${fName}`}</S.NameAvatar>
          </BaseAvatar>
        </BaseCol>
        {isTablet && (
          <BaseCol>
            <S.Name title={`${user?.first_name} ${user?.last_name}`}>
              {user?.first_name} {user?.last_name}
            </S.Name>
          </BaseCol>
        )}
      </S.ProfileDropdownHeader>
    </BaseDropdown>
  ) : null;
};
