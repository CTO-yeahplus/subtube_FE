import IconCup from '@/assets/images/svg/cloud-software/icon-cup.svg';
import IconChecked from '@/assets/images/svg/my-profile/icon-checked.svg';
import IconFire from '@/assets/images/svg/my-profile/icon-fire.svg';
import { IConLevel } from '@/components/cloud-software/youtube-account/icon-level';
import { LEVEL_USER } from '@/interfaces';
import { InfoPlan } from '@/interfaces/plan-overview';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppSelector } from '@/stores/hooks';
import { formatNumberWithCommas } from '@/utils';
import { useTranslation } from 'next-i18next';
import React from 'react';

import * as S from './index.styles';

interface IBaseCardPlan {
  data: InfoPlan;
  isDisableBtn: boolean;
  onHandleGetStarted: (level: keyof typeof LEVEL_USER, data: InfoPlan) => void;
  onHandleCancel: () => void;
}

export const BaseCardPlan = ({
  data,
  isDisableBtn,
  onHandleGetStarted,
  onHandleCancel,
}: IBaseCardPlan) => {
  const { t } = useTranslation(['cloud-software']);
  const user = useAppSelector(selectCurrentUser);

  const {
    level,
    title,
    description,
    currentPriceYear,
    currentPriceMonth,
    salePriceYear,
    salePriceMonth,
    mostPopular,
    currentPlan,
    info,
  } = data;
  return (
    <S.Container $mostPopular={!!mostPopular}>
      {mostPopular && (
        <S.MostPopular>
          {t('youtube.plan-overview.most-popular')} <IconCup />
        </S.MostPopular>
      )}
      <S.Card $mostPopular={!!mostPopular}>
        <S.ContainerLevel>
          <S.Level>{title}</S.Level>
          {<IConLevel size="middle" level={level} />}
        </S.ContainerLevel>
        <S.Description dangerouslySetInnerHTML={{ __html: t(description) }}></S.Description>
        <S.SubSale>
          <b>${formatNumberWithCommas(currentPriceYear)}</b>/{t('youtube.date.year')} ~{' '}
          <b>${formatNumberWithCommas(currentPriceMonth)}</b>/{t('youtube.date.month')}
        </S.SubSale>
        <S.ContainerPrice>
          <S.PriceYear>${formatNumberWithCommas(salePriceYear)}</S.PriceYear>
          <S.PriceMonthDollar>
            ~ ${formatNumberWithCommas(salePriceMonth)}
            <S.PriceMonth>/ {t('youtube.date.month')}</S.PriceMonth>
          </S.PriceMonthDollar>
        </S.ContainerPrice>
        <S.BilledAnnually>/ {t('youtube.date.billAnnually')}</S.BilledAnnually>
        {currentPlan ? (
          <S.DateValid>
            {t('youtube.valid-until')}: {currentPlan.validUntil}
          </S.DateValid>
        ) : (
          <S.Free2MonthContainer>
            <S.Free2Month>
              <IconFire />
              {t('youtube.plan-overview.freeAnnually')}
            </S.Free2Month>
          </S.Free2MonthContainer>
        )}
        {currentPlan ? (
          <S.Button type="default" color="#01509A" style={{ cursor: 'default' }}>
            {t('youtube.plan-overview.currentPlan')}
          </S.Button>
        ) : (
          <S.Button
            type="primary"
            disabled={isDisableBtn}
            onClick={() => onHandleGetStarted(level, data)}>
            {t('youtube.plan-overview.getStarted')}
          </S.Button>
        )}
        <S.InfoWrapper>
          {currentPlan && !currentPlan?.isCanceled && !user?.payment_before_deadline && (
            <S.CancelButton onClick={onHandleCancel}>
              {t('youtube.plan-overview.cancelMembership')}
            </S.CancelButton>
          )}
          {info.map((item, index) => (
            <S.Infos key={index}>
              <IconChecked />
              <S.TextInfo dangerouslySetInnerHTML={{ __html: t(item) }}></S.TextInfo>
            </S.Infos>
          ))}
        </S.InfoWrapper>
      </S.Card>
    </S.Container>
  );
};
