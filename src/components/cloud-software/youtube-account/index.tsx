import IconMenu from '@/assets/images/svg/cloud-software/icon-menu.svg';
import IconRefresh from '@/assets/images/svg/cloud-software/icon-refresh.svg';
import IconTotalVideos from '@/assets/images/svg/cloud-software/icon-total-video.svg';
import IconTransCaption from '@/assets/images/svg/cloud-software/icon-translated-captions.svg';
import IconTransVideo from '@/assets/images/svg/cloud-software/icon-translated-videos.svg';
import IconTrash from '@/assets/images/svg/cloud-software/icon-trash.svg';
import IconLimitOfConnect from '@/assets/images/svg/cloud-software/icon-x-limit-of-connect.svg';
import IconYTBAccount from '@/assets/images/svg/cloud-software/icon-ytb-account.svg';
import IconWarning from '@/assets/images/svg/icon-warning.svg';
import { BasePagination } from '@/components/common/base-pagination';
import { NoData } from '@/components/common/no-data';
import { useGetDetailUserQuery } from '@/hooks/features/useUsers';
import { useGetTotalVideoInfo } from '@/hooks/features/useYoutubeAccount';
import { useFeedback } from '@/hooks/useFeedback';
import { usePagination } from '@/hooks/usePagination';
import { LEVEL_USER, LEVEL_USER_LIMIT_CONNECT, User } from '@/interfaces';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import {
  setIsOpenPlanOverview,
  setIsOpenReminderPayment,
  setIsOpenRenewPlan,
} from '@/stores/progress/progress.slice';
import {
  _renderLevelUser,
  checkDateAfterExpired,
  checkDateBeforeExpired,
  checkExpiredDate,
} from '@/utils';
import cookies from '@/utils/cookie';
import { EventEmitter } from 'eventemitter3';
import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useMemo, useState } from 'react';

import CardStatistics from '../components/CardStatistics';
import useYoutubeAccount from '../index.utils';
import CurrentPlan from './current-plan';
import * as S from './index.styles';

declare global {
  interface Window {
    eventEmitter: EventEmitter;
  }
}

const YoutubeAccountComponent = () => {
  const { t } = useTranslation(['cloud-software', 'common']);
  const { notification } = useFeedback();
  const useDetail = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  // const eventEmitter = new EventEmitter();
  // let newWindow: any;
  const pagination = usePagination();
  const { refetch } = useGetDetailUserQuery(false);

  const {
    dataListYoutube,
    dataPagination,
    refetchListYoutube,
    mutateRefreshTotalVideo,
    mutateConnectYoutube,
    mutateDisconnectYoutube,
  } = useYoutubeAccount(pagination.params);

  const { data: totalVideoInfo, refetch: refetchTotalVideoInfo } = useGetTotalVideoInfo();

  const [itemId, setItemId] = useState<string>('');
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false);
  const [isOpenModalLimitConnect, setIsOpenModalLimitConnect] = useState<boolean>(false);
  const [isOpenPopOver, setIsOpenPopOver] = useState<boolean>(false);

  const handleDelete = () => {
    mutateDisconnectYoutube(
      { id: itemId },
      {
        onSuccess() {
          notification.error({ message: t('validate.MC6', { ns: 'common' }) });
          setIsOpenModalDelete(false);
          refetchListYoutube();
          refetchTotalVideoInfo();
        },
      }
    );
  };

  const getTypeUSer = useCallback(
    (user: User) => ({
      isExpired: user?.expire_date && checkExpiredDate(user.expire_date),
      isBeforeExpired: user?.expire_date && checkDateBeforeExpired(user.expire_date, 3),
      isNewUser: !user.level,
    }),
    []
  );

  useEffect(() => {
    if (
      useDetail &&
      getTypeUSer(useDetail).isExpired &&
      checkDateAfterExpired(useDetail.expire_date, 30)
    ) {
      dispatch(setIsOpenRenewPlan(true));
    }
  }, [useDetail, dispatch, getTypeUSer]);

  const isReminder = cookies.get('reminder') ?? 'false';

  const isCanceledPlan = useMemo(() => {
    return (
      !!useDetail?.changeRank &&
      !useDetail?.changeRank.change_rank &&
      !useDetail?.changeRank.keep_yt_account_id.length
    );
  }, [useDetail]);

  useEffect(() => {
    if (
      useDetail &&
      !isCanceledPlan &&
      !useDetail?.payment_before_deadline &&
      getTypeUSer(useDetail).isBeforeExpired
    ) {
      if (JSON.parse(isReminder)) return;
      dispatch(setIsOpenReminderPayment(true));
      cookies.set('reminder', 'true');
    }
  }, [useDetail, dispatch, getTypeUSer]);

  const handleToggleModalDelete = () => {
    setIsOpenModalDelete((prev) => !prev);
  };

  const openSmallWindow = (url: string) => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    const width = 500;
    const height = 500;
    const left = screenWidth / 2 - width / 2;
    const top = screenHeight / 2 - height / 2;
    const newWindow = window.open(
      url,
      '',
      `width=${width},height=${height},left=${left},top=${top}`
    );

    // if (newWindow) {
    //   newWindow.eventEmitter = eventEmitter;

    const checkWindowClosed = setInterval(() => {
      if (newWindow?.closed) {
        clearInterval(checkWindowClosed);
        refetchListYoutube();
        refetchTotalVideoInfo();

        try {
          const urlParams = new URLSearchParams(newWindow.location.search);
          const code = urlParams.get('code');
          const message = urlParams.get('message');

          if (code === '400') {
            notification.error({ message: message?.replaceAll('-', ' ') });
          } else {
            notification.success({ message: t('validate.MC5', { ns: 'common' }) });
          }
        } catch (err) {
          // notification.error({ message: 'Something wrong happens' });
        }
      }
    }, 1000);

    // }

    //   const checkWindowClosed = setInterval(() => {
    //     if (newWindow.closed) {
    //       clearInterval(checkWindowClosed);
    //       refetchListYoutube();
    //     }
    //   }, 1000);
    // }

    // setInterval(() => {
    //   console.log(newWindow?.location.href);
    //   // if (newWindow.closed) {
    //   //   clearInterval(checkWindowClosed);
    //   //   refetchListYoutube();
    //   // }
    // }, 1000);
  };

  // const closeChildWindow = () => {
  //   if (newWindow && !newWindow.closed) {
  //     newWindow.postMessage('close', 'close');
  //   }
  // };

  // setTimeout(closeChildWindow, 5000);

  const handleAddAccount = async () => {
    if (useDetail && checkExpiredDate(useDetail.expire_date)) {
      const result = await refetch();
      const userData = result?.data?.data as User;

      const { isExpired, isNewUser } = getTypeUSer(userData);
      if (isNewUser) {
        dispatch(setIsOpenPlanOverview(true));
        return;
      }
      if (isExpired) {
        if (checkDateAfterExpired(userData.expire_date, 30)) {
          dispatch(setIsOpenRenewPlan(true));
          return;
        } else {
          dispatch(setIsOpenPlanOverview(true));
          return;
        }
      }
    }

    mutateConnectYoutube(null, {
      onSuccess(res: any) {
        openSmallWindow(res.data);
      },
    });
  };

  const handleReachOfLimitConnect = () => {
    const level = useDetail?.level?.toUpperCase();
    let limitConnect;
    switch (level) {
      case undefined:
        dispatch(setIsOpenPlanOverview(true));
        return;
      case LEVEL_USER.BRONZE:
        limitConnect = LEVEL_USER_LIMIT_CONNECT.BRONZE;
        break;
      case LEVEL_USER.SILVER:
        limitConnect = LEVEL_USER_LIMIT_CONNECT.SILVER;
        break;
      case LEVEL_USER.GOLD:
        return handleAddAccount();
    }
    return dataListYoutube?.length === limitConnect
      ? setIsOpenModalLimitConnect(true)
      : handleAddAccount();
  };

  const cardStatics = [
    {
      id: 1,
      count: totalVideoInfo?.data?.total_account_youtube ?? 0,
      title: t('youtube.youtube-accounts'),
      backgroundColor: '#369FFF',
      boxShadowColor: 'rgba(54, 159, 255, 0.5)',
      icon: <IconYTBAccount />,
    },
    {
      id: 2,
      count: totalVideoInfo?.data?.total_video ?? 0,
      title: t('youtube.total-videos'),
      backgroundColor: '#FF993A',
      boxShadowColor: 'rgba(255, 153, 58, 0.50)',
      icon: <IconTotalVideos />,
    },
    {
      id: 3,
      count: totalVideoInfo?.data?.total_translated_video ?? 0,
      title: t('youtube.translated-videos'),
      backgroundColor: '#8AC53E',
      boxShadowColor: 'rgba(138, 197, 62, 0.50)',
      icon: <IconTransVideo />,
      positionIcon: false,
    },
    {
      id: 4,
      count: totalVideoInfo?.data?.total_translated_Caption ?? 0,
      title: t('youtube.translated-captions'),
      backgroundColor: '#FFD143',
      boxShadowColor: 'rgba(255, 209, 67, 0.50)',
      icon: <IconTransCaption />,
      positionIcon: false,
    },
  ];

  return (
    <S.Wrapper>
      <S.ContainerTitle>
        <S.ContainerTitleLeft>
          <S.Title>{t('youtube.youtube-account')}</S.Title>
          <S.SubTitle>{t('youtube.manage-and-add-your-youtube-accounts')}</S.SubTitle>
        </S.ContainerTitleLeft>
        <CurrentPlan />
      </S.ContainerTitle>
      <S.ContainerCard>
        {cardStatics &&
          cardStatics.length > 0 &&
          cardStatics.map((el) => (
            <CardStatistics
              key={el.id}
              count={el.count}
              title={el.title}
              backgroundColor={el.backgroundColor}
              boxShadowColor={el.boxShadowColor}
              icon={el.icon}
              positionIcon={el.positionIcon}
            />
          ))}
      </S.ContainerCard>
      <S.ContainerYourAccount>
        <S.WrapperAccount>
          <S.AccountTitle>{t('youtube.your-youtube-accounts')}</S.AccountTitle>
          <S.AccountDesc>
            {dataListYoutube?.length > 1
              ? t('youtube.connected-accounts', {
                  count: dataListYoutube?.length,
                })
              : t('youtube.connected-account', {
                  count: dataListYoutube?.length,
                })}
          </S.AccountDesc>
        </S.WrapperAccount>

        <S.AddAccountButton
          type="primary"
          loading={false}
          onClick={() => handleReachOfLimitConnect()}
        >
          {t('youtube.add-account')}
        </S.AddAccountButton>
      </S.ContainerYourAccount>

      {dataListYoutube?.length > 0 ? (
        <S.ContainerChannel>
          {dataListYoutube?.map((item) => (
            <S.CardYoutubeChannel key={item.id}>
              <S.Avatar
                width={60}
                height={60}
                loader={() => item.picture ?? ''}
                src={item.picture ?? ''}
                alt="avatar"
              ></S.Avatar>
              <S.ChannelInfo>
                <S.ChannelTitle>{item?.name_channel}</S.ChannelTitle>
                <S.ChannelVideo>
                  {item.total_video}{' '}
                  {item.total_video > 1 ? t('youtube.videos') : t('youtube.video')}
                </S.ChannelVideo>
              </S.ChannelInfo>
              <S.Popover
                placement="bottom"
                trigger="click"
                open={item.id === itemId && isOpenPopOver}
                onOpenChange={() => {
                  setItemId(item.id);
                  setIsOpenPopOver(!isOpenPopOver);
                }}
                content={
                  <>
                    <S.MenuButton
                      onClick={async () => {
                        setIsOpenPopOver(false);
                        if (useDetail && checkExpiredDate(useDetail.expire_date)) {
                          const result = await refetch();
                          const userData = result?.data?.data as User;
                          if (getTypeUSer(userData).isExpired) {
                            if (checkDateAfterExpired(userData.expire_date, 30)) {
                              dispatch(setIsOpenRenewPlan(true));
                              return;
                            } else {
                              dispatch(setIsOpenPlanOverview(true));
                              return;
                            }
                          }
                        }

                        mutateRefreshTotalVideo(
                          {
                            id: item.id,
                          },
                          {
                            onSuccess() {
                              notification.success({
                                message: t('youtube.refresh-videos-successfully'),
                              });
                              refetchListYoutube();
                              refetchTotalVideoInfo();
                            },
                            onError(error: any) {
                              if (typeof error?.data?.message !== 'string' || !error?.data?.message)
                                return;
                              notification.error({ message: error.data.message });
                            },
                          }
                        );
                      }}
                    >
                      {t('youtube.refresh-videos')}
                      <IconRefresh />
                    </S.MenuButton>
                    <S.Divider />
                    <S.MenuButton
                      onClick={() => {
                        setIsOpenPopOver(false);
                        handleToggleModalDelete();
                        setItemId(item.id);
                      }}
                    >
                      {t('youtube.delete-account')}
                      <IconTrash />
                    </S.MenuButton>
                  </>
                }
              >
                <S.InfoButton>
                  <IconMenu />
                </S.InfoButton>
              </S.Popover>
            </S.CardYoutubeChannel>
          ))}
        </S.ContainerChannel>
      ) : (
        <NoData subText={t('tryAdd', { ns: 'common' })} titleSize="md" />
      )}
      <S.Pagination>
        {dataPagination && (
          <BasePagination
            current={pagination.currentPage}
            pageSize={pagination.LIMIT}
            onChange={pagination.onChange}
            total={dataPagination?.total ?? 0}
            hideOnSinglePage
          />
        )}
      </S.Pagination>
      {isOpenModalDelete && (
        <S.ModalDelete
          open={isOpenModalDelete}
          onCancel={handleToggleModalDelete}
          footer={false}
          closeIcon={false}
          centered
        >
          <S.ContainerModal>
            <S.ModalTitle>{t('youtube.delete-account')}</S.ModalTitle>
            <S.Icon>
              <IconWarning />
            </S.Icon>
            <S.ModalDesc>
              {t('youtube.delete-account-desc')}
              <br /> {t('youtube.permanently-deleted')}
            </S.ModalDesc>
            <S.ModalBtn>
              <S.Button danger type="primary" onClick={handleDelete}>
                {t('youtube.delete')}
              </S.Button>
              <S.Button onClick={handleToggleModalDelete}>{t('youtube.cancel')}</S.Button>
            </S.ModalBtn>
          </S.ContainerModal>
        </S.ModalDelete>
      )}

      {isOpenModalLimitConnect && (
        <S.ModalLimitConnect
          open={isOpenModalLimitConnect}
          onCancel={() => setIsOpenModalLimitConnect(false)}
          footer={false}
          closeIcon={false}
          width={690}
          centered
        >
          <S.ContainerModal>
            <S.ModalTitle>{t('youtube.limit-of-connection')}</S.ModalTitle>
            <S.Icon>
              <IconLimitOfConnect />
            </S.Icon>
            <div>
              <S.ModalDesc
                dangerouslySetInnerHTML={{
                  __html: t(
                    'youtube.your-current-plan-level',
                    _renderLevelUser(useDetail?.level || '')
                  ),
                }}
              ></S.ModalDesc>
              <S.ModalDesc>{t('youtube.upgrade-your-plan')}</S.ModalDesc>
            </div>
            <S.ModalBtn>
              <S.Button onClick={() => setIsOpenModalLimitConnect(false)}>
                {t('youtube.no-thanks')}
              </S.Button>
              <S.Button
                type="primary"
                onClick={() => {
                  setIsOpenModalLimitConnect(false);
                  dispatch(setIsOpenPlanOverview(true));
                }}
              >
                {t('youtube.upgrade')}
              </S.Button>
            </S.ModalBtn>
          </S.ContainerModal>
        </S.ModalLimitConnect>
      )}
    </S.Wrapper>
  );
};

export default YoutubeAccountComponent;
