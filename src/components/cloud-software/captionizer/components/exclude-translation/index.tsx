import { BaseButton } from '@/components/common/base-button';
import { ICaptionDetail } from '@/interfaces/cloud-software';
import { CloseOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';
import React, { useRef } from 'react';

import { CaptionContent } from './caption-content';
import * as S from './index.styles';

interface IProps {
  defaultCaptions: ICaptionDetail[];
  excludeCaptions: string[];
  setExcludeCaptions: React.Dispatch<React.SetStateAction<string[]>>;
  setDefaultCaptions: React.Dispatch<React.SetStateAction<ICaptionDetail[]>>;
  onGetCaptionDetail: () => Promise<ICaptionDetail[]>;
  getCaptionDetailPending: boolean;
  handleClearCaptions: () => void;
}

const ExcludeTranslation: React.FC<IProps> = (props) => {
  const {
    defaultCaptions,
    excludeCaptions,
    getCaptionDetailPending,
    setExcludeCaptions,
    onGetCaptionDetail,
    setDefaultCaptions,
    handleClearCaptions,
  } = props;

  const { t } = useTranslation(['cloud-software', 'common']);

  const existCaptionRef = useRef<string>('');
  const captioncontentRef = useRef<{ onRestore: (v: ICaptionDetail[]) => void }>();

  const handleTextSelected = () => {
    let textSelected = '';

    if (window.getSelection) {
      textSelected = window.getSelection()?.toString().trim() ?? '';
    } else if (document.getSelection) {
      textSelected = document.getSelection()?.toString().trim() ?? '';
    }
    existCaptionRef.current = textSelected;
  };

  const handleChangeCaptions = (v: string, index: number) => {
    const cloneDefaultCaptions = [...defaultCaptions];
    cloneDefaultCaptions[index] = {
      ...cloneDefaultCaptions[index],
      text: v,
    };
    setDefaultCaptions(cloneDefaultCaptions);
  };

  const handleExclude = () => {
    setExcludeCaptions((prev) => {
      return existCaptionRef.current && !prev.includes(existCaptionRef.current)
        ? [...prev, existCaptionRef.current]
        : prev;
    });
    existCaptionRef.current = '';
  };

  const handleRemoveTitle = (text: string) => {
    setExcludeCaptions((prev) => prev.filter((item) => item !== text));
  };

  const onReadCaptionFromYoutube = () => {
    onGetCaptionDetail().then((data) => {
      captioncontentRef.current?.onRestore(data);
    });
  };

  return (
    <S.Wrapper>
      <S.Title>{t('translator.excludeTranslation')}</S.Title>
      <S.WrapButton>
        <S.ReadButton
          type="primary"
          onClick={onReadCaptionFromYoutube}
          loading={getCaptionDetailPending}
        >
          {t('translator.read_captions_from_youtube')}
        </S.ReadButton>
        <BaseButton type="primary" danger onClick={handleClearCaptions}>
          {t('translator.clear_captions')}
        </BaseButton>
      </S.WrapButton>

      <S.WrapExclusion>
        <S.ExclusionTitle>{t('translator.exclusion')}:</S.ExclusionTitle>
        <S.WrapperExclusionTag>
          {excludeCaptions.map((text, index) => (
            <S.ExclusionTag key={index}>
              {text}
              <CloseOutlined style={{ fontSize: '10px' }} onClick={() => handleRemoveTitle(text)} />
            </S.ExclusionTag>
          ))}
        </S.WrapperExclusionTag>
      </S.WrapExclusion>

      {!!defaultCaptions?.length && (
        <CaptionContent
          defaultCaptions={defaultCaptions}
          handleTextSelected={handleTextSelected}
          handleChangeCaptions={handleChangeCaptions}
          ref={captioncontentRef}
        />
      )}

      {!!defaultCaptions?.length && (
        <S.WrapExcludeButton>
          <BaseButton type="primary" onClick={handleExclude}>
            {t('translator.exclude')}
          </BaseButton>
        </S.WrapExcludeButton>
      )}
    </S.Wrapper>
  );
};

export default ExcludeTranslation;
