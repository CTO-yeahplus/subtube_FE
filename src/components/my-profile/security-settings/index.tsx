import BaseLabel from '@/components/common/base-label';
import { BaseForm } from '@/components/common/forms/base-form';
import { InputPassword } from '@/components/common/inputs/password-input';
import { MESSAGES_ERROR } from '@/constants';
import { useChangePassword } from '@/hooks/features/useUsers';
import { useFeedback } from '@/hooks/useFeedback';
import { Col, Form, Row } from 'antd';
import { useTranslation } from 'next-i18next';

import ContentLeft from '../components/content-left';
import * as S from './index.styles';

type ChangePasswordForm = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const SecuritySetting = () => {
  const { t } = useTranslation('my-profile');
  const [form] = Form.useForm();
  const { notification } = useFeedback();

  const { mutate } = useChangePassword();

  const handleSubmit = (value: ChangePasswordForm) => {
    mutate(
      {
        currentPassword: value.currentPassword.trim(),
        newPassword: value.newPassword.trim(),
      },
      {
        onSuccess: () => {
          form.resetFields();
          notification.success({ message: t('ChangePassword.success') });
        },
        onError: (error: any) => {
          if (error.data.error === MESSAGES_ERROR.WRONG_PASS_LOGIN) {
            form.setFields([
              {
                name: 'currentPassword',
                errors: [t('validate.MC3.4', { ns: 'common' })],
              },
            ]);
          }
        },
      }
    );
  };
  const initValues: ChangePasswordForm = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  return (
    <S.ContentWrapper>
      <ContentLeft />
      <S.ContentRight>
        <S.Title>{t('ChangePassword.title')}</S.Title>
        <BaseForm
          form={form}
          onFinish={handleSubmit}
          initialValues={initValues}
          autoComplete="off"
          validateTrigger={['onBlur', 'onChange']}
        >
          <Row>
            <Col span={12}>
              <S.FormItem
                name="currentPassword"
                label={<BaseLabel label={t('ChangePassword.CurrentPassword')} required />}
                rules={[
                  {
                    required: true,
                    message: t('validate.requiredField', { ns: 'common' }),
                    transform: (v) => v?.trim(),
                  },
                  () => ({
                    validator(_, value) {
                      if (/\s/.test(value)) {
                        return Promise.reject(
                          new Error(
                            t('validate.notContainSpace', {
                              ns: 'common',
                              name: t('ChangePassword.CurrentPassword'),
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
                ]}
                required={false}
              >
                <InputPassword placeholder={t('ChangePassword.CurrentPassword')} />
              </S.FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <S.FormItem
                name="newPassword"
                label={<BaseLabel label={t('ChangePassword.NewPassword')} required />}
                rules={[
                  {
                    required: true,
                    message: t('validate.requiredField', { ns: 'common' }),
                    transform: (v) => v?.trim(),
                  },
                  () => ({
                    validator(_, value) {
                      if (/\s/.test(value)) {
                        return Promise.reject(
                          new Error(
                            t('validate.notContainSpace', {
                              ns: 'common',
                              name: t('ChangePassword.Password'),
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
                ]}
                required={false}
              >
                <InputPassword
                  placeholder={t('ChangePassword.NewPassword')}
                  onChange={() => {
                    if (form.getFieldValue('confirmPassword')) {
                      form.validateFields(['confirmPassword']);
                    }
                  }}
                />
              </S.FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <S.FormItem
                name="confirmPassword"
                label={<BaseLabel label={t('ChangePassword.ConfirmPassword')} required />}
                rules={[
                  {
                    required: true,
                    message: t('validate.requiredField', { ns: 'common' }),
                    transform: (v) => v?.trim(),
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('newPassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(t('validate.confirmPasswordNotMatch', { ns: 'common' }))
                      );
                    },
                  }),
                ]}
                required={false}
              >
                <InputPassword placeholder={t('ChangePassword.ConfirmPassword')} />
              </S.FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <S.BtnSave type="primary" htmlType="submit">
                {t('ChangePassword.title')}
              </S.BtnSave>
            </Col>
          </Row>
        </BaseForm>
      </S.ContentRight>
    </S.ContentWrapper>
  );
};

export default SecuritySetting;
