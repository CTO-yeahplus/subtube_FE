import IconError from '@/assets/images/svg/modals/error.svg';
import IconReminder from '@/assets/images/svg/modals/reminder.svg';
import IconSad from '@/assets/images/svg/modals/sad-face.svg';
import IconSuccess from '@/assets/images/svg/modals/success.svg';
import IconWarning from '@/assets/images/svg/modals/warning.svg';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import { TType } from '@/constants';
import React from 'react';

import * as S from './index.styles';

type ModalConfirmProps = {
  title: string;
  type: TType;
  isOpen: boolean;
  onClose: () => void;
  btnCancel?: {
    name?: string;
    loading?: boolean;
    disable?: boolean;
    action: () => void;
  };
  btnOk?: {
    name?: string;
    loading?: boolean;
    disable?: boolean;
    action: () => void;
  };
  children: React.ReactNode;
  closeIcon?: boolean;
};

const _renderIcon = (type: TType) => {
  switch (type) {
    case TType.WARNING:
      return <IconWarning />;
    case TType.SUCCESS:
      return <IconSuccess />;
    case TType.ERROR:
      return <IconError />;
    case TType.SAD:
      return <IconSad />;
    case TType.REMINDER:
      return <IconReminder />;
    default:
      return null;
  }
};

const getStyleBtn = (type: TType) => {
  switch (type) {
    case TType.WARNING:
      return {
        btnOk: {
          bg: '#FF5252',
          color: '#fff',
          border: '',
        },
        btnCancel: {
          bg: 'transparent',
          color: '#404040',
          border: '1px solid #404040',
        },
      };
    default:
      return {
        btnOk: {
          bg: '',
          color: '',
          border: '',
        },
        btnCancel: {
          bg: '',
          color: '',
          border: '',
        },
      };
  }
};

const ModalConfirm = ({
  title,
  type,
  isOpen,
  onClose,
  btnCancel,
  btnOk,
  children,
  closeIcon = false,
}: ModalConfirmProps) => {
  const styleBtn = getStyleBtn(type);

  return (
    <BaseModal open={isOpen} onCancel={onClose} footer={false} closeIcon={closeIcon} centered>
      <S.Title>{title}</S.Title>
      {type && <S.Icon>{_renderIcon(type)}</S.Icon>}
      <S.Content>{children}</S.Content>
      <S.ButtonWrapper>
        {btnOk && (
          <S.Button
            bg={styleBtn.btnOk.bg}
            border={styleBtn.btnOk.border}
            color={styleBtn.btnOk.color}
            type="primary"
            onClick={btnOk?.action}
            loading={btnOk?.loading}>
            {btnOk.name || 'Submit'}
          </S.Button>
        )}
        {btnCancel && (
          <S.Button
            bg={styleBtn.btnCancel.bg}
            border={styleBtn.btnCancel.border}
            color={styleBtn.btnCancel.color}
            type="primary"
            onClick={btnCancel?.action}>
            {btnCancel.name || 'Cancel'}
          </S.Button>
        )}
      </S.ButtonWrapper>
    </BaseModal>
  );
};

export default ModalConfirm;
