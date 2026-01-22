import { DATE_FORMAT } from '@/constants';
import { InfoPlan } from '@/interfaces/plan-overview';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppSelector } from '@/stores/hooks';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import * as S from './index.styles';

interface IProps {
  currentPlanInfo?: InfoPlan;
  onFinish: () => void;
  onKeep: () => void;
  loadingBtn: boolean;
}

const CancelPlanModal = ({ currentPlanInfo, onFinish, onKeep, loadingBtn }: IProps) => {
  const { t } = useTranslation(['cloud-software', 'common']);
  const user = useAppSelector(selectCurrentUser);

  const untilDateValue = useMemo(() => {
    return user ? dayjs(user.expire_date).format(DATE_FORMAT.DAY_MONTH_YEAR) : '';
  }, [user]);

  if (!user) return;

  return (
    <S.Wrapper>
      <S.Title>{t('cancelPlan.title')}</S.Title>
      <S.Card>
        <S.PlanName>
          {t('cancelPlan.currentPlan')}: <b>{user.level}</b>
        </S.PlanName>
        <S.PlanData>
          <span>
            ${currentPlanInfo?.salePriceYear ?? 0}/year - {t('cancelPlan.billedAnnually')}
          </span>
          <span>
            {t('cancelPlan.validUntil')}:
            <b> {dayjs(user.expire_date).format(DATE_FORMAT.DAY_MONTH_YEAR)}</b>
          </span>
        </S.PlanData>
      </S.Card>

      <S.Note>
        <span>{t('cancelPlan.note')}:</span>
        <i> {t('cancelPlan.noteContent')}</i>
      </S.Note>
      <S.PlanDescription>
        <p>
          {t('cancelPlan.description')}
          <b>{untilDateValue}</b>
        </p>
        <p>{t('cancelPlan.description2')}</p>
      </S.PlanDescription>

      <S.ButtonGroup>
        <S.Button onClick={onFinish} loading={loadingBtn}>
          {t('cancelPlan.button.finish')}
        </S.Button>
        <S.Button type="primary" onClick={onKeep}>
          {t('cancelPlan.button.keep')}
        </S.Button>
      </S.ButtonGroup>
    </S.Wrapper>
  );
};

export default CancelPlanModal;
