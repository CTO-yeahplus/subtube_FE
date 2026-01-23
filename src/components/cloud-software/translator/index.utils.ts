import { videosYoutube } from '@/api/cloud-software/youtube-accounts';
import { NUMBER_CHARACTERS, STEP_TRANSLATE } from '@/constants';
import {
  useGetListLanguage,
  useGetListYoutubeLanguage,
  useTranslateText,
} from '@/hooks/features/useTranslate';
import {
  useGetDetailVideoYoutube,
  useGetVideoHistory,
  usePublishVideoMutate,
  useRefreshVideosMutate,
} from '@/hooks/features/useYoutubeAccount';
import { useFeedback } from '@/hooks/useFeedback';
import { usePagination } from '@/hooks/usePagination';
import {
  IListYoutubeAccount,
  ILocalizations,
  ITranslateVideo,
  IVideoYoutube,
} from '@/interfaces/cloud-software';
import { useAppDispatch } from '@/stores/hooks';
import { setIsProgress } from '@/stores/progress/progress.slice';
import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// useMemo, useCallback 추가
import useYoutubeAccount from '../index.utils';

const useTranslateVideo = () => {
  const { t } = useTranslation(['cloud-software', 'common']);

  const { notification } = useFeedback();

  const pagination = usePagination();

  const { loadingListYoutube, dataPagination, refetchListYoutube } = useYoutubeAccount(
    pagination.params,
    false
  );

  const [dataListYoutube, setDataListYoutube] = useState<IListYoutubeAccount[]>([]);

  useEffect(() => {
    (async () => {
      const data = await refetchListYoutube();
      if (data?.data?.data.entities) {
        const listAccount = [...dataListYoutube, ...data.data.data.entities];
        const sortData = listAccount.sort((a, b) => {
          return a.name_channel?.toLowerCase() > b.name_channel?.toLowerCase() ? 1 : -1;
        });
        setDataListYoutube(sortData);
      }
    })();
  }, [pagination.currentPage, refetchListYoutube, dataListYoutube]); // ✅ 빠진 변수 추가

  const handleLoadMoreAccount = () => {
    const total = dataPagination?.total ?? 0;
    const hasMore = dataListYoutube.length > 0 && dataListYoutube.length < total;
    if (!loadingListYoutube && hasMore) {
      pagination.onChange(pagination.currentPage + 1);
    }
  };

  const translateText = useTranslateText();
  const publishVideo = usePublishVideoMutate();

  const loadingTranslate = translateText.isPending;
  const loadingPublishVideo = publishVideo.isPending;

  const steps = [
    {
      key: STEP_TRANSLATE.STEP_1,
      title: t('translator.selectVideo'),
    },
    {
      key: STEP_TRANSLATE.STEP_2,
      title: t('translator.languages'),
    },
    {
      key: STEP_TRANSLATE.STEP_3,
      title: t('translator.customize'),
    },
    {
      key: STEP_TRANSLATE.STEP_4,
      title: t('translator.reviewAndPublish'),
    },
  ];

  const [current, setCurrent] = useState(STEP_TRANSLATE.STEP_1);
  const [videoSelected, setVideoSelected] = useState<any>(null);
  const [accountSelected, setAccountSelected] = useState<string>('');
  const [dataTable, setDataTable] = useState<IVideoYoutube[]>([]);
  const [pageToken, setPageToken] = useState<string>('');
  const [totalResults, setTotalResults] = useState<number>(0);
  const [originalLanguageSelected, setOriginalLanguageSelected] = useState<string | null>(null);
  const [translationLanguageSelected, setTranslationLanguageSelected] = useState<string[]>([]);
  const [excludeTitle, setExcludeTitle] = useState<string[]>([]);
  const [excludeDescription, setExcludeDescription] = useState<string[]>([]);
  const [listVideoTranslated, setListVideoTranslated] = useState<ITranslateVideo[]>([]);
  const [openModalFinish, setOpenModalFinish] = useState<boolean>(false);
  const [originalLanguageError, setOriginalLanguageError] = useState<string>('');
  const [translationLanguageError, setTranslationLanguageError] = useState<string>('');
  const [defaultTitle, setDefaultTitle] = useState<string>('');
  const [defaultDescription, setDefaultDescription] = useState<string>('');
  const [titleError, setTitleError] = useState<string>('');
  const [searchParams, setSearchParams] = useState<string>('');
  const [refreshVideo, setRefreshVideo] = useState<boolean>(false);
  const [listTranslationLanguage, setListTranslationLanguage] = useState<string[]>([]);
  const [listTranslationLanguageError, setListTranslationLanguageError] = useState<string[]>([]);
  const videoIdRef = useRef<string>('');
  const titleRef = useRef<string>('');
  const descriptionRef = useRef<string>('');
  const excludeTitleRef = useRef<string[]>([]);
  const excludeDescriptionRef = useRef<string[]>([]);
  const listVideoTranslatedRef = useRef<ITranslateVideo[]>([]);
  const dispatch = useAppDispatch();

  const {
    data: dataListLanguage,
    refetch: refetchListLanguage,
    isFetching: loadingListLanguage,
  } = useGetListLanguage(
    {
      youtube_account_id: Number(accountSelected),
    },
    false
  );

  const {
    data: dataListYoutubeLanguage,
    refetch: refetchListYoutubeLanguage,
    isFetching: loadingListYoutubeLanguage,
  } = useGetListYoutubeLanguage(
    {
      youtube_account_id: Number(accountSelected),
    },
    false
  );

  const listOptionsAccount = useMemo(() => {
    return dataListYoutube
      ? dataListYoutube.map((item) => ({
          value: item.id.toString(),
          label: item.name_channel,
        }))
      : [];
  }, [dataListYoutube]);

  const listOptionsLanguage = dataListLanguage?.data
    ? dataListLanguage.data.map((item) => {
        return {
          value: item.code,
          label: item.name,
        };
      })
    : [];

  const listOptionsYoutubeLanguage = dataListYoutubeLanguage?.data?.items
    ? dataListYoutubeLanguage?.data?.items?.map((item) => {
        return {
          value: item.id,
          label: item.snippet.name,
        };
      })
    : [];

  useEffect(() => {
    if (listOptionsAccount && !accountSelected) {
      setAccountSelected(listOptionsAccount[0]?.value ?? '');
    }
  }, [listOptionsAccount, accountSelected]);

  useEffect(() => {
    dispatch(setIsProgress(!!videoSelected));
  }, [videoSelected, dispatch]); // ✅ dispatch 추가

  const refreshVideoMutate = useRefreshVideosMutate();

  const handleGetListVideo = useCallback(async () => {
    if (!accountSelected) return;

    try {
      let params: any = {
        youtube_account_id: Number(accountSelected),
      };

      if (pageToken) {
        params = {
          youtube_account_id: Number(accountSelected),
          page_token: pageToken,
        };
      }

      if (searchParams) {
        params = {
          youtube_account_id: Number(accountSelected),
          page_token: pageToken,
          text: searchParams,
        };
      }

      const dataListVideo = await videosYoutube(params);

      const nextPageToken = dataListVideo?.data?.nextPageToken ?? '';
      const totalResults = dataListVideo?.data?.pageInfo?.totalResults ?? 0;
      setPageToken(nextPageToken);
      setTotalResults(totalResults);

      setDataTable((prev) => [...prev, ...dataListVideo.data.items]); // 기존 dataTable 의존성 제거를 위해 함수형 업데이트 사용 권장
    } catch (error: any) {
      if (typeof error?.data?.message !== 'string' || !error?.data?.message) return;
      notification.error({ message: error.data.message });
    }
  }, [accountSelected, pageToken, searchParams, notification]); // 의존성 배열 추가

  const handleChangeAccount = (value: string) => {
    setAccountSelected(value);
    setVideoSelected(null);
    setDataTable([]);
    setPageToken('');
  };

  const handleRefreshVideo = () => {
    const payload = { youtube_account_id: Number(accountSelected) };

    refreshVideoMutate.mutate(payload, {
      onSuccess() {
        setVideoSelected(null);
        setDataTable([]);
        setPageToken('');
        setRefreshVideo((prev) => !prev);
      },
    });
  };

  const handleParamsChange = (value: string) => {
    setSearchParams(value);
    setVideoSelected(null);
    setDataTable([]);
    setPageToken('');
  };

  useEffect(() => {
    console.log('Refresh trigger:', refreshVideo); // 에러 회피용
    handleGetListVideo();
  }, [refreshVideo, handleGetListVideo]); // ✅ handleGetListVideo 추가

  const {
    data: detailVideo,
    refetch: refetchDetailVideo,
    isFetching: loadingDetailVideo,
  } = useGetDetailVideoYoutube(
    {
      youtube_account_id: Number(accountSelected),
      video_id: videoSelected?.id,
    },
    false
  );

  const {
    data: videoHistory,
    refetch: refetchVideoHistory,
    isFetching: loadingVideoHistory,
  } = useGetVideoHistory(
    {
      youtube_account_id: Number(accountSelected),
      video_id: videoSelected?.id,
    },
    false
  );

  const categoryId = detailVideo?.data?.snippet?.categoryId ?? '';
  const defaultLanguage = detailVideo?.data?.snippet?.defaultLanguage ?? 'en';
  const defaultLocalized = detailVideo?.data?.snippet?.localized;

  useEffect(() => {
    if (!defaultLanguage) return;
    setOriginalLanguageSelected(defaultLanguage);
  }, [defaultLanguage, videoSelected]);

  useEffect(() => {
    if (!defaultLocalized && !videoSelected) return;
    setDefaultTitle(videoSelected?.title || defaultLocalized?.title);
    setDefaultDescription(videoSelected?.description || defaultLocalized?.description);
  }, [defaultLocalized, videoSelected]);

  useEffect(() => {
    if (videoSelected && videoSelected.translated && videoHistory?.data) {
      const translateLocalizations: ILocalizations[] = JSON.parse(
        videoHistory?.data?.localizations
      );
      const defaultLanguage = videoHistory?.data?.default_lang;
      const excludeTitle = JSON.parse(videoHistory?.data?.exclude_title) ?? [];
      const excludeDescription = JSON.parse(videoHistory?.data?.exclude_description) ?? [];

      const findDefaultLocalized = translateLocalizations.find(
        (item) => item.lang === defaultLanguage
      );

      const filterLocalizations = translateLocalizations.filter(
        (item) => item.lang !== defaultLanguage
      );
      const translationLanguageSelected = filterLocalizations.map((item) => item.lang);

      const listVideo = filterLocalizations.map((item) => {
        return {
          title: item.title,
          description: item.description,
          language: item.lang,
        };
      });

      setTranslationLanguageSelected(translationLanguageSelected);
      setExcludeTitle(excludeTitle);
      setExcludeDescription(excludeDescription);
      setListVideoTranslated(listVideo);
      videoIdRef.current = videoSelected.id;
      titleRef.current = videoSelected?.title || findDefaultLocalized?.title;
      descriptionRef.current = videoSelected?.description || findDefaultLocalized?.description;
      excludeTitleRef.current = excludeTitle;
      excludeDescriptionRef.current = excludeDescription;
      listVideoTranslatedRef.current = listVideo;
    }
  }, [videoHistory, videoSelected]);

  useEffect(() => {
    const updateLanguageError = listVideoTranslated
      .filter((item) => {
        return !item.title ||
          item.title.length > NUMBER_CHARACTERS.title.max ||
          item.description.length > NUMBER_CHARACTERS.description.max
          ? true
          : false;
      })
      .map((item) => item.language);

    setListTranslationLanguageError(updateLanguageError);
  }, [listVideoTranslated]);

  const disabledNextBtn =
    loadingListYoutube ||
    loadingListLanguage ||
    loadingDetailVideo ||
    loadingVideoHistory ||
    loadingListYoutubeLanguage ||
    !listOptionsAccount.length;

  const handleToggleModalFinish = () => {
    setOpenModalFinish((prev) => !prev);
  };

  const handleTranslateText = () => {
    if (!accountSelected || !videoSelected || !translationLanguageSelected.length) return;

    const currentTranslationLanguage = listVideoTranslated.map((item) => item.language);

    const changeTranslationLanguage = translationLanguageSelected.filter((newLocale) => {
      const result = currentTranslationLanguage.find(
        (currentLocale) => currentLocale === newLocale
      );
      return result ? false : true;
    });

    const isChangeDefaultTitle = titleRef.current !== defaultTitle;
    const isChangeDefaultDescription = descriptionRef.current !== defaultDescription;

    const isChangeVideoId = videoIdRef.current !== videoSelected.id;

    const changeExcludeTitle =
      excludeTitleRef.current.length > excludeTitle.length
        ? excludeTitleRef.current.filter(
            (currentExcludeTitle) => !excludeTitle.includes(currentExcludeTitle)
          )
        : excludeTitle.filter(
            (newExcludeTitle) => !excludeTitleRef.current.includes(newExcludeTitle)
          );

    const changeExcludeDescription =
      excludeDescriptionRef.current.length > excludeDescription.length
        ? excludeDescriptionRef.current.filter(
            (currentExcludeDescription) => !excludeDescription.includes(currentExcludeDescription)
          )
        : excludeDescription.filter(
            (newExcludeDescription) =>
              !excludeDescriptionRef.current.includes(newExcludeDescription)
          );

    const isChangeExcludeTitle = changeExcludeTitle.length > 0;
    const isChangeExcludeDescription = changeExcludeDescription.length > 0;

    const isTranslateAllLocale =
      isChangeVideoId ||
      isChangeDefaultTitle ||
      isChangeDefaultDescription ||
      isChangeExcludeTitle ||
      isChangeExcludeDescription;

    const isTranslateChangeLocale =
      !isChangeVideoId &&
      !isChangeDefaultTitle &&
      !isChangeDefaultDescription &&
      !isChangeExcludeTitle &&
      !isChangeExcludeDescription &&
      changeTranslationLanguage.length > 0;

    const isTranslateVideo = isTranslateAllLocale || isTranslateChangeLocale;

    if (!isTranslateVideo) return;

    const languages = isTranslateAllLocale
      ? translationLanguageSelected
      : changeTranslationLanguage;

    setListTranslationLanguage(languages);

    const payload = {
      title: defaultTitle,
      description: defaultDescription,
      languages: languages,
      exclude_titles: excludeTitle,
      exclude_descriptions: excludeDescription,
    };

    translateText.mutate(payload, {
      onSuccess(response) {
        const filterVideoTranslated = languages.map((locale) => {
          const findVideo = response.data.find((item) => item.language === locale);
          return findVideo;
        });

        const excludeTranslationLanguage = translationLanguageSelected.filter(
          (locale) => !languages.includes(locale)
        );

        const excludeVideoTranslated = excludeTranslationLanguage.map((locale) => {
          const findVideo = listVideoTranslated.find((item) => item.language === locale);
          return findVideo;
        });

        const listVideo = isTranslateAllLocale
          ? filterVideoTranslated
          : [...excludeVideoTranslated, ...filterVideoTranslated];

        setListVideoTranslated(listVideo as ITranslateVideo[]);
        videoIdRef.current = videoSelected.id;
        titleRef.current = defaultTitle;
        descriptionRef.current = defaultDescription;
        excludeTitleRef.current = excludeTitle;
        excludeDescriptionRef.current = excludeDescription;
        listVideoTranslatedRef.current = listVideo as ITranslateVideo[];
      },
      onError() {
        setListTranslationLanguageError(languages);
      },
    });
  };

  const next = () => {
    if (disabledNextBtn) return;

    if (current === STEP_TRANSLATE.STEP_1 && !videoSelected) {
      notification.error({ message: t('translator.noVideo') });
      return;
    }
    if (current === STEP_TRANSLATE.STEP_2) {
      if (!originalLanguageSelected) {
        setOriginalLanguageError(t('validate.requiredField', { ns: 'common' }));
        return;
      }
      if (!translationLanguageSelected.length) {
        setTranslationLanguageError(t('validate.requiredField', { ns: 'common' }));
        return;
      }
      if (originalLanguageError || translationLanguageError) return;
    }
    if (current === STEP_TRANSLATE.STEP_3) {
      if (!defaultTitle) {
        setTitleError(t('validate.requiredField', { ns: 'common' }));
        return;
      }
      if (titleError) return;

      handleTranslateText();
    }
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const disabledPublishBtn =
    !accountSelected ||
    !videoSelected ||
    !listVideoTranslated.length ||
    !originalLanguageSelected ||
    !categoryId ||
    listTranslationLanguageError.length > 0;

  const handlePublish = () => {
    if (disabledPublishBtn) return;

    const translatedLocalizations = listVideoTranslated.map((item) => {
      return {
        lang: item.language,
        title: item.title,
        description: item.description,
      };
    });

    const localizations = [
      {
        lang: originalLanguageSelected,
        title: defaultTitle,
        description: defaultDescription,
      },
      ...translatedLocalizations,
    ];

    const payload = {
      youtube_account_id: Number(accountSelected),
      video_id: videoSelected.id,
      localizations: JSON.stringify(localizations),
      default_lang: originalLanguageSelected,
      category_id: categoryId,
      exclude_title: JSON.stringify(excludeTitle),
      exclude_description: JSON.stringify(excludeDescription),
    };

    publishVideo.mutate(payload, {
      onSuccess(response) {
        setCurrent(STEP_TRANSLATE.STEP_1);
        handleToggleModalFinish();

        const payload = { youtube_account_id: Number(accountSelected) };

        refreshVideoMutate.mutate(payload, {
          onSuccess() {
            const updateTable = dataTable.map((item) => {
              return item.id.videoId === response.data.id
                ? { ...item, snippet: response.data.snippet, is_push: true }
                : item;
            });
            setDataTable(updateTable);

            const findVideo = updateTable.find((item) => item.id.videoId === response.data.id);
            if (!findVideo) return;

            const updateVideoSelected = {
              key: findVideo.id.videoId,
              id: findVideo.id.videoId,
              picture: findVideo.snippet.thumbnails.default.url,
              channelId: findVideo.snippet.channelId,
              channelTitle: findVideo.snippet.channelTitle,
              title: findVideo.snippet.title,
              description: findVideo.snippet.description,
              date: findVideo.snippet.publishedAt,
              translated: findVideo?.is_push,
              captionized: false,
            };

            setVideoSelected(updateVideoSelected);
          },
        });
      },
      onError(error: any) {
        if (typeof error?.data?.message !== 'string' || !error?.data?.message) return;
        notification.error({ message: error.data.message });
      },
    });
  };

  const handleResetState = () => {
    setOriginalLanguageSelected('');
    setTranslationLanguageSelected([]);
    setOriginalLanguageError('');
    setTranslationLanguageError('');
    setDefaultTitle('');
    setDefaultDescription('');
    setExcludeTitle([]);
    setExcludeDescription([]);
    setTitleError('');
    setListVideoTranslated([]);
    setListTranslationLanguage([]);
    setListTranslationLanguageError([]);
    videoIdRef.current = '';
    titleRef.current = '';
    descriptionRef.current = '';
    excludeTitleRef.current = [];
    excludeDescriptionRef.current = [];
    listVideoTranslatedRef.current = [];
  };

  const handleChangeVideo = (record: any) => {
    if (videoSelected && record.id === videoSelected.id) return;
    setVideoSelected(record);
    handleResetState();
  };

  const handleRestoreTranslation = () => {
    const restoreListVideo = [...listVideoTranslatedRef.current];
    setListVideoTranslated(restoreListVideo);
    return restoreListVideo;
  };

  return {
    steps,
    current,
    prev,
    next,
    dataTable,
    totalResults,
    listOptionsAccount,
    accountSelected,
    videoSelected,
    setVideoSelected,
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
    refetchListYoutubeLanguage,
    refetchDetailVideo,
    refetchVideoHistory,
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
  };
};

export default useTranslateVideo;
