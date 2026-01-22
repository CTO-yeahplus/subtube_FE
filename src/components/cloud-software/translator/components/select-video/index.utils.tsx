import NoVideo from '@/assets/images/translator/no-video.png';
import { DATE_FORMAT, ROUTER_PATH } from '@/constants';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { IProps } from './';
import * as S from './index.styles';

export default function useSelectVideo(props: IProps) {
  const { t } = useTranslation(['cloud-software', 'common']);

  const router = useRouter();

  const {
    dataTable,
    listOptionsAccount,
    accountSelected,
    videoSelected,
    totalResults,
    handleChangeAccount,
    handleRefreshVideo,
    handleParamsChange,
    handleGetListVideo,
    handleChangeVideo,
    handleLoadMoreAccount,
  } = props;

  const isTranslateCaption = router.pathname === ROUTER_PATH.CAPTION;

  const statusColumns = isTranslateCaption
    ? [
        {
          title: t('translator.captionized'),
          width: '10%',
          dataIndex: 'captionized',
          key: 'captionized',
          render: (data: string) => {
            return data ? (
              <S.TextSuccess>{t('translator.yes')}</S.TextSuccess>
            ) : (
              <S.TextError>{t('translator.no')}</S.TextError>
            );
          },
        },
        {
          title: t('translator.translated'),
          width: '10%',
          dataIndex: 'translated',
          key: 'translated',
          render: (data: string) => {
            return data ? (
              <S.TextSuccess>{t('translator.yes')}</S.TextSuccess>
            ) : (
              <S.TextError>{t('translator.no')}</S.TextError>
            );
          },
        },
      ]
    : [
        {
          title: t('translator.translated'),
          width: '10%',
          dataIndex: 'translated',
          key: 'translated',
          render: (data: string) => {
            return data ? (
              <S.TextSuccess>{t('translator.yes')}</S.TextSuccess>
            ) : (
              <S.TextError>{t('translator.no')}</S.TextError>
            );
          },
        },
      ];

  const columns = [
    {
      title: t('translator.video'),
      width: '10%',
      dataIndex: 'picture',
      key: 'picture',
      render: (thumbnail: string) => {
        return (
          <S.Action>
            <S.Image src={thumbnail ?? NoVideo.src} alt={''} preview={false} />
          </S.Action>
        );
      },
    },
    {
      title: t('translator.title'),
      width: '20%',
      key: 'title',
      render: (data: any) => {
        return (
          <S.TableTitle>
            <Link href={`https://youtu.be/${data.id}}`} target="_blank">
              {data.title}
            </Link>
          </S.TableTitle>
        );
      },
    },
    {
      title: t('translator.description'),
      width: '40%',
      dataIndex: 'description',
      key: 'description',
      render: (data: string) => {
        return <S.TableDescription>{data}</S.TableDescription>;
      },
    },
    ...statusColumns,
    {
      title: t('translator.date'),
      width: '10%',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => {
        return dayjs(date).format(DATE_FORMAT.DAY_MONTH_YEAR);
      },
    },
  ];

  const tableData = useMemo(() => {
    return {
      data:
        dataTable
          .filter((item) => item.snippet)
          .map((video) => {
            return {
              key: video.id.videoId,
              id: video.id.videoId,
              picture: video.snippet.thumbnails.default.url,
              channelId: video.snippet.channelId,
              channelTitle: video.snippet.channelTitle,
              title: video.snippet.title,
              description: video.snippet.description,
              date: video.snippet.publishedAt,
              translated: video?.is_push,
              captionized: video?.is_push_caption,
            };
          }) || [],
    };
  }, [dataTable]);

  return {
    listOptionsAccount,
    accountSelected,
    videoSelected,
    columns,
    tableData,
    totalResults,
    handleChangeAccount,
    handleRefreshVideo,
    handleParamsChange,
    handleGetListVideo,
    handleChangeVideo,
    handleLoadMoreAccount,
  };
}
