import { ROUTER_PATH } from '@/constants';
import { useLogout } from '@/hooks/features/useAuth';
import { useFeedback } from '@/hooks/useFeedback';
import { removeCredentials, selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import * as S from './index.styles';

export const ProfileOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const { notification } = useFeedback();
  const useDetail = useAppSelector(selectCurrentUser);
  const { mutate: signOut } = useLogout();

  const handleLogout = () => {
    if (useDetail?.id) {
      signOut(Number(useDetail.id), {
        onSuccess() {
          dispatch(removeCredentials());
          push(ROUTER_PATH.LOGIN);
          notification.success({ message: t('header.logoutSuccess') });
        },
      });
    }
  };

  return (
    <div {...props}>
      <S.Text>
        <Link href="javascript:void(0)" onClick={handleLogout}>
          {t('header.logout')}
        </Link>
      </S.Text>
    </div>
  );
};
