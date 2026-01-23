import IconLoading from '@/assets/images/svg/icon-loading.svg';
import UnknowFlagImage from '@/assets/images/translator/unknow-flag.png';
import { NUMBER_CHARACTERS } from '@/constants';
import { ITranslateVideo } from '@/interfaces/cloud-software';
import { fromLangCodeToCountryCode } from '@/utils';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React, { useEffect, useImperativeHandle, useMemo, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

import { useTranslator } from '../..';
import * as S from './index.styles';

interface IOption {
  label: string;
  value: string;
}

interface IProps {
  loadingTranslate: boolean;
  translationLanguageSelected: string[];
  listOptionsLanguage: IOption[];
  listTranslationLanguage: string[];
  listTranslationLanguageError: string[];
  handleRestoreTranslation: () => ITranslateVideo[];
}

interface ITranslationContent {
  locale: string;
}

// eslint-disable-next-line react/display-name
const TranslationContent = React.forwardRef<any, ITranslationContent>((props, ref) => {
  const { t } = useTranslation(['cloud-software', 'common']);

  const { locale } = props;

  const { listVideoTranslated, setListVideoTranslated } = useTranslator();

  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputDescription, setInputDescription] = useState<string>('');

  const [titleError, setTitleError] = useState<string>('');
  const [descriptionError, setDescriptionError] = useState<string>('');

  useEffect(() => {
    const content = listVideoTranslated?.find((item) => item.language === locale);
    setInputTitle(content?.title ?? '');
    setInputDescription(content?.description ?? '');
  }, [listVideoTranslated, locale]);

  useEffect(() => {
    const content = listVideoTranslated.find((item) => item.language === locale);

    if (!content?.title) {
      setTitleError(t('validate.requiredField', { ns: 'common' }));
    } else if (content?.title && content.title.length > NUMBER_CHARACTERS.title.max) {
      setTitleError(
        t('validate.MC21', {
          number: NUMBER_CHARACTERS.title.max,
          ns: 'common',
        })
      );
    } else {
      setTitleError('');
    }

    if (content?.description && content.description.length > NUMBER_CHARACTERS.description.max) {
      setDescriptionError(
        t('validate.MC21', {
          number: NUMBER_CHARACTERS.description.max,
          ns: 'common',
        })
      );
    } else {
      setDescriptionError('');
    }
  }, [listVideoTranslated, locale, t]);

  const handleChangeTitle = (value: string) => {
    if (/[><]/.test(value)) return;

    if (!value) {
      setTitleError(t('validate.requiredField', { ns: 'common' }));
    } else if (value && value.length > NUMBER_CHARACTERS.title.max) {
      setTitleError(
        t('validate.MC21', {
          number: NUMBER_CHARACTERS.title.max,
          ns: 'common',
        })
      );
    } else {
      setTitleError('');
    }

    const data = listVideoTranslated.map((item) =>
      item.language === locale ? { ...item, title: value } : item
    );
    setListVideoTranslated(data);
    setInputTitle(value);
  };

  const handleChangeDescription = (value: string) => {
    if (/[><]/.test(value)) return;

    if (value && value.length > NUMBER_CHARACTERS.description.max) {
      setDescriptionError(
        t('validate.MC21', {
          number: NUMBER_CHARACTERS.description.max,
          ns: 'common',
        })
      );
    } else {
      setDescriptionError('');
    }

    const data = listVideoTranslated.map((item) =>
      item.language === locale ? { ...item, description: value } : item
    );
    setListVideoTranslated(data);
    setInputDescription(value);
  };

  useImperativeHandle(
    ref,
    function () {
      return {
        onRestore(data?: { title: string; description: string }) {
          try {
            setInputTitle(data?.title ?? '');
            setInputDescription(data?.description ?? '');
          } catch (err) {
            return;
          }
        },
      };
    },
    []
  );

  return (
    <S.WrapperContent>
      <S.InputTitle>
        {t('translator.title')} <S.Required>*</S.Required>
      </S.InputTitle>

      <S.Input
        value={inputTitle}
        onChange={(e) => handleChangeTitle(e.target.value)}
        maxLength={NUMBER_CHARACTERS.title.max}
      />

      {titleError && <S.TextError>{titleError}</S.TextError>}

      <S.InputDescription>{t('translator.description')}</S.InputDescription>

      <S.Textarea
        value={inputDescription}
        onChange={(e) => handleChangeDescription(e.target.value)}
        maxLength={NUMBER_CHARACTERS.description.max}
        autoSize={{ maxRows: 5 }}
      />

      {descriptionError && <S.TextError>{descriptionError}</S.TextError>}
    </S.WrapperContent>
  );
});

const ReviewTranslation = (props: IProps) => {
  const { t } = useTranslation(['cloud-software', 'common']);

  const { listVideoTranslated, setListVideoTranslated } = useTranslator();

  const TranslationContentRefs = React.useRef<
    { onRestore: (data: { title: string; description: string }) => void }[]
  >([]);

  const {
    loadingTranslate,
    translationLanguageSelected,
    listOptionsLanguage,
    listTranslationLanguage,
    listTranslationLanguageError,
    handleRestoreTranslation,
  } = props;

  const defaultPanes = useMemo(
    () =>
      translationLanguageSelected.map((locale, index) => {
        const optionlanguage = listOptionsLanguage.find((item) => item.value === locale);
        const countryCode = fromLangCodeToCountryCode(locale);

        return {
          key: index.toString(),
          title: optionlanguage?.label,
          content: (
            <TranslationContent
              locale={locale}
              ref={(element) => (TranslationContentRefs.current[index] = element)}
            />
          ),
          locale: locale,
          icon: countryCode ? (
            <ReactCountryFlag countryCode={countryCode} svg />
          ) : (
            <Image src={UnknowFlagImage} alt="unknow" width={20} height={16} />
          ),
        };
      }),
    [translationLanguageSelected, listOptionsLanguage]
  );

  const [activeKey, setActiveKey] = useState(defaultPanes[0]?.key ?? '');

  const [items, setItems] = useState(defaultPanes);

  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const remove = (targetKey: string, locale: string) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }
    setItems(newPanes);

    const updateListVideoTranslated = listVideoTranslated.filter(
      (item) => item.language !== locale
    );
    setListVideoTranslated(updateListVideoTranslated);
  };

  const handleClickRestore = () => {
    setItems(defaultPanes);
    const restoreList = handleRestoreTranslation();
    restoreList?.map((item, index) => {
      TranslationContentRefs.current[index]?.onRestore({
        title: item.title,
        description: item.description,
      });
    });
  };

  return (
    <>
      <S.Wrapper>
        <S.Title>{t('translator.reviewTranslation')}</S.Title>

        {items.length > 0 && (
          <S.TabList tabPosition="left" activeKey={activeKey} onChange={onChange}>
            {items.map((pane) => (
              <S.WrapperTabItem
                tab={
                  <S.TabItem>
                    <S.LanguageItem>
                      <S.Flag>{pane.icon}</S.Flag>
                      <S.Language>{pane.title}</S.Language>
                      {!loadingTranslate && listTranslationLanguageError.includes(pane.locale) && (
                        <S.IconErrorText />
                      )}
                    </S.LanguageItem>

                    {loadingTranslate ? (
                      listTranslationLanguage.includes(pane.locale) ? (
                        <S.IconLoadingTab />
                      ) : (
                        pane.key === activeKey && (
                          <S.IconClose onClick={() => remove(pane.key, pane.locale)} />
                        )
                      )
                    ) : (
                      pane.key === activeKey && (
                        <S.IconClose onClick={() => remove(pane.key, pane.locale)} />
                      )
                    )}
                  </S.TabItem>
                }
                key={pane.key}>
                {loadingTranslate && listTranslationLanguage.includes(pane.locale) ? (
                  <S.WrapperLoading>
                    <S.Icon>
                      <IconLoading />
                    </S.Icon>
                    <S.Text>{t('translator.translatingVideo')}</S.Text>
                    <S.Text>{t('translator.waitingTranslateDesc')}</S.Text>
                  </S.WrapperLoading>
                ) : (
                  pane.content
                )}
              </S.WrapperTabItem>
            ))}
          </S.TabList>
        )}
      </S.Wrapper>

      <S.WrapperButton>
        <S.RestoreButton type="primary" onClick={handleClickRestore}>
          <S.IconButton />
          {t('translator.restoreTranslation')}
        </S.RestoreButton>
      </S.WrapperButton>
    </>
  );
};

export default ReviewTranslation;
