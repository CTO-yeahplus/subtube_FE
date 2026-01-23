import BaseLabel from '@/components/common/base-label';
import { BaseForm } from '@/components/common/forms/base-form';
import { NUMBER_CHARACTERS, ROUTER_PATH } from '@/constants';
import { REGEX_EMAIL } from '@/constants/regex';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { CountryData } from 'react-phone-input-2';

import * as S from './index.styles';
import useRegisterForm from './index.utils';

const initValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  termOfUse: false,
};

export const RegisterForm: React.FC = () => {
  const { t } = useTranslation(['common', 'auth']);

  const {
    isRegister,
    form,
    isResend,
    time,
    phoneCodeValid,
    countryCode,
    handleResend,
    handleRegister,
    handleBack,
    handleAddCountryCode,
    setPhoneCodeValid,
  } = useRegisterForm();

  const router = useRouter();

  return (
    <Auth.FormWrapper>
      {!isRegister ? (
        <BaseForm
          form={form}
          layout="vertical"
          onFinish={handleRegister}
          requiredMark="optional"
          initialValues={initValues}>
          <S.Title>{t('signUp')}</S.Title>
          <Auth.FormItem
            name="firstName"
            label={<BaseLabel label={t('firstName')} required />}
            rules={[{ required: true, whitespace: true, message: t('validate.requiredField') }]}>
            <Auth.FormInput placeholder="E.g. David" maxLength={64} />
          </Auth.FormItem>
          <Auth.FormItem
            name="lastName"
            label={<BaseLabel label={t('lastName')} required />}
            rules={[{ required: true, whitespace: true, message: t('validate.requiredField') }]}>
            <Auth.FormInput placeholder="E.g. Wayne" maxLength={64} />
          </Auth.FormItem>
          <Auth.FormItem
            name="email"
            normalize={(value) => value.trim()}
            label={<BaseLabel label={t('email')} required />}
            rules={[
              { required: true, whitespace: true, message: t('validate.requiredField') },
              {
                pattern: REGEX_EMAIL,
                message: t('validate.notValidEmail'),
              },
            ]}>
            <Auth.FormInput placeholder="E.g. translate@youtube.com" maxLength={64} />
          </Auth.FormItem>
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
          <Auth.FormItem
            label={<BaseLabel label={t('password')} required />}
            name="password"
            normalize={(value) => value.trim()}
            rules={[
              { required: true, whitespace: true, message: t('validate.requiredField') },
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
          <Auth.FormItem
            label={<BaseLabel label={t('confirmPassword')} required />}
            normalize={(value) => value.trim()}
            name="confirmPassword"
            rules={[
              { required: true, message: t('validate.requiredField', { ns: 'common' }) },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t('confirmPasswordError')));
                },
              }),
            ]}>
            <Auth.FormInputPassword placeholder="David@123" minLength={8} maxLength={30} />
          </Auth.FormItem>
          {/* <Auth.ActionsWrapper>
            <BaseForm.Item name="termOfUse" valuePropName="checked" noStyle>
              <Auth.FormCheckbox>
                <Auth.Text>
                  {t('register.agree', { ns: 'auth' })}{' '}
                  <Link href="/" target="_blank">
                    <Auth.LinkText>{t('register.termOfUse', { ns: 'auth' })}</Auth.LinkText>
                  </Link>{' '}
                  {t('register.and', { ns: 'auth' })}{' '}
                  <Link href="/" target="_blank">
                    <Auth.LinkText>{t('register.privacyOPolicy', { ns: 'auth' })}</Auth.LinkText>
                  </Link>
                </Auth.Text>
              </Auth.FormCheckbox>
            </BaseForm.Item>
          </Auth.ActionsWrapper> */}
          <BaseForm.Item noStyle>
            <Auth.SubmitButton type="primary" htmlType="submit">
              {t('signUp')}
            </Auth.SubmitButton>
          </BaseForm.Item>
          <Auth.FooterWrapper>
            <Auth.Text>
              {t('register.alreadyHaveAccount', { ns: 'auth' })}{' '}
              <Link href={ROUTER_PATH.LOGIN}>
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
          <Auth.SubmitButton type="primary" onClick={() => router.push(ROUTER_PATH.LOGIN)}>
            {t('select.goToLogin', { ns: 'auth' })}
          </Auth.SubmitButton>
        </>
      )}
    </Auth.FormWrapper>
  );
};
