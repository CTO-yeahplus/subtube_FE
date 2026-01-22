import IconQuestion from '@/assets/images/svg/my-profile/icon-question-circle.svg';
import { IConLevel } from '@/components/cloud-software/youtube-account/icon-level';
import { DATE_FORMAT } from '@/constants';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { setIsOpenPlanOverview } from '@/stores/progress/progress.slice';
import { checkExpiredDate } from '@/utils';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import * as S from './index.styles';

const CurrentPlan = () => {
  const { t } = useTranslation(['cloud-software', 'common']);

  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const isExpiredDate = useMemo(() => {
    return user?.expire_date && checkExpiredDate(user.expire_date);
  }, [user]);

  return (
    <>
      {user?.level && !isExpiredDate && (
        <S.Wrapper onClick={() => dispatch(setIsOpenPlanOverview(true))}>
          <S.SubTitle>
            <IconQuestion />
            {t('youtube.your-current-plan')}
          </S.SubTitle>
          <IConLevel level={user?.level?.toUpperCase()} />
          <S.SubTitle>
            {t('youtube.valid-until')}:
            <br />
            {dayjs(user.expire_date).format(DATE_FORMAT.DAY_MONTH_YEAR)}
          </S.SubTitle>
        </S.Wrapper>
      )}
    </>
  );
};

export default CurrentPlan;
