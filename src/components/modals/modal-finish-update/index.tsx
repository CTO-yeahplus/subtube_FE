import IconSuccess from '@/assets/images/svg/modals/success.svg';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import { useTranslation } from 'next-i18next';
import React from 'react';

import * as S from './index.styles';

type ModalFinishUpdateProps = {
  isOpen: boolean;
  text: string;
  subText: {
    start: string;
    hightlight: string;
    continue: string;
    second?: string;
  };
  onClose: () => void;
  videoId?: string;
};

const ModalFinishUpdate = ({ isOpen, text, subText, onClose, videoId }: ModalFinishUpdateProps) => {
  const { t } = useTranslation(['cloud-software', 'common']);

  return (
    <BaseModal
      centered
      open={isOpen}
      onCancel={onClose}
      footer={false}
      closeIcon={false}
      width={745}
      destroyOnClose={true}>
      <S.Title>{t('translator.finishedUpdating')}</S.Title>

      <S.Icon>
        <IconSuccess />
      </S.Icon>

      <S.Text>
        {text}&nbsp;
        {t('translator.finish-updating-modal.click')}&nbsp;
        <S.Link target="_blank" href={`https://youtu.be/${videoId}`}>
          {t('translator.finish-updating-modal.here')}
        </S.Link>
        &nbsp;
        {t('translator.finish-updating-modal.to-view')}
      </S.Text>

      <S.SubTextContainer>
        <S.SubText>
          <S.SubTextItem>{subText.start}</S.SubTextItem>&nbsp;
          <S.SubTextItem highlight={true}>{subText.hightlight}</S.SubTextItem>,
          <S.SubTextItem>{subText.continue}</S.SubTextItem>
        </S.SubText>

        <S.SubText>
          <S.SubTextItem>{subText.second}</S.SubTextItem>
        </S.SubText>
      </S.SubTextContainer>

      <S.IFrame
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <S.WrapperButton>
        <S.CloseButton type="primary" onClick={onClose}>
          {t('translator.close')}
        </S.CloseButton>
      </S.WrapperButton>
    </BaseModal>
  );
};

export default ModalFinishUpdate;
