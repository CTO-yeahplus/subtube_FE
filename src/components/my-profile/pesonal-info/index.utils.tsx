import { MESSAGES_ERROR, NUMBER_CHARACTERS } from '@/constants';
import { useUpdateUserInfo } from '@/hooks/features/useUsers';
import { useFeedback } from '@/hooks/useFeedback';
import { updateUserInfo } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { Form } from 'antd';
import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useState } from 'react';

interface PersonalInfoForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  phoneCode: string;
  email: string;
}

interface ICountryCode {
  country_code?: string;
  phone_code?: string;
}

const usePersonalInfo = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('my-profile');
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [phoneCodeValid, setPhoneCodeValid] = useState<boolean>(true);
  const [countryCode, setCountryCode] = useState<ICountryCode>();
  const user = useAppSelector((state) => state.auth.user);
  const [form] = Form.useForm();

  const { mutate } = useUpdateUserInfo();
  const { notification } = useFeedback();

  const handleAddCountryCode = (key: string, value: unknown) => {
    setCountryCode((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const handleSubmit = (user: PersonalInfoForm) => {
    const phoneCode = user.phoneCode.startsWith('+') ? user.phoneCode : `+${user.phoneCode}`;
    const phoneNumber = (
      user.phoneNumber.startsWith('+') ? user.phoneNumber : `+${user.phoneNumber}`
    ).replace(phoneCode, '');
    const rawPhone = phoneNumber.startsWith('0') ? phoneNumber?.slice(1) : phoneNumber;

    if (!phoneCodeValid || rawPhone.length < NUMBER_CHARACTERS.phone.min) {
      form.setFields([{ name: 'phoneNumber', errors: [t('validate.MC2.2', { ns: 'common' })] }]);
      return;
    }

    const data = {
      first_name: user.firstName.trim(),
      last_name: user.lastName.trim(),
      phone: rawPhone,
      phone_code: phoneCode,
    };

    mutate(data, {
      onSuccess: (res) => {
        dispatch(updateUserInfo(res.data));
        notification.success({ message: t('Personal.UpdateProfileSuccessfully') });
        setOpenEdit(false);
      },
      onError(error: any) {
        if (error.data.error === MESSAGES_ERROR.PHONE_TAKEN) {
          form.setFields([
            {
              name: 'phoneNumber',
              errors: [t('validate.MC9', { ns: 'common' })],
            },
          ]);
        }
      },
    });
  };

  // useCallback으로 감싸줍니다.
  const initFormValues = useCallback(() => {
    if (user) {
      const initValues: PersonalInfoForm = {
        firstName: user?.first_name,
        lastName: user?.last_name,
        phoneNumber: user?.phone_code + user?.phone,
        phoneCode: user?.phone_code?.slice(1),
        email: user?.email,
      };
      form.setFieldsValue(initValues);
    }
  }, [user, form]); // form과 user가 바뀔 때만 함수 재생성

  useEffect(() => {
    initFormValues();
  }, [initFormValues]); // 의존성 배열에 추가

  const toggleEdit = () => {
    if (openEdit) initFormValues();
    setOpenEdit(!openEdit);
  };

  return {
    t,
    handleSubmit,
    openEdit,
    toggleEdit,
    user,
    form,
    phoneCodeValid,
    setPhoneCodeValid,
    countryCode,
    handleAddCountryCode,
  };
};

export default usePersonalInfo;
