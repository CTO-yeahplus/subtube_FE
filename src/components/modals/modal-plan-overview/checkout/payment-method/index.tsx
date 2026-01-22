import { paypalConfig } from '@/plugins/paypal';
import type { CardFieldsOnApproveData, OnApproveData } from '@paypal/paypal-js';
import { PayPalScriptProvider, ReactPayPalScriptOptions } from '@paypal/react-paypal-js';
import {
  PayPalButtons,
  PayPalCardFieldsComponent,
  PayPalCardFieldsProvider,
  usePayPalCardFields,
} from '@paypal/react-paypal-js';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';

import * as S from './index.styles';

interface IPaymentProps {
  loadingPayment: boolean;
  createOrder: () => Promise<string>;
  onApprove: (data: OnApproveData | CardFieldsOnApproveData) => Promise<void>;
  onError: () => void;
}

interface ISubmitPaymentProps {
  loadingPayment: boolean;
  onError: () => void;
}

const style: Record<string, any> = {
  input: {
    padding: '16px 12px',
    outline: 'none',
    color: '#3a3a3a',
    height: '50px',
    width: '100%',
    border: '1px solid #bec0c6',
    'font-size': '16px',
    'border-radius': '8px',
  },
  body: {
    padding: '0px',
  },
  ':focus': {
    'box-shadow': 'none',
  },
  ':focus.invalid': {
    'box-shadow': 'none',
  },
};

// eslint-disable-next-line react/display-name
const SubmitPayment = React.forwardRef<any, ISubmitPaymentProps>((props, ref) => {
  const { t } = useTranslation(['cloud-software']);

  const { loadingPayment, onError } = props;

  const { cardFieldsForm } = usePayPalCardFields();
  const [isInitForm, setIsInitForm] = useState(false);

  useImperativeHandle(ref, () => {
    return cardFieldsForm;
  });

  useEffect(() => {
    if (!cardFieldsForm) return;
    (async () => {
      try {
        setIsInitForm(true);
        await cardFieldsForm.getState();
        setIsInitForm(false);
      } catch (error) {
        setIsInitForm(false);
      }
    })();
  }, [cardFieldsForm]);

  const handlePlaceOrder = async () => {
    if (!cardFieldsForm) return;

    const formState = await cardFieldsForm.getState();

    if (!formState.isFormValid) return;

    cardFieldsForm.submit().catch((error) => {
      if (error?.message === 'Window closed for postrobot_method before response') return;
      onError();
    });
  };

  return (
    <>
      <S.ButtonPay
        type="primary"
        block
        onClick={handlePlaceOrder}
        loading={loadingPayment}
        disabled={isInitForm}
        style={!isInitForm ? { display: 'block' } : { display: 'none' }}
      >
        {t('checkout.placeOrder')}
      </S.ButtonPay>

      {!isInitForm && (
        <>
          <S.Note>
            <S.Required>*</S.Required> <S.NoteTitle>{t('checkout.note')}</S.NoteTitle>{' '}
            <S.NoteContent>{t('checkout.noteContent1')}</S.NoteContent>
            <br />
            <S.NoteContent>{t('checkout.noteContent2')}</S.NoteContent>
          </S.Note>

          <S.AcceptText
            dangerouslySetInnerHTML={{ __html: t('checkout.acceptText') }}
          ></S.AcceptText>
        </>
      )}
    </>
  );
});

const PaymentMethod = (props: IPaymentProps) => {
  const initialOptions: ReactPayPalScriptOptions = {
    ...paypalConfig,
    components: ['card-fields', 'buttons'],
  };

  const { t } = useTranslation(['cloud-software']);

  const { loadingPayment, createOrder, onApprove, onError } = props;

  const cardFieldsFormRef = useRef<PayPalCardFieldsComponent | null>(null);

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{
          shape: 'rect',
          layout: 'vertical',
        }}
        disabled={loadingPayment}
        fundingSource="paypal"
        createOrder={createOrder}
        onApprove={onApprove}
      />

      <PayPalCardFieldsProvider
        createOrder={createOrder}
        onApprove={onApprove}
        onError={() => {}}
        style={style}
      >
        <S.WrapperDivide>
          <S.Divide />
          <S.DivideText>{t('checkout.or')}</S.DivideText>
          <S.Divide />
        </S.WrapperDivide>

        <S.CardNumber />
        <S.TextError id="card-number-error"></S.TextError>

        <S.CardName placeholder="Cardholder Name" />
        <S.TextError id="card-name-error"></S.TextError>

        <S.Container>
          <S.Item>
            <S.CardExpiry />
            <S.TextError id="expiration-date-error"></S.TextError>
          </S.Item>

          <S.Item>
            <S.CardCvv />
            <S.TextError id="cvv-error"></S.TextError>
          </S.Item>
        </S.Container>

        <SubmitPayment loadingPayment={loadingPayment} ref={cardFieldsFormRef} onError={onError} />
      </PayPalCardFieldsProvider>
    </PayPalScriptProvider>
  );
};

export default PaymentMethod;
