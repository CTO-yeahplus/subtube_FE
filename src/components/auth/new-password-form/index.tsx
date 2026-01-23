import BaseLabel from '@/components/common/base-label';
import { BaseForm } from '@/components/common/forms/base-form';
import { ROUTER_PATH } from '@/constants';
import { useResetPasswordMutate } from '@/hooks/features/useAuth';
import { useFeedback } from '@/hooks/useFeedback';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { Form } from 'antd';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';

import { METHOD_TYPE } from '../forgot-password-form';

interface NewPasswordFormData {
  password: string;
  confirmPassword: string;
}

const initStates = {
  password: '',
  confirmPassword: '',
};

export const NewPasswordForm: React.FC = () => {
  const { t } = useTranslation(['auth', 'common']);

  const { mutate, isPending } = useResetPasswordMutate();
  const { notification } = useFeedback();
  const [form] = Form.useForm();

  const router = useRouter();

  const token = router.query.token as string;
  const accessTokenSMS = router.query.accessTokenSMS as string;
  const phone = router.query.phone as string;
  const countryCode = router.query.countryCode as string;

  const handleSubmit = (values: NewPasswordFormData) => {
    if (!token && !accessTokenSMS) return;

    const payload = {
      code: accessTokenSMS ? accessTokenSMS : token,
      password: values.password,
      method: accessTokenSMS ? METHOD_TYPE.PHONE : METHOD_TYPE.EMAIL,
      phone: accessTokenSMS ? phone : '',
      phone_code: accessTokenSMS ? `+${countryCode}` : '',
    };

    mutate(payload, {
      onSuccess: (responses) => {
        if (responses.success) {
          notification.success({ message: responses.message });
          router.replace(ROUTER_PATH.LOGIN);
        }
      },
    });
  };

  return (
    <Auth.FormWrapper>
      <BaseForm
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark="optional"
        initialValues={initStates}>
        <Auth.FormTitle>{t('newPass.title')}</Auth.FormTitle>
        <Auth.Description>{t('newPass.desc')}</Auth.Description>
        <Auth.FormItem
          name="password"
          normalize={(value) => value.trim()}
          label={<BaseLabel label={t('newPass.newPassword')} required />}
          rules={[
            {
              required: true,
              whitespace: true,
              message: t('validate.requiredField', { ns: 'common' }),
            },
            () => ({
              validator(_, value) {
                if (/\s/.test(value)) {
                  return Promise.reject(
                    new Error(
                      t('validate.notContainSpace', {
                        name: t('password', { ns: 'common' }),
                        ns: 'common',
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
                  return Promise.reject(new Error(t('validate.MC3.1', { ns: 'common' })));
                }
                return Promise.resolve();
              },
            }),
          ]}>
          <Auth.FormInputPassword placeholder="David@123" minLength={8} maxLength={30} />
        </Auth.FormItem>
        <Auth.FormItem
          name="confirmPassword"
          normalize={(value) => value.trim()}
          label={<BaseLabel label={t('newPass.confirmPassword')} required />}
          rules={[
            { required: true, message: t('validate.requiredField', { ns: 'common' }) },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('confirmPasswordError', { ns: 'common' })));
              },
            }),
          ]}>
          <Auth.FormInputPassword placeholder="David@123" minLength={8} maxLength={30} />
        </Auth.FormItem>
        <BaseForm.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit" loading={isPending}>
            {t('newPass.setPassword')}
          </Auth.SubmitButton>
        </BaseForm.Item>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
