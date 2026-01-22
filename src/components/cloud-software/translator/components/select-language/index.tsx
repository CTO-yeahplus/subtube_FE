import { ModalLanguageLimit } from '@/components/modals/modal-language-limit';
import { LEVEL_USER, LEVEL_USER_LIMIT_LANGUAGE } from '@/interfaces';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppSelector } from '@/stores/hooks';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useMemo, useState } from 'react';

import * as S from './index.styles';

interface IOption {
  label: string;
  value: string;
}

interface IProps {
  videoSelected: any;
  accountSelected: string;
  defaultLanguage: string;
  originalLanguageError: string;
  translationLanguageError: string;
  listOptionsLanguage: IOption[];
  originalLanguageSelected: string | null;
  translationLanguageSelected: string[];
  setOriginalLanguageSelected: React.Dispatch<React.SetStateAction<string | null>>;
  setTranslationLanguageSelected: React.Dispatch<React.SetStateAction<string[]>>;
  setOriginalLanguageError: React.Dispatch<React.SetStateAction<string>>;
  setTranslationLanguageError: React.Dispatch<React.SetStateAction<string>>;
  refetchListLanguage: () => void;
  listOptionsYoutubeLanguage: IOption[];
  refetchListYoutubeLanguage: () => void;
  refetchDetailVideo?: () => void;
  refetchVideoHistory?: () => void;
}

const SelectLanguage = (props: IProps) => {
  const { t } = useTranslation(['cloud-software', 'common']);
  const user = useAppSelector(selectCurrentUser);

  const {
    videoSelected,
    accountSelected,
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
    refetchListYoutubeLanguage,
    refetchDetailVideo,
    refetchVideoHistory,
  } = props;

  const [isOpenModalLanguageLimit, setIsOpenModalLanguageLimit] = useState<boolean>(false);
  const sortedListOptionsLanguage = listOptionsLanguage.sort((a, b) =>
    a.label > b.label ? 1 : -1
  );
  const sortedListOptionsYoutubeLanguage = listOptionsYoutubeLanguage.sort((a, b) =>
    a.label > b.label ? 1 : -1
  );

  useEffect(() => {
    if (!videoSelected || !accountSelected) return;
    refetchListLanguage && refetchListLanguage();
    refetchListYoutubeLanguage && refetchListYoutubeLanguage();
    refetchDetailVideo && refetchDetailVideo();

    if (videoSelected.translated) {
      refetchVideoHistory && refetchVideoHistory();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoSelected]);

  const findDefaultLanguage = sortedListOptionsYoutubeLanguage.find(
    (item) => item.value === defaultLanguage
  );

  const filterLanguage = sortedListOptionsYoutubeLanguage.filter(
    (item) => item.value !== defaultLanguage
  );

  const listOriginalLanguage = findDefaultLanguage
    ? [
        { value: findDefaultLanguage.value, label: `${findDefaultLanguage.label} (Default)` },
        ...filterLanguage,
      ]
    : sortedListOptionsYoutubeLanguage;

  const translationErrorMessage = t('validate.notValidLanguage', { ns: 'common' });

  const handleChangeOriginalLanguage = (value: string) => {
    if (value && translationLanguageSelected.includes(value)) {
      setTranslationLanguageError(translationErrorMessage);
    } else {
      setTranslationLanguageError('');
    }

    setOriginalLanguageError('');

    setOriginalLanguageSelected(value);
  };

  const handleChangeTranslationLanguage = (value: string[]) => {
    if (originalLanguageSelected && value.includes(originalLanguageSelected)) {
      setTranslationLanguageError(translationErrorMessage);
    } else {
      setTranslationLanguageError('');
    }
  };

  const numberAvailableLanguage = useMemo(() => {
    switch (user?.level?.toLocaleUpperCase()) {
      case LEVEL_USER.GOLD:
        return listOptionsLanguage.length;
      case LEVEL_USER.SILVER:
        return LEVEL_USER_LIMIT_LANGUAGE.SILVER;
      case LEVEL_USER.BRONZE:
        return LEVEL_USER_LIMIT_LANGUAGE.BRONZE;
      default:
        return LEVEL_USER_LIMIT_LANGUAGE.DEFAULT;
    }
  }, [user, listOptionsLanguage]);

  const remainningAvailableLanguage = numberAvailableLanguage - translationLanguageSelected.length;

  const handleSelectTranslationLanguage = (value: string) => {
    if (translationLanguageSelected.length >= numberAvailableLanguage) {
      setIsOpenModalLanguageLimit(true);
      return;
    }
    setTranslationLanguageSelected([...translationLanguageSelected, value]);
  };

  const handleDeselectTranslationLanguage = (value: string) => {
    const filterLanguage = translationLanguageSelected.filter((item) => item !== value);
    setTranslationLanguageSelected(filterLanguage);
  };

  const handleClearTranslationLanguage = () => {
    setTranslationLanguageSelected([]);
  };

  return (
    <S.Wrapper>
      <ModalLanguageLimit
        isOpen={isOpenModalLanguageLimit}
        onClose={() => setIsOpenModalLanguageLimit(false)}
      />
      <S.Title>{t('translator.selectLanguages')}</S.Title>
      <S.WrapperSelect>
        <div>
          <S.SelectTitle>
            {t('translator.originalLanguage')} <S.Required>*</S.Required>
          </S.SelectTitle>

          <S.Select
            showSearch
            allowClear
            value={originalLanguageSelected}
            options={listOriginalLanguage}
            placeholder={t('translator.typeToFilter')}
            onChange={(value) => handleChangeOriginalLanguage(value as string)}
            filterOption={(inputValue, option) =>
              option?.label.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
            }
          />

          {originalLanguageError && <S.TextError>{originalLanguageError}</S.TextError>}
        </div>

        <div>
          <S.SelectTitle>
            {t('translator.translationLanguages')} <S.Required>*</S.Required>
          </S.SelectTitle>

          <S.Select
            allowClear
            value={translationLanguageSelected}
            options={sortedListOptionsLanguage}
            mode="multiple"
            placeholder={t('translator.typeToFilter')}
            onChange={(value) => handleChangeTranslationLanguage(value as string[])}
            onSelect={(value) => handleSelectTranslationLanguage(value as string)}
            onDeselect={(value) => handleDeselectTranslationLanguage(value as string)}
            onClear={() => handleClearTranslationLanguage()}
            filterOption={(inputValue, option) =>
              option?.label.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
            }
          />

          {translationLanguageError && <S.TextError>{translationLanguageError}</S.TextError>}

          <S.LanguageInfo>
            <div>
              {t('translator.totalSelected', { number: translationLanguageSelected.length })}{' '}
              {translationLanguageSelected.length <= 1
                ? t('translator.numberLanguage')
                : t('translator.numberLanguages')}
            </div>
            <S.Available>
              <S.IconQuestion onClick={() => setIsOpenModalLanguageLimit(true)} />
              {t('translator.available', {
                number: remainningAvailableLanguage >= 0 ? remainningAvailableLanguage : 0,
              })}{' '}
              {remainningAvailableLanguage <= 1
                ? t('translator.numberLanguage')
                : t('translator.numberLanguages')}
            </S.Available>
          </S.LanguageInfo>
        </div>
      </S.WrapperSelect>
    </S.Wrapper>
  );
};

export default SelectLanguage;
