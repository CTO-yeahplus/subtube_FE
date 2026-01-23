import { ROUTER_PATH } from '@/constants';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { Radio } from 'antd';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import EmailForm from '../email-form';
import PhoneNumberForm from '../phone-number-form';
import * as S from './index.styles';

export const METHOD_TYPE = {
  EMAIL: 'Email',
  PHONE: 'Phone',
};

export const ForgotPasswordForm: React.FC = () => {
  const { t } = useTranslation(['common', 'auth']);
  const { push } = useRouter();

  const [isSelectMethod, setIsSelectMethod] = useState<boolean>(false);

  const [method, setMethod] = useState<string>(METHOD_TYPE.EMAIL);

  const handleChangeMethod = (method: string) => {
    setMethod(method);
  };

  const handleBack = () => {
    setIsSelectMethod(false);
  };

  return (
    <>
      <Auth.FormWrapper>
        {!isSelectMethod ? (
          <>
            <Auth.BackWrapper onClick={() => push(ROUTER_PATH.LOGIN)}>
              <Auth.BackIcon />
              {t('button.back', { ns: 'common' })}
            </Auth.BackWrapper>
            <Auth.FormTitle>{t('reset.selectMethod', { ns: 'auth' })}</Auth.FormTitle>
            <Auth.Description>{t('reset.selectMethodDesc', { ns: 'auth' })}</Auth.Description>
            <S.RadioSelect
              defaultValue={method}
              onChange={(e) => handleChangeMethod(e.target.value)}>
              <S.Space>
                <Radio value={METHOD_TYPE.EMAIL}>{t('email', { ns: 'common' })}</Radio>
                <Radio value={METHOD_TYPE.PHONE}>{t('phoneNumber', { ns: 'common' })}</Radio>
              </S.Space>
            </S.RadioSelect>
            <Auth.SubmitButton type="primary" onClick={() => setIsSelectMethod(true)}>
              {t('reset.next', { ns: 'auth' })}
            </Auth.SubmitButton>
          </>
        ) : (
          <>
            {method === METHOD_TYPE.EMAIL && <EmailForm handleBack={handleBack} />}
            {method === METHOD_TYPE.PHONE && <PhoneNumberForm handleBack={handleBack} />}
          </>
        )}
      </Auth.FormWrapper>
    </>
  );
};
