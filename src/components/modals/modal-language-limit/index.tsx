import { IConLevel } from '@/components/cloud-software/youtube-account/icon-level';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import { LEVEL_USER, LEVEL_USER_LIMIT_LANGUAGE } from '@/interfaces';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { setIsOpenPlanOverview } from '@/stores/progress/progress.slice';
import { useTranslation } from 'next-i18next';
import React from 'react';

import * as S from './index.styles';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalLanguageLimit: React.FC<IProps> = (props) => {
  const { isOpen, onClose } = props;
  const { t } = useTranslation(['cloud-software']);
  const useDetail = useAppSelector(selectCurrentUser);
  const level = useDetail?.level?.toUpperCase();
  const dispatch = useAppDispatch();

  const _renderPlan = (currentPlan?: string) => {
    switch (currentPlan) {
      case LEVEL_USER.BRONZE:
      case LEVEL_USER.SILVER:
        return (
          <>
            <S.WrapSubtitle>
              <S.SubtitleText>{t('youtube.your-current-plan')}</S.SubtitleText>&nbsp;
              <S.SubtitleTextBold>{useDetail?.level}</S.SubtitleTextBold>&nbsp;
              <S.SubtitleText>{t('translator.language-limit-popover.only-support')}</S.SubtitleText>
              &nbsp;
              <S.SubtitleTextBold>
                {t('translator.language-limit-popover.languages', {
                  number: _renderNumberLanguage(level),
                })}
              </S.SubtitleTextBold>
            </S.WrapSubtitle>

            <S.WrapSubtitle>
              <S.SubtitleText>
                {t('translator.language-limit-popover.please-upgrade')}
              </S.SubtitleText>
            </S.WrapSubtitle>

            <S.WrapActionButton>
              <S.ActionButton onClick={onClose}>
                {t('translator.language-limit-popover.no')}
              </S.ActionButton>
              <S.ActionButton
                type="primary"
                onClick={() => {
                  dispatch(setIsOpenPlanOverview(true));
                  onClose();
                }}>
                {t('translator.language-limit-popover.upgrade')}
              </S.ActionButton>
            </S.WrapActionButton>
          </>
        );
      case LEVEL_USER.GOLD:
        return (
          <>
            <S.WrapSubtitle>
              <S.SubtitleText>{t('youtube.your-current-plan')}</S.SubtitleText>&nbsp;
              <S.SubtitleTextBold>{useDetail?.level}</S.SubtitleTextBold>&nbsp;
              <S.SubtitleText>{t('translator.language-limit-popover.support')}</S.SubtitleText>
              &nbsp;
              <S.SubtitleTextBold>
                {t('translator.language-limit-popover.languages', {
                  number: _renderNumberLanguage(level),
                })}
              </S.SubtitleTextBold>
            </S.WrapSubtitle>

            <S.WrapSubtitle>
              <S.SubtitleText>
                {t('translator.language-limit-popover.achieve-your-desire')}
              </S.SubtitleText>
            </S.WrapSubtitle>

            <S.WrapActionButton>
              <S.ActionButton onClick={onClose}>
                {t('translator.language-limit-popover.ok')}
              </S.ActionButton>
            </S.WrapActionButton>
          </>
        );
    }
  };

  const _renderNumberLanguage = (currentPlan?: string) => {
    switch (currentPlan) {
      case LEVEL_USER.GOLD:
        return LEVEL_USER_LIMIT_LANGUAGE.GOLD;
      case LEVEL_USER.SILVER:
        return LEVEL_USER_LIMIT_LANGUAGE.SILVER;
      case LEVEL_USER.BRONZE:
        return LEVEL_USER_LIMIT_LANGUAGE.BRONZE;
      default:
        return LEVEL_USER_LIMIT_LANGUAGE.DEFAULT;
    }
  };

  return (
    <>
      <BaseModal
        closeIcon={null}
        open={isOpen}
        footer={null}
        centered
        onCancel={onClose}
        width={650}>
        <S.PopupContent>
          <S.Title>{t('translator.language-limit-popover.title')}</S.Title>
          <S.WrapIconLevel>
            <IConLevel level={level} size="large" />
          </S.WrapIconLevel>
          {_renderPlan(level)}
        </S.PopupContent>
      </BaseModal>
    </>
  );
};
