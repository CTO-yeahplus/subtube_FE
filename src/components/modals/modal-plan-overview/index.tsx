import { getOrderDetail } from '@/api/supcription-plan';
import IconInfo from '@/assets/images/svg/cloud-software/icon-info.svg';
import IconClose from '@/assets/images/svg/my-profile/icon-close-big.svg';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import { BaseCardPlan } from '@/components/common/base-plan';
import { DATE_FORMAT, PaymentStatus, RANK_NAME, TypeConfirm, planData } from '@/constants';
import {
  useChangePlan,
  usePaymentCapture,
  usePaymentOrder,
} from '@/hooks/features/useSupcriptionPlan';
import { useFeedback } from '@/hooks/useFeedback';
import { LEVELTYPE, LEVEL_USER, TYPE_PURCHARE_PLAN } from '@/interfaces';
import { InfoPlan } from '@/interfaces/plan-overview';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { selectIsOpenPlanOverview, setIsOpenPlanOverview } from '@/stores/progress/progress.slice';
import { checkExpiredDate } from '@/utils';
import cookies from '@/utils/cookie';
import { queryClient } from '@/utils/react-query';
import type { CardFieldsOnApproveData, OnApproveData } from '@paypal/paypal-js';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';

import ModalPlanConfirm from '../modal-confirm-plan';
import CancelPlanModal from './cancel';
import Checkout from './checkout';
import DownGradePlan from './downgrage';
import * as S from './index.styles';

const POINT_LEVEL = {
  [LEVEL_USER.DEFAULT]: 0,
  [LEVEL_USER.BRONZE]: 1,
  [LEVEL_USER.SILVER]: 2,
  [LEVEL_USER.GOLD]: 3,
} as const;

const ModalPlanOverview = () => {
  const { t } = useTranslation(['cloud-software', 'common']);
  const [isOpenCheckout, setIsOpenCheckOut] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [isOpenDowngrade, setIsOpenDowngrade] = useState(false);
  const [isOpenCancelPlan, setIsOpenCancelPlan] = useState(false);
  const [typeConfirmModal, setTypeConfirmModal] = useState<TypeConfirm>(
    TypeConfirm.PAYMENT_SUCCESS
  );
  const { notification } = useFeedback();
  const { push } = useRouter();

  const [newPlan, setNewPlan] = useState<LEVELTYPE>(LEVEL_USER.DEFAULT);
  const [newPlanInfo, setNewPlanInfo] = useState<InfoPlan | null>(null);
  const [typeChangePlan, setTypeChangePlan] = useState<string>('');

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const isOpenPlanOverview = useAppSelector(selectIsOpenPlanOverview);

  const { mutate, isPending: loadingChangePlan } = useChangePlan();

  const paymentOrder = usePaymentOrder();

  const paymentCapture = usePaymentCapture();

  const [loadingOrderDetail, setLoadingOrderDetail] = useState(false);

  const loadingPayment = paymentOrder.isPending || paymentCapture.isPending || loadingOrderDetail;

  // Compare before and after plans
  const getTypeChangePlan = useCallback((newLevel: LEVELTYPE, currentLevel?: LEVELTYPE) => {
    if (!currentLevel) return TYPE_PURCHARE_PLAN.NEW_PURCHASE;
    const levelDifference = POINT_LEVEL[newLevel] - POINT_LEVEL[currentLevel];
    return levelDifference > 0 ? TYPE_PURCHARE_PLAN.UPGRADE : TYPE_PURCHARE_PLAN.DOWNGRADE;
  }, []);

  const currentPlanInfo = planData.find((plan) => plan.level === user?.level?.toUpperCase());

  const handleTogglePlanOVerview = () => dispatch(setIsOpenPlanOverview(!isOpenPlanOverview));

  // button GetStarted click
  const handleGetStarted = (level: LEVELTYPE, data: InfoPlan) => {
    const typeChange = getTypeChangePlan(level, user?.level?.toUpperCase() as LEVELTYPE);
    setNewPlan(level);
    setNewPlanInfo(data);
    setTypeChangePlan(typeChange);

    switch (typeChange) {
      case TYPE_PURCHARE_PLAN.NEW_PURCHASE:
        handleTogglePlanOVerview();
        setIsOpenCheckOut(true);
        break;
      case TYPE_PURCHARE_PLAN.UPGRADE:
        if (user?.payment_before_deadline) {
          notification.error({
            message: t('validate.MC24', { ns: 'common' }),
          });
          return;
        }
        handleTogglePlanOVerview();
        setIsOpenCheckOut(true);
        break;
      case TYPE_PURCHARE_PLAN.DOWNGRADE:
        if (user?.changeRank?.change_rank?.toUpperCase() === level) {
          notification.error({
            message: t('validate.MC19', { ns: 'common' }),
          });
          return;
        }
        if (user?.payment_before_deadline) {
          notification.error({
            message: t('validate.MC24', { ns: 'common' }),
          });
          return;
        }
        handleTogglePlanOVerview();
        setIsOpenDowngrade(true);
        break;
      default:
        break;
    }

    return { level, data };
  };

  // back checkout click
  const handleBackCheckout = () => {
    setIsOpenCheckOut(false);
    handleTogglePlanOVerview();
  };

  const paymentCalculator = () => {
    const expireDate = user?.expire_date ? dayjs(user.expire_date) : dayjs();
    const currentDate = dayjs();

    const remainingTime = expireDate.diff(currentDate, 'day');

    const remainingValue = (Number(currentPlanInfo?.salePriceYear ?? 0) * remainingTime) / 365;

    const subTotal =
      typeChangePlan === TYPE_PURCHARE_PLAN.UPGRADE
        ? Number(newPlanInfo?.salePriceYear ?? 0) - remainingValue
        : Number(newPlanInfo?.salePriceYear ?? 0);

    const defaultTax = 0;

    const tax = (subTotal * defaultTax) / 100;

    const total = subTotal + tax;

    return {
      defaultTax,
      tax: Number(tax.toFixed(2)).toString(),
      remainingValue: Number(remainingValue.toFixed(2)).toString(),
      subTotal: Number(subTotal.toFixed(2)).toString(),
      total: Number(total.toFixed(2)).toString(),
    };
  };

  const createOrder = async () => {
    if (!newPlanInfo) return '';

    const { tax, subTotal, total } = paymentCalculator();

    const payload = {
      rank: RANK_NAME[newPlan],
      tax: Number(tax),
      sub_total: Number(subTotal),
      total: Number(total),
    };

    try {
      const response = await paymentOrder.mutateAsync(payload);
      return response?.data?.id;
    } catch (error: any) {
      error?.data?.message && notification.error({ message: error.data.message });
    }
  };

  const onApprove = async (data: OnApproveData | CardFieldsOnApproveData) => {
    if (!newPlanInfo) return;

    const { tax, subTotal, total } = paymentCalculator();

    const payload = {
      order_id: data.orderID,
      rank: RANK_NAME[newPlan],
      tax: Number(tax),
      sub_total: Number(subTotal),
      total: Number(total),
    };

    try {
      setLoadingOrderDetail(true);
      const orderDetail = await getOrderDetail(data.orderID);
      setLoadingOrderDetail(false);
      if (!orderDetail.success) return;

      const response = await paymentCapture.mutateAsync(payload);
      if (response.data.status === PaymentStatus.FAILED) {
        setIsOpenConfirm(true);
        setIsOpenCheckOut(false);
        setTypeConfirmModal(TypeConfirm.PAYMENT_FAIL);
      } else if (response.data.status === PaymentStatus.PAID) {
        setIsOpenConfirm(true);
        setIsOpenCheckOut(false);
        setTypeConfirmModal(TypeConfirm.PAYMENT_SUCCESS);
        queryClient.invalidateQueries({
          queryKey: ['userDetail'],
        });
        queryClient.invalidateQueries({
          queryKey: ['total-video'],
        });
        queryClient.invalidateQueries({
          queryKey: ['list-youtube'],
        });
      } else {
        if (typeof response?.data?.message !== 'string') return;
        response?.data?.message && notification.error({ message: response.data.message });
      }
    } catch (error: any) {
      setLoadingOrderDetail(false);
      if (error?.data?.data?.['3d_secure']) {
        error?.data?.message && notification.error({ message: error.data.message });
      }

      setIsOpenConfirm(true);
      setIsOpenCheckOut(false);
      setTypeConfirmModal(TypeConfirm.PAYMENT_FAIL);
    }
  };

  const onError = () => {
    setIsOpenConfirm(true);
    setIsOpenCheckOut(false);
    setTypeConfirmModal(TypeConfirm.PAYMENT_FAIL);
  };

  // downgrade confirm
  const handleConfirmDownGrade = (ids: number[], currentPlan: string, newPlan: string) => {
    mutate(
      {
        keep_yt_account_id: ids,
        current_rank: currentPlan,
        new_rank: newPlan,
      },
      {
        onSuccess: () => {
          setIsOpenDowngrade(false);
          setIsOpenConfirm(true);
          setTypeConfirmModal(TypeConfirm.DOWNGRADE_SUCCESS);
          queryClient.invalidateQueries({
            queryKey: ['userDetail'],
          });
        },
      }
    );
  };

  // cance downgrade modal
  const handleCancelDowngrade = () => {
    setIsOpenDowngrade(false);
  };

  // open modal cancel
  const handleClickCancelPlan = () => {
    setIsOpenCancelPlan(true);
    handleTogglePlanOVerview();
  };

  // keep plan click
  const handleKeepCancelPlan = () => {
    setIsOpenCancelPlan(false);
  };

  //  finish cancel plan click
  const handleFinishCancelPlan = () => {
    mutate(
      {
        keep_yt_account_id: [],
        current_rank: user?.level || '',
        new_rank: '',
      },
      {
        onSuccess: () => {
          setIsOpenCancelPlan(false);
          setTypeConfirmModal(TypeConfirm.CANCEL_SUCCESS);
          setIsOpenConfirm(true);
          queryClient.invalidateQueries({
            queryKey: ['userDetail'],
          });
        },
      }
    );
  };

  // restart membership
  const handleRestartMembership = useCallback(() => {
    mutate(
      {
        keep_yt_account_id: [],
        current_rank: user?.level || '',
        new_rank: user?.level || '',
      },
      {
        onSuccess: () => {
          notification.success({ message: t('validate.MC14', { ns: 'common' }) });
          queryClient.invalidateQueries({ queryKey: ['userDetail'] });
          cookies.set('reminder', 'true');
        },
      }
    );
  }, [mutate, user?.level, t, notification]); // 의존성 추가

  // handle action case Typeconfirm
  const handleActionConfirmModal = useCallback(() => {
    switch (typeConfirmModal) {
      case TypeConfirm.PAYMENT_SUCCESS: {
        setIsOpenConfirm(false);
        break;
      }
      case TypeConfirm.PAYMENT_FAIL: {
        setIsOpenCheckOut(true);
        setIsOpenConfirm(false);
        break;
      }
      case TypeConfirm.DOWNGRADE_SUCCESS: {
        setIsOpenConfirm(false);
        push('/cloud-software/youtube-accounts');
        break;
      }
      case TypeConfirm.CANCEL_SUCCESS: {
        setIsOpenConfirm(false);
        break;
      }
      default:
        break;
    }
  }, [typeConfirmModal, push]);

  const isCanceledPlan = useMemo(() => {
    return (
      !!user?.changeRank &&
      !user?.changeRank.change_rank &&
      !user?.changeRank.keep_yt_account_id.length
    );
  }, [user?.changeRank]);

  const isExpiredDate = useMemo(() => {
    return user?.expire_date && checkExpiredDate(user.expire_date);
  }, [user?.expire_date]);

  const notificationPlan = useMemo(() => {
    if (user && user.changeRank) {
      const { changeRank } = user;
      if (changeRank?.change_rank) {
        return (
          <span>
            {t('youtube.plan-overview.planWillChange')} <b>{changeRank.change_rank}</b> on
            <b> {dayjs(user.expire_date).add(1, 'day').format(DATE_FORMAT.DAY_MONTH_YEAR)}.</b>
          </span>
        );
      }

      if (!changeRank?.change_rank && !changeRank?.keep_yt_account_id.length) {
        return (
          <span>
            {t('youtube.plan-overview.restartMembershipDesc')}{' '}
            <b>{dayjs(user.expire_date).format(DATE_FORMAT.DAY_MONTH_YEAR)}.</b>{' '}
            <S.Restart onClick={handleRestartMembership}>
              <b>{t('youtube.plan-overview.restartMember')}</b>
            </S.Restart>
          </span>
        );
      }
    }
  }, [handleRestartMembership, user, t]);

  const validUntil = dayjs().add(365, 'day').format(DATE_FORMAT.DAY_MONTH_YEAR);

  return (
    <>
      <S.ModalPlan
        open={isOpenPlanOverview}
        onCancel={handleTogglePlanOVerview}
        footer={false}
        closable={false}
        width={1024}
        centered>
        <S.Close>
          <IconClose onClick={handleTogglePlanOVerview} />
        </S.Close>
        <S.Header>
          <S.Title>{t('youtube.plan-overview.title')}</S.Title>
          <S.SubTitle>{t('youtube.plan-overview.des1')}</S.SubTitle>
          <S.SubTitle>{t('youtube.plan-overview.des2')}</S.SubTitle>
        </S.Header>
        {user?.changeRank && user.changeRank.change_rank !== user.level && (
          <S.Notification>
            <IconInfo />
            {notificationPlan}
          </S.Notification>
        )}
        <S.RowPlan gutter={24}>
          {planData.map(
            ({
              level,
              title,
              description,
              currentPriceYear,
              currentPriceMonth,
              salePriceYear,
              salePriceMonth,
              info,
              mostPopular,
            }) => {
              const isCurrentPlan = user?.level?.toUpperCase() === level;

              return (
                <S.ColPlan md={8} key={level}>
                  <BaseCardPlan
                    data={{
                      level,
                      title,
                      description,
                      currentPriceYear,
                      currentPriceMonth,
                      salePriceYear,
                      salePriceMonth,
                      info,
                      mostPopular,
                      currentPlan:
                        isCurrentPlan && !isExpiredDate
                          ? {
                              validUntil: dayjs(user?.expire_date).format(
                                DATE_FORMAT.DAY_MONTH_YEAR
                              ),
                              isCanceled: isCanceledPlan,
                            }
                          : undefined,
                    }}
                    isDisableBtn={isCanceledPlan}
                    onHandleGetStarted={handleGetStarted}
                    onHandleCancel={handleClickCancelPlan}
                  />
                </S.ColPlan>
              );
            }
          )}
        </S.RowPlan>
      </S.ModalPlan>

      <S.CheckoutModal
        open={isOpenCheckout}
        footer={false}
        closable={false}
        width={586}
        centered
        onCancel={() => setIsOpenCheckOut(false)}
        destroyOnClose={true}>
        <Checkout
          loadingPayment={loadingPayment}
          validUntil={validUntil}
          currentPlanInfo={currentPlanInfo}
          newPlanInfo={newPlanInfo}
          typeChangePlan={typeChangePlan}
          onHandleBack={handleBackCheckout}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          paymentCalculator={paymentCalculator}
        />
      </S.CheckoutModal>

      <ModalPlanConfirm
        isOpen={isOpenConfirm}
        typeConfirm={typeConfirmModal}
        onOK={handleActionConfirmModal}
      />

      {isOpenDowngrade && (
        <S.DowngradeModal
          open={isOpenDowngrade}
          footer={false}
          width={650}
          centered
          onCancel={handleCancelDowngrade}>
          <DownGradePlan
            plan={newPlan}
            currentPlanInfo={currentPlanInfo}
            newPlanInfo={newPlanInfo}
            onCancel={handleCancelDowngrade}
            onConfirm={handleConfirmDownGrade}
            loadingBtn={loadingChangePlan}
          />
        </S.DowngradeModal>
      )}

      <BaseModal
        open={isOpenCancelPlan}
        footer={false}
        width={650}
        centered
        onCancel={handleKeepCancelPlan}>
        <CancelPlanModal
          currentPlanInfo={currentPlanInfo}
          onKeep={handleKeepCancelPlan}
          onFinish={handleFinishCancelPlan}
          loadingBtn={loadingChangePlan}
        />
      </BaseModal>
    </>
  );
};

export default ModalPlanOverview;
