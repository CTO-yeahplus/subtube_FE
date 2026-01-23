import { getOrderDetail } from '@/api/supcription-plan';
import ModalConfirm from '@/components/modals/modal-confirm';
import ModalPlanOverview from '@/components/modals/modal-plan-overview';
import Checkout from '@/components/modals/modal-plan-overview/checkout';
import { DATE_FORMAT, PaymentStatus, RANK_NAME, TType, TypeConfirm, planData } from '@/constants';
import { usePaymentCapture, usePaymentOrder } from '@/hooks/features/useSupcriptionPlan';
import { useFeedback } from '@/hooks/useFeedback';
import { TYPE_PURCHARE_PLAN } from '@/interfaces';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { selectIsOpenRenewPlan, setIsOpenRenewPlan } from '@/stores/progress/progress.slice';
import { queryClient } from '@/utils/react-query';
import type { CardFieldsOnApproveData, OnApproveData } from '@paypal/paypal-js';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useCallback, useMemo, useState } from 'react';

import ModalPlanConfirm from '../modal-confirm-plan';
import * as S from './index.styles';

const PlanModal = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['cloud-software']);
  const user = useAppSelector(selectCurrentUser);
  const [isOpenCheckout, setIsOpenCheckout] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [typeConfirmModal, setTypeConfirmModal] = useState<TypeConfirm>(
    TypeConfirm.PAYMENT_SUCCESS
  );

  const { notification } = useFeedback();

  const isOpenRenew = useAppSelector(selectIsOpenRenewPlan);

  const paymentOrder = usePaymentOrder();

  const paymentCapture = usePaymentCapture();

  const [loadingOrderDetail, setLoadingOrderDetail] = useState(false);

  const loadingPayment = paymentOrder.isPending || paymentCapture.isPending || loadingOrderDetail;

  const handleToggleRenewModal = () => dispatch(setIsOpenRenewPlan(!isOpenRenew));

  const handleOpenCheckout = () => {
    setIsOpenCheckout(true);
    handleToggleRenewModal();
  };

  const levelRenew = useMemo(() => {
    return user?.changeRank ? user.changeRank.change_rank : user?.level;
  }, [user]);

  const newPlanInfo = useMemo(() => {
    const data = planData.find((plan) => plan.level === levelRenew?.toUpperCase());
    return data || null;
  }, [levelRenew]);

  const paymentCalculator = useCallback(() => {
    const defaultTax = 0;
    const subTotal = newPlanInfo?.salePriceYear || 0;
    const tax = (subTotal * defaultTax) / 100;
    const total = subTotal + tax;
    return {
      defaultTax,
      tax: Number(tax.toFixed(2)).toString(),
      remainingValue: '0',
      subTotal: Number(subTotal.toFixed(2)).toString(),
      total: Number(total.toFixed(2)).toString(),
    };
  }, [newPlanInfo]);

  const handleBack = () => {
    setIsOpenCheckout(false);
    handleToggleRenewModal();
  };

  const handleActionConfirmModal = useCallback(() => {
    if (typeConfirmModal === TypeConfirm.PAYMENT_SUCCESS) {
      setIsOpenConfirm(false);
    } else if (typeConfirmModal === TypeConfirm.PAYMENT_FAIL) {
      setIsOpenCheckout(true);
      setIsOpenConfirm(false);
    }
  }, [typeConfirmModal]);

  const createOrder = async () => {
    if (!newPlanInfo) return '';

    const { tax, subTotal, total } = paymentCalculator();

    const payload = {
      rank: RANK_NAME[newPlanInfo.level],
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
      rank: RANK_NAME[newPlanInfo.level],
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
        setIsOpenCheckout(false);
        setTypeConfirmModal(TypeConfirm.PAYMENT_FAIL);
      } else if (response.data.status === PaymentStatus.PAID) {
        setIsOpenConfirm(true);
        setIsOpenCheckout(false);
        setTypeConfirmModal(TypeConfirm.PAYMENT_SUCCESS);
        dispatch(setIsOpenRenewPlan(false));
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
      setIsOpenCheckout(false);
      setTypeConfirmModal(TypeConfirm.PAYMENT_FAIL);
    }
  };

  const onError = () => {
    setIsOpenConfirm(true);
    setIsOpenCheckout(false);
    setTypeConfirmModal(TypeConfirm.PAYMENT_FAIL);
  };

  const validUntil = dayjs().add(365, 'day').format(DATE_FORMAT.DAY_MONTH_YEAR);

  return (
    <>
      <ModalConfirm
        title={t('renewPlan.title')}
        type={TType.SAD}
        isOpen={isOpenRenew}
        onClose={handleToggleRenewModal}>
        <S.PlanDescription>
          <p
            dangerouslySetInnerHTML={{
              __html: t('renewPlan.description', {
                // level: levelRenew,
                date: dayjs(user?.expire_date).add(1, 'day').format(DATE_FORMAT.LONG_DATE),
              }),
            }}></p>
          <p>{t('renewPlan.description2')}</p>
          <S.Note>
            <S.Text>{t('renewPlan.note')}</S.Text>
            <span>{t('renewPlan.noteContent')}</span>
          </S.Note>
        </S.PlanDescription>
        <S.ButtonGroup>
          <S.Button onClick={handleToggleRenewModal}>{t('renewPlan.button.close')}</S.Button>
          <S.Button type="primary" onClick={handleOpenCheckout}>
            {t('renewPlan.button.renew')}
          </S.Button>
        </S.ButtonGroup>
      </ModalConfirm>

      <ModalPlanOverview />

      <S.CheckoutModal
        open={isOpenCheckout}
        footer={false}
        closable={false}
        width={586}
        centered
        onCancel={() => setIsOpenCheckout(false)}
        destroyOnClose={true}>
        <Checkout
          loadingPayment={loadingPayment}
          validUntil={validUntil}
          newPlanInfo={newPlanInfo}
          typeChangePlan={TYPE_PURCHARE_PLAN.NEW_PURCHASE}
          onHandleBack={handleBack}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          paymentCalculator={paymentCalculator}
        />
      </S.CheckoutModal>

      <ModalPlanConfirm
        typeConfirm={typeConfirmModal}
        isOpen={isOpenConfirm}
        onOK={handleActionConfirmModal}
      />
    </>
  );
};

export default PlanModal;
