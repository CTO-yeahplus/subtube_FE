import IconLoading from '@/assets/images/svg/icon-loading.svg';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import React from 'react';

import * as S from './index.styles';

type ModalLoadingProps = {
  isOpen: boolean;
  title: string;
  desc: string;
};

const ModalLoading = ({ isOpen, title, desc }: ModalLoadingProps) => {
  return (
    <BaseModal centered open={isOpen} footer={false} closeIcon={false}>
      <S.Title>{title}</S.Title>
      <S.Icon>
        <IconLoading />
      </S.Icon>
      <S.Text>{desc}</S.Text>
    </BaseModal>
  );
};

export default ModalLoading;
