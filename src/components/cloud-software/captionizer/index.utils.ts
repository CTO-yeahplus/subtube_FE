import { videosYoutube } from '@/api/cloud-software/youtube-accounts';
import { STEP_TRANSLATE } from '@/constants';
import {
  useGetCaptionDetail,
  useGetCaptionPushHistoryMutation,
} from '@/hooks/features/useCaptionize';
import { useGetListLanguage, useGetListYoutubeLanguage } from '@/hooks/features/useTranslate';
import {
  useGetDetailVideoYoutube,
  useRefreshVideosMutate,
  useGetListYoutube,
} from '@/hooks/features/useYoutubeAccount';
import { useFeedback } from '@/hooks/useFeedback';
import { usePagination } from '@/hooks/usePagination';
import { ICaptionDetail, IListYoutubeAccount, IVideoYoutube } from '@/interfaces/cloud-software';
import { useAppDispatch } from '@/stores/hooks';
import { setIsProgress } from '@/stores/progress/progress.slice';
import { htmlDecode } from '@/utils';
import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { usePublishCaption, useTransCaption } from './action-hook';

const useTranslateCaption = () => {
  const { t } = useTranslation(['cloud-software', 'common']);
  const { notification } = useFeedback();
  const pagination = usePagination();
  const dispatch = useAppDispatch();

  // 1. Hook 호출
  const { 
    data: dataListYoutubeRaw, 
    isFetching: loadingListYoutube, 
    refetch: refetchListYoutube 
  } = useGetListYoutube(pagination.params, false);

  const dataPagination = (dataListYoutubeRaw?.data as any)?.pageInfo;
  const [dataListYoutube, setDataListYoutube] = useState<IListYoutubeAccount[]>([]);

  // 2. 데이터 탐색 (401 방어)
  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const result = await refetchListYoutube();
        if (!result || !result.data) return;

        const responseData = (result as any).data;
        let rawItems: any[] = [];
        const body = (responseData as any)?.data;

        if (body) {
           if (Array.isArray(body)) rawItems = body;
           else if (Array.isArray(body.items)) rawItems = body.items;
           else if (Array.isArray(body.entities)) rawItems = body.entities;
           else if (body.data && Array.isArray(body.data)) rawItems = body.data;
        }

        if (rawItems.length === 2 && Array.isArray(rawItems[0]) && typeof rawItems[1] === 'number') {
            rawItems = rawItems[0];
        }

        if (isMounted && rawItems.length > 0) {
          const listAccount = [...dataListYoutube, ...rawItems];
          const uniqueAccounts = Array.from(new Map(listAccount.map(item => [item.id, item])).values());
          const sortData = uniqueAccounts.sort((a, b) => {
            return (a.name_channel || '').toLowerCase() > (b.name_channel || '').toLowerCase() ? 1 : -1;
          });
          setDataListYoutube(sortData);
        }
      } catch (error: any) {
         if (error?.response?.status !== 401) {
             console.error("Fetch error", error);
         }
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
  const [openModalFinish, setOpenModalFinish] = useState<boolean>(false);
  const [originalLanguageError, setOriginalLanguageError] = useState<string>('');
  const [translationLanguageError, setTranslationLanguageError] = useState<string>('');
  const [searchParams, setSearchParams] = useState<string>('');
  const [refreshVideo, setRefreshVideo] = useState<boolean>(false);
  const [defaultCaptions, setDefaultCaptions] = useState<ICaptionDetail[]>([]);
  const [excludeCaptions, setExcludeCaptions] = useState<string[]>([]);
  const [listVideoTranslated, setListVideoTranslated] = useState<{ lang: string; content: ICaptionDetail[]; }[]>([]);
  const [listTranslationLanguage, setListTranslationLanguage] = useState<string[]>([]);
  const [listTranslationLanguageError, setListTranslationLanguageError] = useState<string[]>([]);
  
  const videoIdRef = useRef<string>('');
  const excludeCaptionRef = useRef<string[]>([]);
  const captionRef = useRef<ICaptionDetail[]>([]);
  const listVideoTranslatedRef = useRef<{ lang: string; content: ICaptionDetail[] }[]>([]);

  const refreshVideoMutate = useRefreshVideosMutate();
  const publishCaption = usePublishCaption();
  const getCaptionPushHistory = useGetCaptionPushHistoryMutation();
  const translateCaption = useTransCaption();

  const {
    data: dataListLanguage,
    refetch: refetchListLanguage,
    isFetching: loadingListLanguage,
  } = useGetListLanguage({ youtube_account_id: Number(accountSelected) } as any, false);

  const {
    data: dataListYoutubeLanguage,
    refetch: refetchListYoutubeLanguage,
    isFetching: loadingListYoutubeLanguage,
  } = useGetListYoutubeLanguage({ youtube_account_id: Number(accountSelected) } as any, false);

  const { mutate: getCaptionDetailMutate, isPending: getCaptionDetailPending } = useGetCaptionDetail();

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

  useEffect(() => {
    if (listOptionsAccount.length > 0 && !accountSelected) {
      setAccountSelected(listOptionsAccount[0]?.value ?? '');
    }
  }, [listOptionsAccount, accountSelected]);

  useEffect(() => {
    dispatch(setIsProgress(!!videoSelected) as any);
  }, [videoSelected, dispatch]);

  const handleGetListVideo = useCallback(async () => {
    if (!accountSelected) return;

    try {
      let params: any = { youtube_account_id: Number(accountSelected) };

      if (pageToken) params = { ...params, page_token: pageToken };
      if (searchParams) params = { ...params, text: searchParams };

      const dataListVideo = await videosYoutube(params);
      
      if (!dataListVideo || !dataListVideo.data) return;

      const nextPageToken = dataListVideo.data.nextPageToken ?? '';
      const totalResults = dataListVideo.data.pageInfo?.totalResults ?? 0;
      setPageToken(nextPageToken);
      setTotalResults(totalResults);

      const items = dataListVideo.data.items ?? [];
      setDataTable((prev) => [...prev, ...items]);
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

  const defaultLanguage = detailVideo?.data?.snippet?.defaultAudioLanguage ?? 'en';

  useEffect(() => {
    if (!defaultLanguage) return;
    setOriginalLanguageSelected(defaultLanguage);
  }, [defaultLanguage, videoSelected]);

  const disabledNextBtn =
    loadingListYoutube ||
    loadingListLanguage ||
    loadingListYoutubeLanguage ||
    loadingDetailVideo ||
    getCaptionDetailPending ||
    !listOptionsAccount.length ||
    (current === STEP_TRANSLATE.STEP_3 && !defaultCaptions.length);

  const handleToggleModalFinish = () => {
    setOpenModalFinish((prev) => !prev);
  };

  // ✅ 순서 변경: 간단한 함수들을 위로 올려서 에러 방지
  const handleResetState = () => {
    setOriginalLanguageSelected('');
    setTranslationLanguageSelected([]);
    setOriginalLanguageError('');
    setTranslationLanguageError('');
    setExcludeCaptions([]);
    setDefaultCaptions([]);
    setListVideoTranslated([]);
    setListTranslationLanguage([]);
    setListTranslationLanguageError([]);
    videoIdRef.current = '';
    excludeCaptionRef.current = [];
    captionRef.current = [];
    listVideoTranslatedRef.current = [];
  };

  // ✅ 이제 여기서 에러가 나지 않을 것입니다.
  const handleChangeVideo = (record: any) => {
    if (videoSelected && record.id === videoSelected.id) return;
    setVideoSelected(record);
    handleResetState();
  };

  const handleClearCaption = () => {
    setDefaultCaptions([]);
    setExcludeCaptions([]);
  };

  const handleRestoreTranslation = () => {
    const restoreListVideo = JSON.parse(JSON.stringify(listVideoTranslatedRef.current));
    setListVideoTranslated(restoreListVideo);
    return restoreListVideo;
  };

  // 복잡한 함수들은 아래로 이동
  const handleTranslateText = () => {
    if (!accountSelected || !videoSelected || !translationLanguageSelected.length) return;
    const currentTranslationLanguage = listVideoTranslated.map((item) => item.lang);
    const changeTranslationLanguage = translationLanguageSelected.filter((newLocale) => {
      return !currentTranslationLanguage.includes(newLocale);
    });

    const isChangeDefaultCaptions = JSON.stringify(defaultCaptions) !== JSON.stringify(captionRef.current);
    const isChangeVideoId = videoIdRef.current !== videoSelected.id;
    const changeExcludeCaption = excludeCaptionRef.current.length > excludeCaptions.length
        ? excludeCaptionRef.current.filter(c => !excludeCaptions.includes(c))
        : excludeCaptions.filter(c => !excludeCaptionRef.current.includes(c));

    const isChangeExcludeCaption = changeExcludeCaption.length > 0;
    const isTranslateAllLocale = isChangeVideoId || isChangeDefaultCaptions || isChangeExcludeCaption;
    const isTranslateChangeLocale = !isChangeVideoId && !isChangeDefaultCaptions && !isChangeExcludeCaption && changeTranslationLanguage.length > 0;
    const isTranslateVideo = isTranslateAllLocale || isTranslateChangeLocale;

    if (!isTranslateVideo) return;

    const languages = isTranslateAllLocale ? translationLanguageSelected : changeTranslationLanguage;
    setListTranslationLanguage(languages);

    const parseDefaultCaptions = defaultCaptions.map((item) => ({ 
        ...item, 
        text: htmlDecode(item.text) ?? '' 
    }));

    translateCaption.onTranslate(
      {
        languages: languages,
        exclude_captions: excludeCaptions,
        captions: parseDefaultCaptions,
      },
      {
        onSuccess(response) {
          const filterVideoTranslated = languages.map((locale) => {
            return response.find((item: any) => item.lang === locale);
          }).filter(item => item !== undefined);

          const excludeVideoTranslated = translationLanguageSelected
            .filter(locale => !languages.includes(locale))
            .map(locale => listVideoTranslated.find(item => item.lang === locale))
            .filter(item => item !== undefined);

          const listVideo = isTranslateAllLocale
            ? filterVideoTranslated
            : [...excludeVideoTranslated, ...filterVideoTranslated];

          setListVideoTranslated(listVideo as any);
          videoIdRef.current = videoSelected.id;
          captionRef.current = defaultCaptions;
          excludeCaptionRef.current = excludeCaptions;
          listVideoTranslatedRef.current = JSON.parse(JSON.stringify(listVideo));
        },
        onError() {
          setListTranslationLanguageError(languages);
        },
      }
    );
  };

  const handleGetCaptionHistoryPush = () => {
    if (accountSelected && videoSelected?.id) {
      getCaptionPushHistory.mutate(
        {
          youtube_account_id: Number(accountSelected),
          video_id: videoSelected?.id,
        } as any, 
        {
          onSuccess(response) {
            if(!response?.data) return;
            let captions = [];
            try { captions = response.data.content ? JSON.parse(response.data.content) : []; } catch(e) {}
            
            const defaultLanguage = response.data.default_lang;
            const findCaptionDefaults = captions.find(
              (item: any) => item.lang === defaultLanguage
            );
            const otherCaptions = captions.filter(
              (item: any) => item.lang !== defaultLanguage
            );

            let excludes = [];
            try { excludes = response.data?.exclude_text ? JSON.parse(response.data?.exclude_text) : []; } catch(e) {}

            const translationLanguageSelected = otherCaptions.map((item: any) => item.lang);

            setTranslationLanguageSelected(translationLanguageSelected);
            setListVideoTranslated(otherCaptions);
            if(findCaptionDefaults) setDefaultCaptions(findCaptionDefaults.content);
            setExcludeCaptions(excludes);
            
            videoIdRef.current = videoSelected.id;
            listVideoTranslatedRef.current = JSON.parse(JSON.stringify(otherCaptions));
            excludeCaptionRef.current = JSON.parse(JSON.stringify(excludes));
            if(findCaptionDefaults) captionRef.current = JSON.parse(JSON.stringify(findCaptionDefaults.content));
          },
        }
      );
    }
  };

  const next = () => {
    if (disabledNextBtn) return;
    if (current === STEP_TRANSLATE.STEP_1) {
      if (!videoSelected) {
        notification.error({ message: t('translator.noVideo') });
        return;
      }
      handleGetCaptionHistoryPush();
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
    listTranslationLanguageError.length > 0;

  const handlePublish = () => {
    if (disabledPublishBtn) return;
    const isDuplicateDefaultLanguage = translationLanguageSelected.includes(defaultLanguage) || originalLanguageSelected === defaultLanguage;
    const content = [
      { lang: originalLanguageSelected, content: defaultCaptions },
      ...(!isDuplicateDefaultLanguage ? [{ lang: defaultLanguage, content: defaultCaptions }] : []),
      ...listVideoTranslated,
    ];

    publishCaption.onPublish(
      {
        video_id: videoSelected.id,
        youtube_account_id: Number(accountSelected),
        content: content,
        defaultLang: originalLanguageSelected,
        exclude_text: JSON.stringify(excludeCaptions),
      } as any, 
      {
        onSuccess(response) {
          setCurrent(STEP_TRANSLATE.STEP_1);
          handleToggleModalFinish();

          const payload = { youtube_account_id: Number(accountSelected) };
          refreshVideoMutate.mutate(payload, {
            onSuccess() {
              const updateTable = dataTable.map((item) => {
                return item.id.videoId === response.id ? { ...item, is_push_caption: true } : item;
              });
              setDataTable(updateTable);
              const findVideo = updateTable.find((item) => item.id.videoId === response.id);
              if (findVideo) {
                  setVideoSelected({
                    key: findVideo.id.videoId,
                    id: findVideo.id.videoId,
                    picture: findVideo.snippet.thumbnails.default.url,
                    channelId: findVideo.snippet.channelId,
                    channelTitle: findVideo.snippet.channelTitle,
                    title: findVideo.snippet.title,
                    description: findVideo.snippet.description,
                    date: findVideo.snippet.publishedAt,
                    translated: findVideo?.is_push,
                    captionized: true,
                  });
              }
            },
          });
        },
      }
    );
  };

  const onGetCaptionDetail = () => {
    return new Promise<ICaptionDetail[]>((resolve) => {
      if(originalLanguageSelected) {
        getCaptionDetailMutate(
          {
            youtube_account_id: Number(accountSelected),
            video_id: videoSelected.id,
            default_lang: defaultLanguage,
            original_lang: originalLanguageSelected,
          } as any, 
          {
            onSuccess(response) {
              setDefaultCaptions(response.data);
              resolve(response.data);
            },
            onError(error: any) {
               if (typeof error?.data?.message === 'string') {
                  notification.error({ message: error.data.message });
               }
            },
          }
        );
      }
    });
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
    openModalFinish,
    handleToggleModalFinish,
    disabledNextBtn,
    handlePublish,
    getCaptionDetailPending,
    onGetCaptionDetail,
    defaultCaptions,
    setDefaultCaptions,
    excludeCaptions,
    setExcludeCaptions,
    listVideoTranslated,
    setListVideoTranslated,
    loadingTranslate: translateCaption.isPending,
    listTranslationLanguage,
    listTranslationLanguageError,
    handleClearCaption,
    loadingPublish: publishCaption.isPending,
    disabledPublishBtn,
    handleRestoreTranslation,
    handleLoadMoreAccount,
  };
};

export default useTranslateCaption;