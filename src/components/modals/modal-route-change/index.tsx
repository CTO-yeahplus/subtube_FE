import ModalConfirm from '@/components/modals/modal-confirm';
import { TType } from '@/constants';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { selectIsProgress, setIsProgress } from '@/stores/progress/progress.slice';
import { checkExpiredDate } from '@/utils';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';

import * as S from './index.styles';

const RouteChangeWrapper = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [nextUrl, setNextUrl] = useState<string>();
  const dispatch = useAppDispatch();
  const isProgress = useAppSelector(selectIsProgress);
  const user = useAppSelector(selectCurrentUser);

  const isExpiredDate = useMemo(() => {
    return user?.expire_date && checkExpiredDate(user.expire_date);
  }, [user]);

  const isNewUser = useMemo(() => !user?.level, [user]);

  useEffect(() => {
    if (user && (isExpiredDate || isNewUser)) {
      router.push('/cloud-software/youtube-accounts');
    }
  }, [user, router, isNewUser, isExpiredDate]);

  useEffect(() => {
    const handleWindowClose = (e: any) => {
      if (isProgress) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    const handleRouteChange = (url: string) => {
      let newUrl = url;
      if (url.startsWith('/ko')) {
        newUrl = url.replace(/^\/ko/, '');
      }

      if (newUrl === router.pathname) return;

      if (!nextUrl && newUrl !== '/auth/login' && isProgress) {
        setOpenModal(true);
        setNextUrl(url);
        router.events.emit('routeChangeError', '', '', {
          shallow: false,
        });
        throw 'RouteChange aborted.';
      }
    };

    window.addEventListener('beforeunload', handleWindowClose);
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, nextUrl, isProgress]);

  const onClose = () => {
    setNextUrl(undefined);
    setOpenModal(false);
  };

  const onOk = () => {
    if (nextUrl) {
      router.push(nextUrl);
      dispatch(setIsProgress(false));
    }
  };

  if (!user || isExpiredDate || isNewUser) return;

  return (
    <>
      <ModalConfirm
        type={TType.WARNING}
        isOpen={openModal}
        onClose={onClose}
        title={t('message.progressNotSaved')}
        btnOk={{
          action: onOk,
          name: t('button.quit'),
        }}
        btnCancel={{
          action: onClose,
        }}
      >
        <S.ModalDesc>{t('message.questionQuit')}</S.ModalDesc>
      </ModalConfirm>
      {children}
    </>
  );
};

export default RouteChangeWrapper;
