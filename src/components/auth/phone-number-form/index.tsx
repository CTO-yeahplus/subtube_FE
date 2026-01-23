import { verifyForgotPasswordSms } from '@/api/auth';
import BaseLabel from '@/components/common/base-label';
import { BaseForm } from '@/components/common/forms/base-form';
import { FIREBASE_ERROR, NUMBER_CHARACTERS, ROUTER_PATH } from '@/constants';
import { useTimer } from '@/hooks/use-timer';
import { useFeedback } from '@/hooks/useFeedback';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { auth } from '@/plugins/firebase';
import { Form } from 'antd';
import dayjs from 'dayjs';
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { CountryData } from 'react-phone-input-2';

import * as S from './index.styles';

interface ICountryCode {
  country_code?: string;
  phone_code?: string;
}

interface IProps {
  handleBack: () => void;
}

declare global {
  interface Window {
    confirmationResult?: ConfirmationResult;
    recaptchaVerifier?: RecaptchaVerifier;
  }
}

const initValues = {
  phone: '',
};

const PhoneNumberForm = (props: IProps) => {
  const { t } = useTranslation(['common', 'auth']);

  const { handleBack } = props;
  const { notification } = useFeedback();
  const router = useRouter();

  const [form] = Form.useForm();
  const [phoneCodeValid, setPhoneCodeValid] = useState(true);
  const [countryCode, setCountryCode] = useState<ICountryCode>();

  const handleAddCountryCode = (key: string, value: unknown) => {
    setCountryCode((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const [isResend, setIsResend] = useState(false);

  const handleEndTime = () => {
    setIsResend(false);
  };

  const [second, start] = useTimer(30, handleEndTime);

  const time = dayjs(new Date(second * 1000)).format('ss');

  const [verificationCode, setVerificationCode] = useState('');

  const [invalidCode, setInvalidCode] = useState('');

  const [isShowOtp, setIsShowOtp] = useState(false);

  const [loading, setLoading] = useState(false);

  const [loadingVerify, setLoadingVerify] = useState(false);

  const recaptchaWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleCaptchaVerify = (phone: string) => {
    if (!window.recaptchaVerifier) {
      const appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {
          const formatPhoneNumber = `+${phone}`;

          setLoading(true);
          signInWithPhoneNumber(auth, formatPhoneNumber, appVerifier)
            .then((confirmationResult) => {
              window.confirmationResult = confirmationResult;
              notification.success({ message: t('message.sendOtpSuccess') });

              setLoading(false);
              setIsShowOtp(true);
              setIsResend(true);
              start();
            })
            .catch((error: any) => {
              setLoading(false);

              if (error?.code === FIREBASE_ERROR.QUOTA_EXCEEDED) {
                notification.error({ message: t('message.limitOtp') });
              } else {
                notification.error({ message: t('message.sendOtpFailed') });
              }
            });
        },
        'expired-callback': () => {
          setLoading(false);
        },
      });

      window.recaptchaVerifier = appVerifier;
      return appVerifier;
    }

    return window.recaptchaVerifier;
  };

  const handleCheckPhoneNumber = async (rawPhone: string, countryCode: string) => {
    if (!rawPhone || !countryCode) return false;

    try {
      setLoading(true);
      const response = await verifyForgotPasswordSms({
        phone: rawPhone,
        phone_code: `+${countryCode}`,
      });
      setLoading(false);

      return response.success ? true : false;
    } catch (error: any) {
      setLoading(false);
      error?.data?.message && notification.error({ message: error.data.message });
      return false;
    }
  };

  const handleSendCode = async (values: { phone: string }) => {
    if (!countryCode?.phone_code) return;

    try {
      const phoneNumber = values.phone?.slice(countryCode.phone_code.length);
      const rawPhone = phoneNumber.startsWith('0') ? phoneNumber?.slice(1) : phoneNumber;

      const isInvalidPhoneNumber = await handleCheckPhoneNumber(rawPhone, countryCode.phone_code);

      if (!isInvalidPhoneNumber) return;

      const appVerifier: any = handleCaptchaVerify(values.phone);

      if (appVerifier.widgetId === null) {
        setLoading(true);
        await appVerifier.render();
        setLoading(false);
      }

      await appVerifier.verify();

      window.recaptchaVerifier = undefined;
      appVerifier?.recaptcha?.reset();

      if (!recaptchaWrapperRef.current) return;
      recaptchaWrapperRef.current.innerHTML = '<div id="recaptcha-container"></div>';
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleVerifycode = async () => {
    if (!verificationCode) {
      setInvalidCode(t('validate.requiredField'));
      return;
    }

    if (verificationCode.length < 6) {
      setInvalidCode(t('validate.MC23'));
      return;
    }

    if (!window.confirmationResult || !countryCode?.phone_code) return;

    const phone = form.getFieldValue('phone');
    const phoneNumber = phone?.slice(countryCode.phone_code.length);
    const rawPhone = phoneNumber.startsWith('0') ? phoneNumber?.slice(1) : phoneNumber;

    try {
      const isInvalidPhoneNumber = await handleCheckPhoneNumber(rawPhone, countryCode.phone_code);

      if (!isInvalidPhoneNumber) return;

      setLoadingVerify(true);
      const response: any = await window.confirmationResult.confirm(verificationCode);
      setLoadingVerify(false);

      if (!response?.user?.accessToken) return;

      router.push({
        pathname: ROUTER_PATH.NEW_PASSWORD,
        query: {
          accessTokenSMS: response.user.accessToken,
          phone: rawPhone,
          countryCode: countryCode.phone_code,
        },
      });
    } catch (error: any) {
      setLoadingVerify(false);

      if (error?.code === FIREBASE_ERROR.INVALID_CODE) {
        setInvalidCode(t('validate.MC23'));
      }
      if (error?.code === FIREBASE_ERROR.CODE_EXPIRED) {
        setInvalidCode(t('validate.MC23.1'));
      }
    }
  };

  const handleResendPhoneNumber = () => {
    handleSendCode({ phone: form.getFieldValue('phone') });
  };

  return (
    <>
      {!isShowOtp ? (
        <BaseForm
          form={form}
          layout="vertical"
          onFinish={handleSendCode}
          requiredMark="optional"
          initialValues={initValues}>
          <Auth.BackWrapper
            onClick={() => {
              window.recaptchaVerifier = undefined;
              handleBack();
            }}>
            <Auth.BackIcon />
            {t('button.back', { ns: 'common' })}
          </Auth.BackWrapper>
          <Auth.FormTitle>{t('reset.resetPassword', { ns: 'auth' })}</Auth.FormTitle>
          <Auth.Description>{t('reset.messageDesc', { ns: 'auth' })}</Auth.Description>

          <Auth.FormItem
            name="phone"
            label={<BaseLabel label={t('phoneNumber')} required />}
            rules={[
              { required: true, whitespace: true, message: t('validate.requiredField') },
              () => ({
                validator(_, value) {
                  const phoneNumber = value?.slice(countryCode?.phone_code?.length);
                  const rawPhone = phoneNumber.startsWith('0')
                    ? phoneNumber?.slice(1)
                    : phoneNumber;
                  if (!phoneCodeValid || rawPhone.length < NUMBER_CHARACTERS.phone.min) {
                    return Promise.reject(new Error(t('validate.MC2.2')));
                  }
                  return Promise.resolve();
                },
              }),
            ]}>
            <S.PhoneNumber
              country={'kr'}
              onChange={(value, country: CountryData) => {
                handleAddCountryCode('phone_code', country.dialCode);
                if (country) {
                  form.setFieldValue('countryCode', country.dialCode);
                  const code = value?.slice(0, country.dialCode.length);
                  const valid = code === country.dialCode;
                  setPhoneCodeValid(valid);
                }
              }}
              placeholder="(+ xx) xxxx xxxx"
              phoneCodeValid={phoneCodeValid}
            />
          </Auth.FormItem>
          <Auth.FormItem name="countryCode" style={{ display: 'none' }}></Auth.FormItem>

          <div ref={recaptchaWrapperRef} style={{ display: 'none' }}>
            <div id="recaptcha-container"></div>
          </div>

          <BaseForm.Item noStyle>
            <Auth.SubmitButton type="primary" htmlType="submit" loading={loading}>
              {t('reset.next', { ns: 'auth' })}
            </Auth.SubmitButton>
          </BaseForm.Item>
        </BaseForm>
      ) : (
        <>
          <Auth.BackWrapper
            onClick={() => {
              window.recaptchaVerifier = undefined;
              setIsShowOtp(false);
              setVerificationCode('');
              setInvalidCode('');
            }}>
            <Auth.BackIcon />
            {t('button.back', { ns: 'common' })}
          </Auth.BackWrapper>
          <Auth.FormTitle>{t('reset.checkMessage', { ns: 'auth' })}</Auth.FormTitle>
          <Auth.Description>{t('reset.checkMessageDesc', { ns: 'auth' })}</Auth.Description>

          <S.VerificationCodeInputWrapper
            autoFocus
            validChars="0-9"
            onChange={(value) => {
              setVerificationCode(value);
              setInvalidCode('');
            }}
            invalid={!!invalidCode}
          />
          {invalidCode && <S.TextError>{invalidCode}</S.TextError>}

          <div ref={recaptchaWrapperRef} style={{ display: 'none' }}>
            <div id="recaptcha-container"></div>
          </div>

          <Auth.Text>
            {t('reset.receiveMessage', { ns: 'auth' })}
            <Auth.LinkButton
              style={{ height: '100%', marginTop: '1rem' }}
              disabled={isResend || loading || loadingVerify}
              onClick={handleResendPhoneNumber}>
              {t('reset.resend', { ns: 'auth' })}
            </Auth.LinkButton>
            {isResend && <>{`(${time})`}</>}
          </Auth.Text>
          <Auth.SubmitButton
            type="primary"
            onClick={handleVerifycode}
            loading={loadingVerify}
            disabled={loading}>
            {t('select.verify', { ns: 'auth' })}
          </Auth.SubmitButton>
        </>
      )}
    </>
  );
};

export default PhoneNumberForm;
