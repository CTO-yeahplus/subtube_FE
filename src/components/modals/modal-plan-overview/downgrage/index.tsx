import useYoutubeAccount from '@/components/cloud-software/index.utils';
import { BaseCheckbox } from '@/components/common/base-checkbox';
import { DATE_FORMAT, RANK_NAME } from '@/constants';
import { usePagination } from '@/hooks/usePagination';
import { LEVELTYPE, LEVEL_USER, LEVEL_USER_LIMIT_CONNECT } from '@/interfaces';
import { IListYoutubeAccount } from '@/interfaces/cloud-software';
import { InfoPlan } from '@/interfaces/plan-overview';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { setIsOpenPlanOverview } from '@/stores/progress/progress.slice';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useEffect, useMemo, useRef, useState } from 'react';

import * as S from './index.styles';

interface IProps {
  currentPlanInfo?: InfoPlan;
  newPlanInfo: InfoPlan | null;
  onCancel: () => void;
  onConfirm: (ids: number[], currentPlan: string, newPlan: string) => void;
  plan: LEVELTYPE;
  loadingBtn: boolean;
}

const DownGradePlan = ({
  currentPlanInfo,
  newPlanInfo,
  onCancel,
  onConfirm,
  plan,
  loadingBtn,
}: IProps) => {
  const { t } = useTranslation(['cloud-software', 'common']);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  const [accounts, setAccounts] = useState<CheckboxValueType[]>([]);

  const [isConfirm, setIsConfirm] = useState(false);

  const accountRef = useRef(null);

  const pagination = usePagination();

  const { loadingListYoutube, dataPagination, refetchListYoutube } = useYoutubeAccount(
    pagination.params,
    false
  );

  const [dataListYoutube, setDataListYoutube] = useState<IListYoutubeAccount[]>([]);

  useEffect(() => {
    (async () => {
      const data = await refetchListYoutube();
      if (data?.data?.data.entities) {
        const listAccount = [...dataListYoutube, ...data.data.data.entities];
        const sortData = listAccount.sort((a, b) => {
          return a.name_channel?.toLowerCase() > b.name_channel?.toLowerCase() ? 1 : -1;
        });
        setDataListYoutube(sortData);
      }
    })();
  }, [pagination.currentPage]);

  const handleLoadMoreAccount = () => {
    const total = dataPagination?.total ?? 0;
    const hasMore = dataListYoutube.length > 0 && dataListYoutube.length < total;
    if (!loadingListYoutube && hasMore) {
      pagination.onChange(pagination.currentPage + 1);
    }
  };

  useEffect(() => {
    const element = accountRef.current as any;
    if (element) {
      const onScroll = () => {
        if (Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) <= 1)
          handleLoadMoreAccount();
      };

      element.addEventListener('scroll', onScroll);

      return () => {
        element.removeEventListener('scroll', onScroll);
      };
    }
  });

  const accountOptions = useMemo(() => {
    const result = dataListYoutube.map((item) => ({
      label: item.name_channel,
      value: item.id,
    }));
    return result || [];
  }, [dataListYoutube]);

  useEffect(() => {
    if (!accountOptions.length) {
      setIsConfirm(true);
    } else {
      setIsConfirm(false);
    }
  }, [accountOptions]);

  const onChangeAccounts = (checkedValues: CheckboxValueType[]) => {
    if (plan === LEVEL_USER.BRONZE) {
      setAccounts(checkedValues.length ? [checkedValues[checkedValues.length - 1]] : []);
    } else setAccounts(checkedValues);
  };

  const handleOk = () => {
    if (isConfirm) {
      onConfirm(accounts as number[], user?.level ?? '', RANK_NAME[plan]);
    } else {
      setIsConfirm(true);
    }
  };

  const handleCancel = () => {
    if (isConfirm) {
      setIsConfirm(false);
      if (!accountOptions.length) {
        dispatch(setIsOpenPlanOverview(true));
        onCancel();
      }
    } else {
      onCancel();
    }
  };

  const infoPlan = useMemo(() => {
    return plan === LEVEL_USER.BRONZE
      ? {
          numberAcc: LEVEL_USER_LIMIT_CONNECT.BRONZE,
          text: RANK_NAME[LEVEL_USER.BRONZE],
        }
      : {
          numberAcc: LEVEL_USER_LIMIT_CONNECT.SILVER,
          text: RANK_NAME[LEVEL_USER.SILVER],
        };
  }, [plan]);

  return (
    <S.Wrapper>
      <S.Title>{t(isConfirm ? 'downgrade.confirmChange' : 'downgrade.selectAccount')}</S.Title>
      {!isConfirm ? (
        <S.AccoutSelectWrapper>
          <S.Description>
            <p
              dangerouslySetInnerHTML={{
                __html: t('downgrade.descripiton1', {
                  number: infoPlan.numberAcc,
                  level: infoPlan.text,
                }),
              }}
            ></p>
            <p>{t('downgrade.description2')}</p>
          </S.Description>
          <S.Label>{t('downgrade.textSelectAccount', { number: infoPlan.numberAcc })}</S.Label>
          <S.CheckboxWrapper ref={accountRef}>
            <BaseCheckbox.Group value={accounts} onChange={onChangeAccounts}>
              {accountOptions.map(({ label, value }) => {
                const isDisable =
                  accounts.length === LEVEL_USER_LIMIT_CONNECT.SILVER && !accounts.includes(value);
                return (
                  <BaseCheckbox value={value} disabled={isDisable} key={label}>
                    {label}
                  </BaseCheckbox>
                );
              })}
            </BaseCheckbox.Group>
          </S.CheckboxWrapper>

          <S.Note>
            <span>{t('downgrade.note')}:</span>
            <i> {t('downgrade.noteContent')}</i>
          </S.Note>
        </S.AccoutSelectWrapper>
      ) : (
        <S.InfoCard>
          <S.InfoItem>
            <S.PlanName>
              {t('downgrade.currentPlan')}: <b>{user?.level}</b>
            </S.PlanName>
            <S.PlanData>
              <span>
                ${currentPlanInfo?.salePriceYear ?? 0}/year - {t('downgrade.billedAnnually')}
              </span>
              <span>
                {t('downgrade.validUntil')}:
                <b> {dayjs(user?.expire_date).format(DATE_FORMAT.DAY_MONTH_YEAR)}</b>
              </span>
            </S.PlanData>
          </S.InfoItem>
          <S.InfoItem>
            <S.PlanName>
              {t('downgrade.newPlan')}: <b>{infoPlan.text}</b>
            </S.PlanName>
            <S.PlanData>
              <span>
                ${newPlanInfo?.salePriceYear ?? 0}/year - {t('downgrade.billedAnnually')}
              </span>
              <span>
                {t('downgrade.startFrom')}:
                <b> {dayjs(user?.expire_date).add(1, 'day').format(DATE_FORMAT.DAY_MONTH_YEAR)}</b>
              </span>
            </S.PlanData>
          </S.InfoItem>
        </S.InfoCard>
      )}
      <S.PlanDescription>
        <p>
          {t('downgrade.yourNewPlan')}: <b>{infoPlan.text}</b> {t('downgrade.startOn')}
          <b>{dayjs(user?.expire_date).add(1, 'day').format(DATE_FORMAT.LONG_DATE)}.</b>
        </p>
        <p>{t('downgrade.description3')}</p>
      </S.PlanDescription>

      <S.ButtonGroup>
        <S.Button onClick={handleCancel}>
          {t(isConfirm ? 'downgrade.button.back' : 'downgrade.button.cancel')}
        </S.Button>
        <S.Button type="primary" onClick={handleOk} loading={loadingBtn}>
          {t(isConfirm ? 'downgrade.button.confirm' : 'downgrade.button.next')}
        </S.Button>
      </S.ButtonGroup>
    </S.Wrapper>
  );
};

export default DownGradePlan;
