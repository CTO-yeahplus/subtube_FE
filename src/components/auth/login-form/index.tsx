import { login } from '@/api/auth';
import BaseLabel from '@/components/common/base-label';
import { BaseForm } from '@/components/common/forms/base-form';
import { INVALID_CODE, LIST_COUNTRY_CODE, MESSAGES_ERROR, ROUTER_PATH } from '@/constants';
import { REGEX_EMAIL, REGEX_PHONE } from '@/constants/regex';
import { useResendVerifyMutate } from '@/hooks/features/useAuth';
import { useTimer } from '@/hooks/use-timer';
import { useFeedback } from '@/hooks/useFeedback';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { setCredentials } from '@/stores/auth/auth.slice';
import { useAppDispatch } from '@/stores/hooks';
import cookies from '@/utils/cookie';
import { Form } from 'antd';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import * as S from './index.styles';

interface LoginFormData {
  emailOrPhone: string;
  password: string;
}

export const initValues: LoginFormData = {
  emailOrPhone: '',
  password: '',
};

export const LoginForm: React.FC = () => {
  const { t } = useTranslation(['common', 'auth']);
  const [form] = Form.useForm();
  const router = useRouter();
  const { notification } = useFeedback();

  const dispatch = useAppDispatch();
  const [isPending, setIsPending] = useState(false);

  const resendVerify = useResendVerifyMutate();

  const [isVerifyAccount, setIsVerifyAccount] = useState(false);

  const [isResend, setIsResend] = useState(false);

  const handleEndTime = () => {
    setIsResend(false);
  };

  const [second, start] = useTimer(30, handleEndTime);

  const time = dayjs(new Date(second * 1000)).format('ss');

  const [formSubmit, setFormSubmit] = useState<any>();

  const handleResend = () => {
    if (!formSubmit) return;

    resendVerify.mutate(formSubmit, {
      onSuccess() {
        setIsResend(true);
        start();
      },
      onError: (error: any) => {
        notification.error({ message: error?.data?.message });
      },
    });
  };

  const handleBack = () => {
    setIsVerifyAccount(false);
  };

  const checkPhoneNumber = (phone: string) => {
    const pp = phone.split('');
    const countryCode = pp[1];
    const nextTwoDigits = pp[1] + pp[2];
    const nextThreeDigits = pp[1] + pp[2] + pp[3];
    const nextFourDigits = pp[1] + pp[2] + pp[3] + pp[4];

    if (LIST_COUNTRY_CODE.includes(countryCode)) {
      return countryCode;
    } else if (LIST_COUNTRY_CODE.includes(nextTwoDigits)) {
      return nextTwoDigits;
    } else if (LIST_COUNTRY_CODE.includes(nextThreeDigits)) {
      return nextThreeDigits;
    } else if (LIST_COUNTRY_CODE.includes(nextFourDigits)) {
      return nextFourDigits;
    } else {
      return INVALID_CODE;
    }
  };

  const checkPayload = (values: LoginFormData) => {
    if (REGEX_EMAIL.test(values.emailOrPhone)) {
      return {
        email_or_phone: values.emailOrPhone,
        password: values.password,
        phone_code: '',
      };
    } else if (REGEX_PHONE.test(values.emailOrPhone)) {
      const rs = checkPhoneNumber(values.emailOrPhone);

      if (rs === INVALID_CODE) {
        form.setFields([{ name: 'emailOrPhone', errors: [t('validate.MC2.2')] }]);
        return false;
      } else {
        const countryCode = rs;
        const phoneNumber = values.emailOrPhone?.slice(rs.length + 1);

        return {
          email_or_phone: phoneNumber,
          phone_code: `+${countryCode}`,
          password: values.password,
        };
      }
    } else {
      form.setFields([{ name: 'emailOrPhone', errors: [t('validate.MC2')] }]);
      return false;
    }
  };

  const handleSubmit = async (values: LoginFormData) => {
    const payload = checkPayload(values);

    if (!payload) return;

    try {
      setIsPending(true);
      const responses = await login(payload);
      setIsPending(false);

      if (responses) {
        cookies.set('access_token', responses.data.access_token);
        cookies.set('refresh_token', responses.data.refresh_token);
        dispatch(setCredentials({ token: responses.data.access_token }));
        router.push(ROUTER_PATH.YOUTUBE_ACCOUNT);
        notification.success({ message: t('login.loginSuccess', { ns: 'auth' }) });
      }
    } catch (error: any) {
      setIsPending(false);

      if (error?.data?.data?.is_verify === false) {
        const values = {
          email_or_phone: payload.email_or_phone,
          phone_code: payload.phone_code,
        };
        setFormSubmit(values);

        setIsVerifyAccount(true);

        resendVerify.mutate(values, {
          onSuccess() {
            setIsResend(true);
            start();
          },
          onError: (error: any) => {
            notification.error({ message: error?.data?.message });
          },
        });
        return;
      }

      if (error?.data?.error === MESSAGES_ERROR.EMAIL_OR_PHONE_NOT_EXIST) {
        form.setFields([{ name: 'emailOrPhone', errors: [t('validate.MC4')] }]);
        return;
      }

      if (error?.data?.error === MESSAGES_ERROR.WRONG_PASS_LOGIN) {
        form.setFields([{ name: 'password', errors: [t('validate.MC3.4')] }]);
        return;
      }

      notification.error({ message: error?.data?.message });
    }
  };

  return (
    <Auth.FormWrapper>
      {!isVerifyAccount ? (
        <BaseForm
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          requiredMark="optional"
          initialValues={initValues}>
          <Auth.FormTitle>{t('login')}</Auth.FormTitle>
          <Auth.Description>{t('login.loginInfo', { ns: 'auth' })}</Auth.Description>
          <Auth.FormItem
            name="emailOrPhone"
            label={<BaseLabel label={`${t('email')} / ${t('phoneNumber')}`} required />}
            rules={[
              { required: true, message: t('validate.requiredField') },
              {
                max: 64,
                message: t('validate.max', { length: 64 }),
              },
            ]}>
            <Auth.FormInput placeholder="Eg: translate@youtube.com" maxLength={64} />
          </Auth.FormItem>
          <Auth.FormItem
            label={<BaseLabel label={t('password')} required />}
            name="password"
            normalize={(value) => value.trim()}
            rules={[
              {
                required: true,
                whitespace: true,
                message: t('validate.requiredField'),
              },
              () => ({
                validator(_, value) {
                  if (/\s/.test(value)) {
                    return Promise.reject(
                      new Error(
                        t('validate.notContainSpace', {
                          name: t('password'),
                        })
                      )
                    );
                  }
                  if (
                    value.length < 8 ||
                    value.length > 30 ||
                    !/[A-Z]/.test(value) ||
                    !/[0-9]/.test(value) ||
                    !/[!@#$%^&*(),.?":{}|<>]/.test(value)
                  ) {
                    return Promise.reject(new Error(t('validate.MC3.1')));
                  }
                  return Promise.resolve();
                },
              }),
            ]}>
            <Auth.FormInputPassword placeholder="David@123" minLength={8} maxLength={30} />
          </Auth.FormItem>
          <Auth.Text>
            <Link href="/auth/forgot-password">
              <S.ForgotPasswordText>{t('forgotPass')}</S.ForgotPasswordText>
            </Link>
          </Auth.Text>
          {/* <Auth.ActionsWrapper>
          <BaseForm.Item name="rememberMe" valuePropName="checked" noStyle>
            <Auth.FormCheckbox>
              <S.RememberMeText>{t('login.rememberMe')}</S.RememberMeText>
            </Auth.FormCheckbox>
          </BaseForm.Item>
          <Link href="/auth/forgot-password">
            <S.ForgotPasswordText>{t('forgotPass')}</S.ForgotPasswordText>
          </Link>
        </Auth.ActionsWrapper> */}
          <BaseForm.Item noStyle>
            <Auth.SubmitButton type="primary" htmlType="submit" loading={isPending}>
              {t('login')}
            </Auth.SubmitButton>
          </BaseForm.Item>
          <Auth.FooterWrapper>
            <Auth.Text>
              {t('login.noAccount', { ns: 'auth' })}{' '}
              <Link href="/auth/register">
                <Auth.LinkText>{t('here')}</Auth.LinkText>
              </Link>
            </Auth.Text>
          </Auth.FooterWrapper>
        </BaseForm>
      ) : (
        <>
          <Auth.BackWrapper onClick={handleBack}>
            <Auth.BackIcon />
            {t('button.back', { ns: 'common' })}
          </Auth.BackWrapper>
          <Auth.FormTitle>{t('register.checkEmail', { ns: 'auth' })}</Auth.FormTitle>
          <Auth.Description>{t('register.checkEmailDesc', { ns: 'auth' })}</Auth.Description>
          <Auth.Text>
            {t('register.receiveLink', { ns: 'auth' })}
            <Auth.LinkButton disabled={isResend} onClick={handleResend}>
              {t('register.resend', { ns: 'auth' })}
            </Auth.LinkButton>
            {isResend && <>{`(${time})`}</>}
          </Auth.Text>
          <Auth.SubmitButton type="primary" onClick={handleBack}>
            {t('select.goToLogin', { ns: 'auth' })}
          </Auth.SubmitButton>
        </>
      )}
    </Auth.FormWrapper>
  );
};
