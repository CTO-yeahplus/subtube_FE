import { ROUTER_PATH } from '@/constants';
import { useGetDetailUserQuery } from '@/hooks/features/useUsers';
import { useAppDispatch } from '@/stores/hooks';
import {
  setIsOpenPlanOverview,
  setIsOpenRenewPlan,
  setIsProgress,
} from '@/stores/progress/progress.slice';
import { checkDateAfterExpired, checkExpiredDate } from '@/utils';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import * as S from './index.styles';
import { SidebarNavigationItem, sidebarNavigation } from './menu.utils';

interface SiderContentProps {
  setCollapsed: (isCollapsed: boolean) => void;
}

const expiredPaymentCheckURls: string[] = [ROUTER_PATH.TRANSLATOR, ROUTER_PATH.CAPTION];

const SiderMenu: React.FC<SiderContentProps> = ({ setCollapsed }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { refetch } = useGetDetailUserQuery();

  const openedSubmenu = sidebarNavigation.find(({ children }) =>
    children?.some(({ url }) => url === router.pathname)
  );

  const defaultOpenKeys = openedSubmenu ? [openedSubmenu.key] : [];

  return (
    <S.Menu
      mode="inline"
      defaultOpenKeys={defaultOpenKeys}
      selectedKeys={defaultOpenKeys}
      onClick={() => setCollapsed(true)}
      items={sidebarNavigation.map((nav: SidebarNavigationItem) => {
        const isSubMenu = nav.children?.length;

        return {
          key: nav.key,
          title: t(nav.title),
          label: isSubMenu ? t(nav.title) : <Link href={nav.url || ''}>{t(nav.title)}</Link>,
          icon: nav.key === openedSubmenu?.key ? nav.iconActive : nav.icon,
          children:
            isSubMenu &&
            nav.children &&
            nav.children.map((childNav) => ({
              key: childNav.key,
              label: (
                <Link
                  href={childNav.url || ''}
                  onClick={async (e) => {
                    e.preventDefault();
                    const isMenuCheckExpired =
                      childNav.url && expiredPaymentCheckURls.includes(childNav.url);

                    if (isMenuCheckExpired || childNav.url === ROUTER_PATH.YOUTUBE_ACCOUNT) {
                      const dataUser = await refetch();
                      const userData = dataUser?.data?.data;
                      if (isMenuCheckExpired) {
                        if (userData) {
                          if (!userData.level) {
                            dispatch(setIsOpenPlanOverview(true));
                            return;
                          }
                          if (checkExpiredDate(userData.expire_date)) {
                            if (checkDateAfterExpired(userData.expire_date, 30)) {
                              dispatch(setIsOpenRenewPlan(true));
                              dispatch(setIsProgress(false));
                              return;
                            } else {
                              dispatch(setIsOpenPlanOverview(true));
                              dispatch(setIsProgress(false));
                              return;
                            }
                          }
                        }
                      }
                    }

                    router.push(childNav.url ?? '');
                  }}>
                  <S.PathItem active={(router.pathname === childNav.url).toString()}>
                    {t(childNav.title)}
                  </S.PathItem>
                </Link>
              ),
              title: t(childNav.title),
            })),
        };
      })}
    />
  );
};

export default SiderMenu;
