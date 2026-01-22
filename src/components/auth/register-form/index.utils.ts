import { MESSAGES_ERROR } from '@/constants';
import { useRegisterMutate, useResendVerifyMutate } from '@/hooks/features/useAuth';
import { useTimer } from '@/hooks/use-timer';
import { useFeedback } from '@/hooks/useFeedback';
import { Form } from 'antd';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  termOfUse: boolean;
}

interface ICountryCode {
  country_code?: string;
  phone_code?: string;
}

const useRegisterForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [countryCode, setCountryCode] = useState<ICountryCode>();
  const [form] = Form.useForm();
  const [phoneCodeValid, setPhoneCodeValid] = useState(true);

  const { notification } = useFeedback();

  const { t } = useTranslation(['common', 'auth']);

  const { mutate, isPending } = useRegisterMutate();

  const resendVerify = useResendVerifyMutate();

  const handleRegister = (value: SignUpFormData) => {
    if (!countryCode?.phone_code) return;

    const phoneNumber = value.phone?.slice(countryCode.phone_code.length);
    const rawPhone = phoneNumber.startsWith('0') ? phoneNumber?.slice(1) : phoneNumber;

    const payload = {
      first_name: value.firstName,
      last_name: value.lastName,
      email: value.email,
      password: value.password,
      phone: rawPhone,
      phone_code: `+${countryCode.phone_code}`,
    };

    mutate(payload, {
      onSuccess: () => {
        setIsRegister(true);
        setIsResend(true);
        start();
      },
      onError: (error: any) => {
        if (error?.data?.error === MESSAGES_ERROR.EMAIL_TAKEN) {
          form.setFields([{ name: 'email', errors: [t('validate.MC8')] }]);
        }
        if (error?.data?.error === MESSAGES_ERROR.PHONE_TAKEN) {
          form.setFields([{ name: 'phone', errors: [t('validate.MC9')] }]);
        }
        if (error?.data?.error === MESSAGES_ERROR.EMAIL_EXISTED_NOT_VERIFIED) {
          form.setFields([{ name: 'email', errors: [t('validate.MC15')] }]);
        }
        if (error?.data?.error === MESSAGES_ERROR.NUMBER_USED_NOT_VERIFIED) {
          form.setFields([{ name: 'phone', errors: [t('validate.MC16')] }]);
        }
      },
    });
  };

  const handleBack = () => {
    setIsRegister(false);
  };

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

  const handleResend = () => {
    const email = form.getFieldValue('email');

    const payload = {
      email_or_phone: email,
      phone_code: '',
    };

    resendVerify.mutate(payload, {
      onSuccess() {
        setIsResend(true);
        start();
      },
      onError: (error: any) => {
        notification.error({ message: error?.data?.message });
      },
    });
  };

  return {
    isRegister,
    loading: isPending,
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
  };
};

export default useRegisterForm;
