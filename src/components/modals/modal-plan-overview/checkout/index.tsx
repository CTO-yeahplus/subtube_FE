import IconBack from '@/assets/images/svg/icon-back-circle.svg';
import IconPaypal from '@/assets/images/svg/my-profile/icon-paypal.svg';
import { DATE_FORMAT } from '@/constants';
import { TYPE_PURCHARE_PLAN } from '@/interfaces';
import { InfoPlan } from '@/interfaces/plan-overview';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppSelector } from '@/stores/hooks';
import { formatNumberWithCommas } from '@/utils';
import type { CardFieldsOnApproveData, OnApproveData } from '@paypal/paypal-js';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';

import * as S from './index.styles';
import PaymentMethod from './payment-method';

interface Price {
  defaultTax: number;
  tax: string;
  remainingValue: string;
  subTotal: string;
  total: string;
}

interface IProps {
  loadingPayment: boolean;
  validUntil: string;
  currentPlanInfo?: InfoPlan;
  newPlanInfo: InfoPlan | null;
  typeChangePlan: string;
  onHandleBack: () => void;
  createOrder: () => Promise<string>;
  onApprove: (data: OnApproveData | CardFieldsOnApproveData) => Promise<void>;
  onError: () => void;
  paymentCalculator: () => Price;
}

const Checkout = ({
  loadingPayment,
  validUntil,
  currentPlanInfo,
  newPlanInfo,
  typeChangePlan,
  onHandleBack,
  createOrder,
  onApprove,
  onError,
  paymentCalculator,
}: IProps) => {
  const { t } = useTranslation(['cloud-software']);

  const { defaultTax, tax, remainingValue, subTotal, total } = paymentCalculator();

  const user = useAppSelector(selectCurrentUser);

  const startFrom = user?.start_date
    ? dayjs(user.start_date).format(DATE_FORMAT.DAY_MONTH_YEAR)
    : '';

  return (
    <S.Wrapper>
      <S.Header>
        <IconBack onClick={onHandleBack} />
        <S.Title>{t('checkout.title')}</S.Title>
      </S.Header>
      <S.Body>
        <S.Card>
          <S.PriceInfos>
            <S.InfoItem>
              <span>{newPlanInfo?.title} Plan</span>
              <span>${formatNumberWithCommas(Number(newPlanInfo?.salePriceYear) ?? 0)}</span>
            </S.InfoItem>
            <S.InfoItem>
              <span>
                ${formatNumberWithCommas(Number(newPlanInfo?.salePriceYear) ?? 0)}/year -{' '}
                {t('checkout.billedAnnually')}
              </span>
              <S.Date>
                {t('checkout.validUntil')}: <b>{validUntil}</b>
              </S.Date>
            </S.InfoItem>
          </S.PriceInfos>

          {typeChangePlan === TYPE_PURCHARE_PLAN.UPGRADE && (
            <S.PriceInfos>
              <S.InfoItem>
                <span>
                  {currentPlanInfo?.title} Plan ({t('checkout.remaining')})
                </span>
                <span>-${formatNumberWithCommas(Number(remainingValue))}</span>
              </S.InfoItem>
              <S.InfoItem>
                <span>
                  ${formatNumberWithCommas(Number(currentPlanInfo?.salePriceYear) ?? 0)}/year -{' '}
                  {t('checkout.billedAnnually')}
                </span>
                <S.Date>
                  {t('checkout.startFrom')}: <b>{startFrom}</b>
                </S.Date>
              </S.InfoItem>
            </S.PriceInfos>
          )}

          <S.PriceTotal>
            <S.InfoItem>
              <span>{t('checkout.subTotal')}</span>
              <span>${formatNumberWithCommas(Number(subTotal))}</span>
            </S.InfoItem>
            <S.InfoItem>
              <span>
                {t('checkout.tax')} ({defaultTax}%)
              </span>
              <b>${tax}</b>
            </S.InfoItem>
            <S.InfoItem>
              <span>{t('checkout.total')}</span>
              <span>${formatNumberWithCommas(Number(total))}</span>
            </S.InfoItem>
          </S.PriceTotal>
        </S.Card>

        <S.Card>
          <S.CardHeader>
            <S.CardTitle>{t('checkout.paymentMethod')}</S.CardTitle>
          </S.CardHeader>
          <S.CardsWrapper>
            <PaymentMethod
              loadingPayment={loadingPayment}
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
            />
          </S.CardsWrapper>
        </S.Card>
      </S.Body>

      <S.CardDesc>
        {t('checkout.poweredBy')} <IconPaypal />
      </S.CardDesc>
    </S.Wrapper>
  );
};

export default Checkout;
