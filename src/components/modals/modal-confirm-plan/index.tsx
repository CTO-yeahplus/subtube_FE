import { DATE_FORMAT, TType, TypeConfirm } from '@/constants';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppSelector } from '@/stores/hooks';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import ModalConfirm from '../modal-confirm';

interface IProps {
  typeConfirm: TypeConfirm;
  isOpen: boolean;
  onOK: () => void;
}

const ModalPlanConfirm = ({ typeConfirm, isOpen, onOK }: IProps) => {
  const { t } = useTranslation(['cloud-software', 'common']);
  const user = useAppSelector(selectCurrentUser);

  const infoModalConfirm = useMemo(() => {
    const data = {
      [TypeConfirm.PAYMENT_SUCCESS]: {
        title: t('infoConfirm.payment.success.title'),
        type: TType.SUCCESS,
        btnOk: {
          text: t('infoConfirm.button.ok'),
        },
        content: (
          <div style={{ textAlign: 'center' }}>{t('infoConfirm.payment.success.description')}</div>
        ),
      },
      [TypeConfirm.PAYMENT_FAIL]: {
        title: t('infoConfirm.payment.failed.title'),
        type: TType.ERROR,
        btnOk: {
          text: t('infoConfirm.button.tryAgain'),
        },
        content: (
          <div style={{ textAlign: 'center' }}>
            <div>{t('infoConfirm.payment.failed.description')}</div>
            <div>{t('infoConfirm.payment.failed.tryAgain')}</div>
          </div>
        ),
      },
      [TypeConfirm.DOWNGRADE_SUCCESS]: {
        title: t('infoConfirm.downgrade.success.title'),
        type: TType.SUCCESS,
        btnOk: {
          text: t('infoConfirm.button.done'),
        },
        content: (
          <div style={{ textAlign: 'center' }}>
            <p>
              {t('infoConfirm.downgrade.success.yourNewPlan')}{' '}
              <b>{dayjs(user?.expire_date).add(1, 'day').format(DATE_FORMAT.DAY_MONTH_YEAR)}.</b>
            </p>
            <p> {t('infoConfirm.downgrade.success.description')}</p>
          </div>
        ),
      },
      [TypeConfirm.CANCEL_SUCCESS]: {
        title: t('infoConfirm.cancel.success.title'),
        type: TType.SAD,
        btnOk: {
          text: t('infoConfirm.button.done'),
        },
        content: (
          <div style={{ textAlign: 'center' }}>
            <p>
              {t('infoConfirm.cancel.success.description')}
              <b> {dayjs(user?.expire_date).format(DATE_FORMAT.LONG_DATE)}</b>
            </p>
          </div>
        ),
      },
    };

    return data[typeConfirm];
  }, [typeConfirm, user, t]);

  if (!user) return;

  return (
    <ModalConfirm
      isOpen={isOpen}
      title={infoModalConfirm.title}
      onClose={() => {}}
      btnOk={{
        action: onOK,
        name: infoModalConfirm.btnOk.text,
      }}
      type={infoModalConfirm.type}
    >
      {infoModalConfirm.content}
    </ModalConfirm>
  );
};

export default ModalPlanConfirm;
