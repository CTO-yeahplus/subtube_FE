import IconArrowLeft from '@/assets/images/svg/icon-arrow-left.svg';
import IconArrowRight from '@/assets/images/svg/icon-arrow-right.svg';
import NoVideo from '@/assets/images/translator/no-video.png';
import { BaseImage } from '@/components/common/base-image';
import { StepSwitch } from '@/components/common/step-switch';
import ModalFinishUpdate from '@/components/modals/modal-finish-update';
import ModalLoading from '@/components/modals/modal-loading';
import { DATE_FORMAT, STEP_TRANSLATE } from '@/constants';
import { ITranslateVideo } from '@/interfaces/cloud-software';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { createContext, useContext } from 'react';

import CurrentPlan from '../youtube-account/current-plan';
import ExcludeTranslation from './components/exclude-translation';
import ReviewTranslation from './components/review-translation';
import SelectLanguage from './components/select-language';
import SelectVideo from './components/select-video';
import * as S from './index.styles';
import useTranslateVideo from './index.utils';

interface ITranslator {
  listVideoTranslated: ITranslateVideo[];
  setListVideoTranslated: React.Dispatch<React.SetStateAction<ITranslateVideo[]>>;
}

const TranslatorContext = createContext<ITranslator | null>(null);

export const useTranslator = () => useContext(TranslatorContext) as ITranslator;

const TranslatorComponent = () => {
  const { t } = useTranslation(['cloud-software', 'common']);

  const {
    steps,
    current,
    prev,
    next,
    dataTable,
    totalResults,
    listOptionsAccount,
    accountSelected,
    videoSelected,
    handleGetListVideo,
    handleChangeAccount,
    handleRefreshVideo,
    handleParamsChange,
    handleChangeVideo,
    defaultLanguage,
    listOptionsLanguage,
    listOptionsYoutubeLanguage,
    originalLanguageSelected,
    translationLanguageSelected,
    originalLanguageError,
    translationLanguageError,
    setOriginalLanguageSelected,
    setTranslationLanguageSelected,
    setOriginalLanguageError,
    setTranslationLanguageError,
    refetchListLanguage,
    refetchDetailVideo,
    refetchVideoHistory,
    refetchListYoutubeLanguage,
    defaultTitle,
    defaultDescription,
    excludeTitle,
    excludeDescription,
    titleError,
    setExcludeTitle,
    setExcludeDescription,
    setDefaultTitle,
    setDefaultDescription,
    setTitleError,
    loadingTranslate,
    listTranslationLanguage,
    listVideoTranslated,
    listTranslationLanguageError,
    setListVideoTranslated,
    loadingPublishVideo,
    openModalFinish,
    handleToggleModalFinish,
    disabledNextBtn,
    disabledPublishBtn,
    handlePublish,
    handleRestoreTranslation,
    handleLoadMoreAccount,
  } = useTranslateVideo();

  const renderStep = () => {
    switch (current) {
      case STEP_TRANSLATE.STEP_1:
        return (
          <SelectVideo
            dataTable={dataTable}
            totalResults={totalResults}
            listOptionsAccount={listOptionsAccount}
            accountSelected={accountSelected}
            videoSelected={videoSelected}
            handleChangeAccount={handleChangeAccount}
            handleRefreshVideo={handleRefreshVideo}
            handleParamsChange={handleParamsChange}
            handleGetListVideo={handleGetListVideo}
            handleChangeVideo={handleChangeVideo}
            handleLoadMoreAccount={handleLoadMoreAccount}
          />
        );

      case STEP_TRANSLATE.STEP_2:
        return (
          <SelectLanguage
            accountSelected={accountSelected}
            videoSelected={videoSelected}
            defaultLanguage={defaultLanguage}
            listOptionsLanguage={listOptionsLanguage}
            listOptionsYoutubeLanguage={listOptionsYoutubeLanguage}
            originalLanguageSelected={originalLanguageSelected}
            translationLanguageSelected={translationLanguageSelected}
            originalLanguageError={originalLanguageError}
            translationLanguageError={translationLanguageError}
            setOriginalLanguageSelected={setOriginalLanguageSelected}
            setTranslationLanguageSelected={setTranslationLanguageSelected}
            setOriginalLanguageError={setOriginalLanguageError}
            setTranslationLanguageError={setTranslationLanguageError}
            refetchListLanguage={refetchListLanguage}
            refetchDetailVideo={refetchDetailVideo}
            refetchVideoHistory={refetchVideoHistory}
            refetchListYoutubeLanguage={refetchListYoutubeLanguage}
          />
        );

      case STEP_TRANSLATE.STEP_3:
        return (
          <ExcludeTranslation
            defaultTitle={defaultTitle}
            defaultDescription={defaultDescription}
            excludeTitle={excludeTitle}
            excludeDescription={excludeDescription}
            titleError={titleError}
            setExcludeTitle={setExcludeTitle}
            setExcludeDescription={setExcludeDescription}
            setDefaultTitle={setDefaultTitle}
            setDefaultDescription={setDefaultDescription}
            setTitleError={setTitleError}
          />
        );

      case STEP_TRANSLATE.STEP_4:
        return (
          <ReviewTranslation
            loadingTranslate={loadingTranslate}
            translationLanguageSelected={translationLanguageSelected}
            listOptionsLanguage={listOptionsLanguage}
            listTranslationLanguage={listTranslationLanguage}
            listTranslationLanguageError={listTranslationLanguageError}
            handleRestoreTranslation={handleRestoreTranslation}
          />
        );

      default:
        break;
    }
  };

  return (
    <TranslatorContext.Provider value={{ listVideoTranslated, setListVideoTranslated }}>
      <S.ContainerTitle>
        <S.ContainerTitleLeft>
          <S.Title>{t('translator.translator')}</S.Title>
          <S.SubTitle>{t('translator.translateVideos')}</S.SubTitle>
        </S.ContainerTitleLeft>
        <CurrentPlan />
      </S.ContainerTitle>

      <StepSwitch steps={steps} current={current} />

      <S.ButtonWrapper>
        <S.StepButton type="primary" disabled={current === STEP_TRANSLATE.STEP_1} onClick={prev}>
          <IconArrowLeft />
          {t('translator.previous')}
        </S.StepButton>

        <S.SelectedVideo>
          <S.ImageWrapper>
            <BaseImage
              width={120}
              height={90}
              src={videoSelected ? videoSelected.picture : NoVideo.src}
              alt=""
              preview={false}
            />
          </S.ImageWrapper>
          <div>
            <S.SelectedTitle>
              {videoSelected ? (
                <Link href={`https://youtu.be/${videoSelected.id}`} target="_blank">
                  {videoSelected.title}
                </Link>
              ) : (
                t('translator.noVideo')
              )}
            </S.SelectedTitle>
            {videoSelected && (
              <S.SelectedDate>
                {dayjs(videoSelected.date).format(DATE_FORMAT.DAY_MONTH_YEAR)}
              </S.SelectedDate>
            )}
            <S.SelectedDesc>
              {videoSelected ? videoSelected.description : t('translator.selectVideoInlist')}
            </S.SelectedDesc>
          </div>
        </S.SelectedVideo>

        {current < steps.length - 1 && (
          <S.StepButton type="primary" onClick={next} disabled={disabledNextBtn}>
            {t('translator.nextStep')}
            <IconArrowRight />
          </S.StepButton>
        )}
        {current === steps.length - 1 && (
          <S.PublishButton type="primary" onClick={handlePublish} disabled={disabledPublishBtn}>
            {t('translator.publish')}
            <IconArrowRight />
          </S.PublishButton>
        )}
      </S.ButtonWrapper>

      <div>{renderStep()}</div>

      <ModalLoading
        isOpen={loadingPublishVideo}
        title={t('translator.publishingVideos')}
        desc={t('translator.waitingDesc')}
      />

      <ModalFinishUpdate
        isOpen={openModalFinish}
        onClose={handleToggleModalFinish}
        text={t('translator.finishedUpdatingVideo')}
        subText={{
          start: t('translator.finish-updating-modal.translator.subtext-start'),
          hightlight: t('translator.finish-updating-modal.translator.subtext-highlight'),
          continue: t('translator.finish-updating-modal.translator.subtext-continue'),
          second: t('translator.finish-updating-modal.translator.subtext-second'),
        }}
        videoId={videoSelected?.id}
      />
    </TranslatorContext.Provider>
  );
};

export default TranslatorComponent;
