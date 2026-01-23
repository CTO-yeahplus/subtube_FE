import CurrentPlan from '@/components/cloud-software/youtube-account/current-plan';
import BaseLabel from '@/components/common/base-label';
import { BaseForm } from '@/components/common/forms/base-form';
import { BaseInput } from '@/components/common/inputs/base-input';
import { NUMBER_CHARACTERS } from '@/constants';
import { Col, Row } from 'antd';
import { CountryData } from 'react-phone-input-2';

import ContentLeft from '../components/content-left';
import * as S from './index.styles';
import usePersonalInfo from './index.utils';

const PersonalInfo = () => {
  const {
    t,
    handleSubmit,
    openEdit,
    toggleEdit,
    form,
    phoneCodeValid,
    setPhoneCodeValid,
    countryCode,
    handleAddCountryCode,
  } = usePersonalInfo();

  const _renderButton = () => {
    if (openEdit) {
      return (
        <Row gutter={36}>
          <Col span={12}>
            <S.BtnCancel onClick={() => toggleEdit()}>{t('Personal.Cancel')}</S.BtnCancel>
          </Col>
          <Col span={12}>
            <S.BtnSave type="primary" htmlType="submit">
              {t('Personal.Save')}
            </S.BtnSave>
          </Col>
        </Row>
      );
    }

    return (
      <Row gutter={36}>
        <Col span={12}>
          <S.BtnCancel onClick={() => toggleEdit()}>{t('Personal.Edit')}</S.BtnCancel>
        </Col>
      </Row>
    );
  };

  return (
    <S.ContentWrapper>
      <ContentLeft />
      <S.ContentRight>
        <S.TopContent>
          <S.Title>{t('PersonalInfo')}</S.Title>
          <S.Plan>
            <CurrentPlan />
          </S.Plan>
        </S.TopContent>

        <BaseForm
          form={form}
          onFinish={handleSubmit}
          validateTrigger={['onFocus', 'onBlur', 'onChange']}>
          <Row gutter={36}>
            <Col span={12}>
              <S.FormItem
                name="firstName"
                label={<BaseLabel label={t('Personal.FirstName')} required />}
                rules={[
                  {
                    required: true,
                    message: t('validate.requiredField', { ns: 'common' }),
                    transform: (v) => v?.trim(),
                  },
                ]}
                required={false}>
                <BaseInput
                  placeholder={t('Personal.FirstName')}
                  disabled={!openEdit}
                  maxLength={64}
                />
              </S.FormItem>
            </Col>
            <Col span={12}>
              <S.FormItem
                name="lastName"
                label={<BaseLabel label={t('Personal.LastName')} required />}
                rules={[
                  {
                    required: true,
                    message: t('validate.requiredField', { ns: 'common' }),
                    transform: (v) => v?.trim(),
                  },
                ]}
                required={false}>
                <BaseInput
                  placeholder={t('Personal.LastName')}
                  disabled={!openEdit}
                  maxLength={64}
                />
              </S.FormItem>
            </Col>
          </Row>
          <Row gutter={36}>
            <Col span={12}>
              <S.FormItem
                name="phoneNumber"
                label={<BaseLabel label={t('Personal.PhoneNumber')} required />}
                rules={[
                  { required: true, message: t('validate.requiredField', { ns: 'common' }) },
                  () => ({
                    validator(_, value) {
                      const phoneNumber = value?.slice(countryCode?.phone_code?.length);
                      const rawPhone = phoneNumber.startsWith('0')
                        ? phoneNumber?.slice(1)
                        : phoneNumber;
                      if (!phoneCodeValid || rawPhone.length < NUMBER_CHARACTERS.phone.min) {
                        return Promise.reject(new Error(t('validate.MC2.2', { ns: 'common' })));
                      }

                      return Promise.resolve();
                    },
                  }),
                ]}
                required={false}>
                <S.PhoneNumber
                  disabled={!openEdit}
                  phoneCodeValid={phoneCodeValid}
                  placeholder="(+ xx) xxxx xxxx"
                  onChange={(value, country: CountryData) => {
                    handleAddCountryCode('phone_code', country.dialCode);
                    if (country) {
                      form.setFieldValue('phoneCode', country.dialCode);
                      const code = value?.slice(0, country.dialCode.length);
                      const valid = code === country.dialCode;
                      setPhoneCodeValid(valid);
                    }
                  }}
                />
              </S.FormItem>
              <S.FormItem name="phoneCode" style={{ display: 'none' }}></S.FormItem>
            </Col>
            <Col span={12}>
              <S.FormItem
                name="email"
                label={<BaseLabel label={t('Personal.Email')} required />}
                rules={[{ required: true, message: t('validate.requiredField', { ns: 'common' }) }]}
                required={false}>
                <BaseInput placeholder={t('Personal.Email')} disabled />
              </S.FormItem>
            </Col>
          </Row>
          {_renderButton()}
        </BaseForm>
      </S.ContentRight>
    </S.ContentWrapper>
  );
};

export default PersonalInfo;
