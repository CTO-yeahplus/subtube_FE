import IconLoading from '@/assets/images/svg/icon-loading.svg';
import UnknowFlagImage from '@/assets/images/translator/unknow-flag.png';
import { ICaptionDetail } from '@/interfaces/cloud-software';
import { fromLangCodeToCountryCode, sleep } from '@/utils';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

import { CaptionContent } from '../exclude-translation/caption-content';
import { useTranslator } from './../../';
import * as S from './index.styles';

interface IOption {
  label: string;
  value: string;
}

interface IProps {
  loadingTranslate: boolean;
  translationLanguageSelected: string[];
  listOptionsLanguage: IOption[];
  listTranslationLanguageError: string[];
  listTranslationLanguage: string[];
  handleRestoreTranslation: () => { lang: string; content: ICaptionDetail[] }[];
}

// eslint-disable-next-line react/display-name
const ContentItem = React.forwardRef<
  any,
  {
    locale: string;
    indexContent: number;
  }
>((props, ref) => {
  const { locale, indexContent } = props;
  const { listVideoTranslated, setListVideoTranslated } = useTranslator();
  const captionContent = listVideoTranslated.find((item) => item.lang === locale);

  const onChangeCaptions = (v: string, itemIndex: number) => {
    const cloneList = [...listVideoTranslated];
    try {
      cloneList[indexContent].content[itemIndex].text = v;
      setListVideoTranslated(cloneList);
    } catch (err) {
      return;
    }
  };

  return (
    <CaptionContent
      defaultCaptions={captionContent?.content}
      handleTextSelected={() => null}
      handleChangeCaptions={onChangeCaptions}
      ref={ref}
    />
  );
});

const ReviewTranslation: React.FC<IProps> = (props) => {
  const {
    loadingTranslate,
    translationLanguageSelected,
    listOptionsLanguage,
    listTranslationLanguage,
    listTranslationLanguageError,
    handleRestoreTranslation,
  } = props;

  const { t } = useTranslation(['cloud-software', 'common']);
  const { listVideoTranslated, setListVideoTranslated } = useTranslator();

  const captionContentRefs = React.useRef<{ onRestore: (v: ICaptionDetail[]) => void }[]>([]);

  const defaultPanes = useMemo(
    () =>
      translationLanguageSelected.map((locale, index) => {
        const optionlanguage = listOptionsLanguage.find((item) => item.value === locale);
        const countryCode = fromLangCodeToCountryCode(locale);

        return {
          key: index.toString(),
          title: optionlanguage?.label,
          content: (
            <ContentItem
              locale={locale}
              indexContent={index}
              ref={(element) => (captionContentRefs.current[index] = element)}
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
    [
      loadingTranslate,
      translationLanguageSelected,
      listOptionsLanguage,
      listTranslationLanguage,
      listTranslationLanguageError,
      listVideoTranslated,
    ]
  );

  const [activeKey, setActiveKey] = useState(defaultPanes[0]?.key ?? '');

  const [items, setItems] = useState(defaultPanes);

  const onChange = (key: string) => {
    setActiveKey(key);
    setItems([]);
    sleep(50).then(() => {
      setItems(defaultPanes);
    });
  };

  const remove = (targetKey: string, locale: string) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }
    setItems(newPanes);

    const updateListVideoTranslated = listVideoTranslated.filter((item) => item.lang !== locale);
    setListVideoTranslated(updateListVideoTranslated);
  };

  const handleClickRestore = () => {
    setItems(defaultPanes);
    const restoreList = handleRestoreTranslation();
    try {
      restoreList?.map((item, index) => {
        captionContentRefs.current[index]?.onRestore(item.content);
      });
    } catch (err) {
      return;
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.Title>{t('translator.reviewTranslation')}</S.Title>
        {items.length > 0 ? (
          <S.TabList tabPosition="left" activeKey={activeKey} onChange={onChange}>
            {items?.map((pane) => (
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
                key={pane.key}
              >
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
        ) : (
          <div style={{ height: 500 }}></div>
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
