import { videosYoutube } from '@/api/cloud-software/youtube-accounts';
import { NUMBER_CHARACTERS, STEP_TRANSLATE } from '@/constants';
import {
  useGetListLanguage,
  useGetListYoutubeLanguage,
  useTranslateText,
} from '@/hooks/features/useTranslate';
import {
  useGetDetailVideoYoutube,
  useGetListYoutube, // ✅ 올바른 Hook import
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

// 🚨 [수정] 아래 줄이 있으면 절대 안 됩니다! 제거했습니다.
// import useYoutubeAccount from '../index.utils'; 

const useTranslateVideo = () => {
  const { t } = useTranslation(['cloud-software', 'common']);
  const { notification } = useFeedback();
  const pagination = usePagination();
  const dispatch = useAppDispatch();

  // 1. API 호출 (올바른 Hook 사용)
  const { 
    data: dataListYoutubeRaw, 
    isFetching: loadingListYoutube, 
    refetch: refetchListYoutube 
  } = useGetListYoutube(pagination.params, false);

  const dataPagination = (dataListYoutubeRaw?.data as any)?.pageInfo || {};

  const [dataListYoutube, setDataListYoutube] = useState<IListYoutubeAccount[]>([]);

  // 2. 데이터 탐색 로직 (강력한 파싱)
  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const result = await refetchListYoutube();
        const responseData = (result as any)?.data;
        
        let rawItems: any[] = [];
        const body = (responseData as any)?.data;

        // 데이터가 어디에 숨어있든 찾아냄
        if (body) {
           if (Array.isArray(body)) rawItems = body;
           else if (Array.isArray(body.items)) rawItems = body.items;
           else if (Array.isArray(body.entities)) rawItems = body.entities;
           else if (body.data && Array.isArray(body.data)) rawItems = body.data;
           else if (body.data?.items && Array.isArray(body.data.items)) rawItems = body.data.items;
           else if (body.data?.entities && Array.isArray(body.data.entities)) rawItems = body.data.entities;
        }

        // TypeORM [items, count] 배열 구조 대응
        if (rawItems.length === 2 && Array.isArray(rawItems[0]) && typeof rawItems[1] === 'number') {
            rawItems = rawItems[0];
        }

        if (isMounted && rawItems.length > 0) {
          console.log("✅ Accounts Found:", rawItems.length); // 콘솔에서 확인 가능
          const listAccount = [...dataListYoutube, ...rawItems];
          // 중복 제거
          const uniqueAccounts = Array.from(new Map(listAccount.map(item => [item.id, item])).values());
          
          const sortData = uniqueAccounts.sort((a, b) => {
            return (a.name_channel || '').toLowerCase() > (b.name_channel || '').toLowerCase() ? 1 : -1;
          });
          setDataListYoutube(sortData);
        } else {
            console.log("⚠️ No accounts found in data:", responseData);
        }
      } catch (error) {
        console.error("Failed to fetch youtube accounts", error);
      }
    })();
    return () => { isMounted = false; };
  }, [pagination.currentPage, refetchListYoutube]); 

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
    { key: STEP_TRANSLATE.STEP_1, title: t('translator.selectVideo') },
    { key: STEP_TRANSLATE.STEP_2, title: t('translator.languages') },
    { key: STEP_TRANSLATE.STEP_3, title: t('translator.customize') },
    { key: STEP_TRANSLATE.STEP_4, title: t('translator.reviewAndPublish') },
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

  // 3. API Hooks (accountSelected가 있어야 호출됨)
  const {
    data: dataListLanguage,
    refetch: refetchListLanguage,
    isFetching: loadingListLanguage,
  } = useGetListLanguage({ youtube_account_id: Number(accountSelected) }, false);

  const {
    data: dataListYoutubeLanguage,
    refetch: refetchListYoutubeLanguage,
    isFetching: loadingListYoutubeLanguage,
  } = useGetListYoutubeLanguage({ youtube_account_id: Number(accountSelected) }, false);

  const listOptionsAccount = useMemo(() => {
    return dataListYoutube?.map((item) => ({
      value: item.id.toString(),
      label: item.name_channel || 'No Name',
    })) ?? [];
  }, [dataListYoutube]);

  const listOptionsLanguage = useMemo(() => 
    dataListLanguage?.data?.map((item) => ({
      value: item.code,
      label: item.name,
    })) ?? [], [dataListLanguage]);

  const listOptionsYoutubeLanguage = useMemo(() => 
    dataListYoutubeLanguage?.data?.items?.map((item) => ({
      value: item.id,
      label: item.snippet?.name || item.id,
    })) ?? [], [dataListYoutubeLanguage]);

  // 자동 선택 로직
  useEffect(() => {
    if (listOptionsAccount.length > 0 && !accountSelected) {
      setAccountSelected(listOptionsAccount[0]?.value ?? '');
    }
  }, [listOptionsAccount, accountSelected]);

  useEffect(() => {
    // 🚨 dispatch 타입 에러 해결 (as any 추가)
    dispatch(setIsProgress(!!videoSelected) as any);
  }, [videoSelected, dispatch]);

  const refreshVideoMutate = useRefreshVideosMutate();

  const handleGetListVideo = useCallback(async () => {
    if (!accountSelected) return;

    try {
      let params: any = { youtube_account_id: Number(accountSelected) };

      if (pageToken) params = { ...params, page_token: pageToken };
      if (searchParams) params = { ...params, text: searchParams };

      const dataListVideo = await videosYoutube(params);

      // 데이터가 없으면 리턴
      if (!dataListVideo || !dataListVideo.data) {
        return; 
      }

      const nextPageToken = dataListVideo.data.nextPageToken ?? '';
      const totalResults = dataListVideo.data.pageInfo?.totalResults ?? 0;
      setPageToken(nextPageToken);
      setTotalResults(totalResults);

      const newItems = dataListVideo.data.items ?? [];
      setDataTable((prev) => [...prev, ...newItems]);

    } catch (error: any) {
      if (error?.response?.status !== 401 && typeof error?.data?.message === 'string') {
        notification.error({ message: error.data.message });
      }
    }
  }, [accountSelected, pageToken, searchParams, notification]);

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
    handleGetListVideo();
  }, [refreshVideo]); 

  // (아래부터는 기존 로직 동일)
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
    if (!videoSelected) return;
    setDefaultTitle(videoSelected.title || defaultLocalized?.title || '');
    setDefaultDescription(videoSelected.description || defaultLocalized?.description || '');
  }, [defaultLocalized, videoSelected]);

  useEffect(() => {
    if (videoSelected && videoSelected.translated && videoHistory?.data) {
      try {
        const historyData = videoHistory.data;
        const translateLocalizations: ILocalizations[] = historyData.localizations 
          ? JSON.parse(historyData.localizations) 
          : [];
        
        const defaultLanguage = historyData.default_lang;
        const excludeTitle = historyData.exclude_title ? JSON.parse(historyData.exclude_title) : [];
        const excludeDescription = historyData.exclude_description ? JSON.parse(historyData.exclude_description) : [];

        const findDefaultLocalized = translateLocalizations.find(
          (item) => item.lang === defaultLanguage
        );

        const filterLocalizations = translateLocalizations.filter(
          (item) => item.lang !== defaultLanguage
        );
        const translationLanguageSelected = filterLocalizations.map((item) => item.lang);

        const listVideo = filterLocalizations.map((item) => ({
          title: item.title,
          description: item.description,
          language: item.lang,
        }));

        setTranslationLanguageSelected(translationLanguageSelected);
        setExcludeTitle(excludeTitle);
        setExcludeDescription(excludeDescription);
        setListVideoTranslated(listVideo);
        
        videoIdRef.current = videoSelected.id;
        titleRef.current = videoSelected.title || findDefaultLocalized?.title || '';
        descriptionRef.current = videoSelected.description || findDefaultLocalized?.description || '';
        excludeTitleRef.current = excludeTitle;
        excludeDescriptionRef.current = excludeDescription;
        listVideoTranslatedRef.current = listVideo;
      } catch (e) {
        console.error("Error parsing video history", e);
      }
    }
  }, [videoHistory, videoSelected]);

  useEffect(() => {
    const updateLanguageError = listVideoTranslated
      .filter((item) => {
        return !item.title ||
          item.title.length > NUMBER_CHARACTERS.title.max ||
          item.description.length > NUMBER_CHARACTERS.description.max;
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
  
  const disabledPublishBtn =
    !accountSelected ||
    !videoSelected ||
    !listVideoTranslated.length ||
    !originalLanguageSelected ||
    !categoryId ||
    listTranslationLanguageError.length > 0;

  const handleToggleModalFinish = () => {
    setOpenModalFinish((prev) => !prev);
  };

  const handleTranslateText = () => {
    if (!accountSelected || !videoSelected || !translationLanguageSelected.length) return;
    const currentTranslationLanguage = listVideoTranslated.map((item) => item.language);
    const changeTranslationLanguage = translationLanguageSelected.filter((newLocale) => !currentTranslationLanguage.includes(newLocale));

    const isChangeDefaultTitle = titleRef.current !== defaultTitle;
    const isChangeDefaultDescription = descriptionRef.current !== defaultDescription;
    const isChangeVideoId = videoIdRef.current !== videoSelected.id;

    const changeExcludeTitle = excludeTitleRef.current.length > excludeTitle.length
      ? excludeTitleRef.current.filter(t => !excludeTitle.includes(t))
      : excludeTitle.filter(t => !excludeTitleRef.current.includes(t));

    const changeExcludeDescription = excludeDescriptionRef.current.length > excludeDescription.length
      ? excludeDescriptionRef.current.filter(d => !excludeDescription.includes(d))
      : excludeDescription.filter(d => !excludeDescriptionRef.current.includes(d));

    const isChangeExcludeTitle = changeExcludeTitle.length > 0;
    const isChangeExcludeDescription = changeExcludeDescription.length > 0;

    const isTranslateAllLocale = isChangeVideoId || isChangeDefaultTitle || isChangeDefaultDescription || isChangeExcludeTitle || isChangeExcludeDescription;
    const isTranslateChangeLocale = !isChangeVideoId && !isChangeDefaultTitle && !isChangeDefaultDescription && !isChangeExcludeTitle && !isChangeExcludeDescription && changeTranslationLanguage.length > 0;
    const isTranslateVideo = isTranslateAllLocale || isTranslateChangeLocale;

    if (!isTranslateVideo) return;

    const languages = isTranslateAllLocale ? translationLanguageSelected : changeTranslationLanguage;

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
        if (!response?.data) return;

        const filterVideoTranslated = languages.map((locale) => {
          return response.data.find((item) => item.language === locale);
        }).filter(item => item !== undefined);

        const excludeTranslationLanguage = translationLanguageSelected.filter(
          (locale) => !languages.includes(locale)
        );

        const excludeVideoTranslated = excludeTranslationLanguage.map((locale) => {
          return listVideoTranslated.find((item) => item.language === locale);
        }).filter(item => item !== undefined);

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

  const handlePublish = () => {
    if (disabledPublishBtn) return;
    const translatedLocalizations = listVideoTranslated.map((item) => ({
      lang: item.language,
      title: item.title,
      description: item.description,
    }));
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
        if (!response?.data) return;
        setCurrent(STEP_TRANSLATE.STEP_1);
        handleToggleModalFinish();
        
        const refreshPayload = { youtube_account_id: Number(accountSelected) };
        refreshVideoMutate.mutate(refreshPayload, {
          onSuccess() {
            const updateTable = dataTable.map((item) => {
              return item.id.videoId === response.data.id
                ? { ...item, snippet: response.data.snippet, is_push: true }
                : item;
            });
            setDataTable(updateTable);
            setVideoSelected(null);
          },
        });
      },
      onError(error: any) {
        const msg = error?.data?.message || 'Failed to publish video';
        if (typeof msg === 'string') notification.error({ message: msg });
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