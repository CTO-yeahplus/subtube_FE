import { NUMBER_CHARACTERS } from '@/constants';
import { CloseOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';
import React, { useRef } from 'react';

import * as S from './index.styles';

interface IProps {
  defaultTitle: string;
  defaultDescription: string;
  excludeTitle: string[];
  excludeDescription: string[];
  titleError: string;
  setExcludeTitle: React.Dispatch<React.SetStateAction<string[]>>;
  setExcludeDescription: React.Dispatch<React.SetStateAction<string[]>>;
  setDefaultTitle: React.Dispatch<any>;
  setDefaultDescription: React.Dispatch<any>;
  setTitleError: React.Dispatch<string>;
}

const ExcludeTranslation = (props: IProps) => {
  const { t } = useTranslation(['cloud-software', 'common']);

  const {
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
  } = props;

  const titleSelectedRef = useRef<string>('');
  const descriptionSelectedRef = useRef<string>('');

  const handleTextSelected = (type: string) => {
    let textSelected = '';

    if (window.getSelection) {
      textSelected = window.getSelection()?.toString().trim() ?? '';
    } else if (document.getSelection) {
      textSelected = document.getSelection()?.toString().trim() ?? '';
    }

    if (type === 'title') {
      titleSelectedRef.current = textSelected;
    } else if (type === 'description') {
      descriptionSelectedRef.current = textSelected;
    }
  };

  const handleExcludeTitle = () => {
    setExcludeTitle((prev) => {
      return titleSelectedRef.current && !prev.includes(titleSelectedRef.current)
        ? [...prev, titleSelectedRef.current]
        : prev;
    });

    titleSelectedRef.current = '';
  };

  const handleExcludeDescription = () => {
    setExcludeDescription((prev) => {
      return descriptionSelectedRef.current && !prev.includes(descriptionSelectedRef.current)
        ? [...prev, descriptionSelectedRef.current]
        : prev;
    });

    descriptionSelectedRef.current = '';
  };

  const handleRemoveTitle = (text: string) => {
    setExcludeTitle((prev) => prev.filter((item) => item !== text));
  };

  const handleRemoveDescription = (text: string) => {
    setExcludeDescription((prev) => prev.filter((item) => item !== text));
  };

  const handleChangeTitle = (title: string) => {
    if (/[><]/.test(title)) return;

    setDefaultTitle(title);
    setTitleError('');
  };

  const handleChangeDescription = (description: string) => {
    if (/[><]/.test(description)) return;

    setDefaultDescription(description);
  };

  return (
    <S.Wrapper>
      <S.Title>{t('translator.excludeTranslation')}</S.Title>

      <S.InputTitle>
        {t('translator.title')} <S.Required>*</S.Required>
      </S.InputTitle>

      <S.WrapperInput>
        <S.Input
          value={defaultTitle ?? ''}
          onSelect={() => handleTextSelected('title')}
          onChange={(e) => handleChangeTitle(e.target.value)}
          maxLength={NUMBER_CHARACTERS.title.max}
        />

        <S.InputButton type="primary" onClick={handleExcludeTitle}>
          {t('translator.exclude')}
        </S.InputButton>
      </S.WrapperInput>

      {titleError && <S.TextError>{titleError}</S.TextError>}

      <S.WrapperExclusionTag>
        {excludeTitle.map((text, index) => (
          <S.ExclusionTag key={index}>
            {text}
            <CloseOutlined style={{ fontSize: '10px' }} onClick={() => handleRemoveTitle(text)} />
          </S.ExclusionTag>
        ))}
      </S.WrapperExclusionTag>

      <S.InputDescription>{t('translator.description')}</S.InputDescription>

      <S.WrapperTextarea>
        <S.Textarea
          value={defaultDescription ?? ''}
          onSelect={() => handleTextSelected('description')}
          onChange={(e) => handleChangeDescription(e.target.value)}
          maxLength={NUMBER_CHARACTERS.description.max}
          autoSize={{ maxRows: 5 }}
        />

        <S.InputButton type="primary" onClick={handleExcludeDescription}>
          {t('translator.exclude')}
        </S.InputButton>
      </S.WrapperTextarea>

      <S.WrapperExclusionTag>
        {excludeDescription.map((text, index) => (
          <S.ExclusionTag key={index}>
            {text}
            <CloseOutlined
              style={{ fontSize: '10px' }}
              onClick={() => handleRemoveDescription(text)}
            />
          </S.ExclusionTag>
        ))}
      </S.WrapperExclusionTag>
    </S.Wrapper>
  );
};

export default ExcludeTranslation;
