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
} from '@/hooks/features/useYoutubeAccount';
import { useFeedback } from '@/hooks/useFeedback';
import { usePagination } from '@/hooks/usePagination';
import { ICaptionDetail, IListYoutubeAccount, IVideoYoutube } from '@/interfaces/cloud-software';
import { useAppDispatch } from '@/stores/hooks';
import { setIsProgress } from '@/stores/progress/progress.slice';
import { htmlDecode } from '@/utils';
import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import useYoutubeAccount from '../index.utils';
import { usePublishCaption, useTransCaption } from './action-hook';

const useTranslateCaption = () => {
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
  }, [pagination.currentPage, dataListYoutube, refetchListYoutube]);

  const handleLoadMoreAccount = () => {
    const total = dataPagination?.total ?? 0;
    const hasMore = dataListYoutube.length > 0 && dataListYoutube.length < total;
    if (!loadingListYoutube && hasMore) {
      pagination.onChange(pagination.currentPage + 1);
    }
  };

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
  const [openModalFinish, setOpenModalFinish] = useState<boolean>(false);
  const [originalLanguageError, setOriginalLanguageError] = useState<string>('');
  const [translationLanguageError, setTranslationLanguageError] = useState<string>('');
  const [searchParams, setSearchParams] = useState<string>('');
  const [refreshVideo, setRefreshVideo] = useState<boolean>(false);
  const [defaultCaptions, setDefaultCaptions] = useState<ICaptionDetail[]>([]);
  const [excludeCaptions, setExcludeCaptions] = useState<string[]>([]);
  const [listVideoTranslated, setListVideoTranslated] = useState<
    {
      lang: string;
      content: ICaptionDetail[];
    }[]
  >([]);
  const [listTranslationLanguage, setListTranslationLanguage] = useState<string[]>([]);
  const [listTranslationLanguageError, setListTranslationLanguageError] = useState<string[]>([]);
  const videoIdRef = useRef<string>('');
  const excludeCaptionRef = useRef<string[]>([]);
  const captionRef = useRef<ICaptionDetail[]>([]);
  const listVideoTranslatedRef = useRef<{ lang: string; content: ICaptionDetail[] }[]>([]);

  const refreshVideoMutate = useRefreshVideosMutate();
  const publishCaption = usePublishCaption();
  const getCaptionPushHistory = useGetCaptionPushHistoryMutation();
  const dispatch = useAppDispatch();
  const translateCaption = useTransCaption();

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

  const { mutate: getCaptionDetailMutate, isPending: getCaptionDetailPending } =
    useGetCaptionDetail();

  const listOptionsAccount = useMemo(() => {
    return dataListYoutube
      ? dataListYoutube.map((item) => ({
          value: item.id.toString(),
          label: item.name_channel,
        }))
      : [];
  }, [dataListYoutube]);

  const listOptionsLanguage = dataListLanguage?.data
    ? dataListLanguage?.data?.map((item) => {
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
  }, [videoSelected, dispatch]);

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

      setDataTable((dataTable) => [...dataTable, ...dataListVideo.data.items]);
    } catch (error: any) {
      if (typeof error?.data?.message !== 'string' || !error?.data?.message) return;
      notification.error({ message: error.data.message });
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
  }, [accountSelected, searchParams, refreshVideo, handleGetListVideo]);

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

  const handleTranslateText = () => {
    if (!accountSelected || !videoSelected || !translationLanguageSelected.length) return;

    const currentTranslationLanguage = listVideoTranslated.map((item) => item.lang);

    const changeTranslationLanguage = translationLanguageSelected.filter((newLocale) => {
      const result = currentTranslationLanguage.find(
        (currentLocale) => currentLocale === newLocale
      );
      return result ? false : true;
    });

    const isChangeDefaultCaptions =
      JSON.stringify(defaultCaptions) !== JSON.stringify(captionRef.current);

    const isChangeVideoId = videoIdRef.current !== videoSelected.id;

    const changeExcludeCaption =
      excludeCaptionRef.current.length > excludeCaptions.length
        ? excludeCaptionRef.current.filter(
            (currentExclude) => !excludeCaptions.includes(currentExclude)
          )
        : excludeCaptions.filter((newExclude) => !excludeCaptionRef.current.includes(newExclude));

    const isChangeExcludeCaption = changeExcludeCaption.length > 0;

    const isTranslateAllLocale =
      isChangeVideoId || isChangeDefaultCaptions || isChangeExcludeCaption;

    const isTranslateChangeLocale =
      !isChangeVideoId &&
      !isChangeDefaultCaptions &&
      !isChangeExcludeCaption &&
      changeTranslationLanguage.length > 0;

    const isTranslateVideo = isTranslateAllLocale || isTranslateChangeLocale;

    if (!isTranslateVideo) return;

    const languages = isTranslateAllLocale
      ? translationLanguageSelected
      : changeTranslationLanguage;

    setListTranslationLanguage(languages);

    const parseDefaultCaptions = defaultCaptions.map((item) => {
      return { ...item, text: htmlDecode(item.text) ?? '' };
    });

    translateCaption.onTranslate(
      {
        languages: languages,
        exclude_captions: excludeCaptions,
        captions: parseDefaultCaptions,
      },
      {
        onSuccess(response) {
          const filterVideoTranslated = languages.map((locale) => {
            const findVideo = response.find(
              (item: { lang: string; content: ICaptionDetail[] }) => item.lang === locale
            );
            return findVideo;
          });
          const otherTranslationLanguage = translationLanguageSelected.filter(
            (locale) => !languages.includes(locale)
          );
          const excludeVideoTranslated = otherTranslationLanguage.map((locale) => {
            const findVideo = listVideoTranslated.find((item) => item.lang === locale);
            return findVideo;
          });
          const listVideo = isTranslateAllLocale
            ? filterVideoTranslated
            : [...excludeVideoTranslated, ...filterVideoTranslated];
          setListVideoTranslated(listVideo as { lang: string; content: ICaptionDetail[] }[]);
          videoIdRef.current = videoSelected.id;
          captionRef.current = defaultCaptions;
          excludeCaptionRef.current = excludeCaptions;
          listVideoTranslatedRef.current = JSON.parse(JSON.stringify(listVideo)) as {
            lang: string;
            content: ICaptionDetail[];
          }[];
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
          youtube_account_id: accountSelected,
          video_id: videoSelected?.id,
        },
        {
          onSuccess(response) {
            const captions = JSON.parse(response?.data?.content);
            const defaultLanguage = response?.data?.default_lang;

            const findCaptionDefaults = captions.find(
              (item: { lang: string; content: ICaptionDetail[] }) => item.lang === defaultLanguage
            );

            const otherCaptions = captions.filter(
              (item: { lang: string; content: ICaptionDetail[] }) => item.lang !== defaultLanguage
            );

            const excludes = response.data?.exclude_text
              ? JSON.parse(response.data?.exclude_text)
              : [];

            const translationLanguageSelected = otherCaptions.map((item: any) => item.lang);

            const listVideo = otherCaptions;

            setTranslationLanguageSelected(translationLanguageSelected);
            setListVideoTranslated(listVideo);
            findCaptionDefaults && setDefaultCaptions(findCaptionDefaults.content);
            setExcludeCaptions(excludes);
            videoIdRef.current = videoSelected.id;
            listVideoTranslatedRef.current = JSON.parse(JSON.stringify(listVideo));
            excludeCaptionRef.current = JSON.parse(JSON.stringify(excludes));
            captionRef.current = JSON.parse(JSON.stringify(findCaptionDefaults.content));
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

  const handleChangeVideo = (record: any) => {
    if (videoSelected && record.id === videoSelected.id) return;
    setVideoSelected(record);
    handleResetState();
  };

  const onGetCaptionDetail = () => {
    return new Promise<ICaptionDetail[]>((resolve) => {
      originalLanguageSelected &&
        getCaptionDetailMutate(
          {
            youtube_account_id: accountSelected,
            video_id: videoSelected.id,
            default_lang: defaultLanguage,
            original_lang: originalLanguageSelected,
          },
          {
            onSuccess(response) {
              setDefaultCaptions(response.data);
              resolve(response.data);
            },
            onError(error: any) {
              if (typeof error?.data?.message !== 'string' || !error?.data?.message) return;
              notification.error({ message: error.data.message });
            },
          }
        );
    });
  };

  const disabledPublishBtn =
    !accountSelected ||
    !videoSelected ||
    !listVideoTranslated.length ||
    !originalLanguageSelected ||
    listTranslationLanguageError.length > 0;

  const handlePublish = () => {
    if (disabledPublishBtn) return;

    const isDuplicateDefaultLanguage =
      translationLanguageSelected.includes(defaultLanguage) ||
      originalLanguageSelected === defaultLanguage;

    const content = [
      {
        lang: originalLanguageSelected,
        content: defaultCaptions,
      },
      ...(!isDuplicateDefaultLanguage ? [{ lang: defaultLanguage, content: defaultCaptions }] : []),
      ...listVideoTranslated,
    ];

    publishCaption.onPublish(
      {
        video_id: videoSelected.id,
        youtube_account_id: accountSelected,
        content: content,
        defaultLang: originalLanguageSelected,
        exclude_text: JSON.stringify(excludeCaptions),
      },
      {
        onSuccess(response) {
          setCurrent(STEP_TRANSLATE.STEP_1);
          handleToggleModalFinish();

          const payload = { youtube_account_id: Number(accountSelected) };

          refreshVideoMutate.mutate(payload, {
            onSuccess() {
              const updateTable = dataTable.map((item) => {
                return item.id.videoId === response.id
                  ? {
                      ...item,
                      is_push_caption: true,
                    }
                  : item;
              });
              setDataTable(updateTable);

              const findVideo = updateTable.find((item) => item.id.videoId === response.id);
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
                captionized: true,
              };

              setVideoSelected(updateVideoSelected);
            },
          });
        },
      }
    );
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
