import BaseLabel from '@/components/common/base-label';
import { BaseForm } from '@/components/common/forms/base-form';
import { ROUTER_PATH } from '@/constants';
import { REGEX_EMAIL } from '@/constants/regex';
import { useForgotPasswordMutate } from '@/hooks/features/useAuth';
import { useTimer } from '@/hooks/use-timer';
import { useFeedback } from '@/hooks/useFeedback';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { Form } from 'antd';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { METHOD_TYPE } from '../forgot-password-form';

interface IProps {
  handleBack: () => void;
}

const initValues = {
  email: '',
};

const EmailForm = (props: IProps) => {
  const { t } = useTranslation(['common', 'auth']);
  const [form] = Form.useForm();
  const { notification } = useFeedback();
  const router = useRouter();

  const { handleBack } = props;

  const [isSendCode, setIsSendCode] = useState(false);

  const [isResend, setIsResend] = useState(false);

  const handleEndTime = () => {
    setIsResend(false);
  };

  const [second, start] = useTimer(30, handleEndTime);

  const time = dayjs(new Date(second * 1000)).format('ss');

  const forgotPassword = useForgotPasswordMutate();

  const handleVerifyEmail = (values: { email: string }) => {
    const payload = {
      email: values.email,
      method: METHOD_TYPE.EMAIL,
    };

    forgotPassword.mutate(payload, {
      onSuccess() {
        setIsSendCode(true);
        setIsResend(true);
        start();
      },
      onError: (error: any) => {
        notification.error({ message: error?.data?.message });
      },
    });
  };

  const handleResendEmail = () => {
    const email = form.getFieldValue('email');

    const payload = {
      email: email,
      method: METHOD_TYPE.EMAIL,
    };

    forgotPassword.mutate(payload, {
      onSuccess() {
        setIsResend(true);
        start();
      },
      onError: (error: any) => {
        notification.error({ message: error?.data?.message });
      },
    });
  };

  return (
    <>
      {!isSendCode ? (
        <BaseForm
          form={form}
          layout="vertical"
          onFinish={handleVerifyEmail}
          requiredMark="optional"
          initialValues={initValues}
        >
          <Auth.BackWrapper onClick={handleBack}>
            <Auth.BackIcon />
            {t('button.back', { ns: 'common' })}
          </Auth.BackWrapper>
          <Auth.FormTitle>{t('reset.resetPassword', { ns: 'auth' })}</Auth.FormTitle>
          <Auth.Description>{t('reset.emailDesc', { ns: 'auth' })}</Auth.Description>
          <Auth.FormItem
            name="email"
            label={<BaseLabel label={t('email')} required />}
            normalize={(value) => value.trim()}
            rules={[
              { required: true, message: t('validate.requiredField') },
              {
                pattern: REGEX_EMAIL,
                message: t('validate.notValidEmail'),
              },
            ]}
          >
            <Auth.FormInput placeholder="Eg: translate@youtube.com" maxLength={64} />
          </Auth.FormItem>
          <BaseForm.Item noStyle>
            <Auth.SubmitButton type="primary" htmlType="submit" loading={forgotPassword.isPending}>
              {t('reset.next', { ns: 'auth' })}
            </Auth.SubmitButton>
          </BaseForm.Item>
        </BaseForm>
      ) : (
        <>
          <Auth.BackWrapper onClick={() => setIsSendCode(false)}>
            <Auth.BackIcon />
            {t('button.back', { ns: 'common' })}
          </Auth.BackWrapper>
          <Auth.FormTitle>{t('reset.checkEmail', { ns: 'auth' })}</Auth.FormTitle>
          <Auth.Description>{t('reset.checkEmailDesc', { ns: 'auth' })}</Auth.Description>
          <Auth.Text>
            {t('reset.receiveLink', { ns: 'auth' })}
            <Auth.LinkButton
              disabled={isResend || forgotPassword.isPending}
              onClick={handleResendEmail}
            >
              {t('reset.resend', { ns: 'auth' })}
            </Auth.LinkButton>
            {isResend && <>{`(${time})`}</>}
          </Auth.Text>
          <Auth.SubmitButton type="primary" onClick={() => router.push(ROUTER_PATH.LOGIN)}>
            {t('select.goToLogin', { ns: 'auth' })}
          </Auth.SubmitButton>
        </>
      )}
    </>
  );
};

export default EmailForm;
