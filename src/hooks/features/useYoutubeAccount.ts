import {
  callbackYoutube,
  connectYoutube,
  deleteYoutube,
  detailVideosYoutube,
  getListYoutube,
  getTotalVideoInfo,
  getVideoHistory,
  publishVideoYoutube,
  refreshTotalVideosYoutube,
  refreshVideosYoutube,
  videosYoutube,
} from '@/api/cloud-software/youtube-accounts';
import {
  IConnectYoutubeCallback,
  IConnectYoutubeVideos,
  IYoutubeDetailVideo,
} from '@/interfaces/cloud-software';

import useAppMutation, { AppMutationOptions } from '../useAppMutation';
import useAppQuery from '../useAppQuery';

export const useConnectYoutube = (options?: AppMutationOptions) =>
  useAppMutation(connectYoutube, {
    useAppMutationProps: options,
  });

export const useRefreshTotalVideo = (options?: AppMutationOptions) =>
  useAppMutation(
    refreshTotalVideosYoutube,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const useGetListYoutube = (params: any, enabled?: boolean) =>
  useAppQuery({
    queryKey: ['list-youtube', params],
    queryFn: () => getListYoutube(params),
    enabled: enabled ?? true,
  });

export const useCallbackYoutube = (params: IConnectYoutubeCallback, enabled: boolean) =>
  useAppQuery({
    queryKey: ['callback-youtube', params, enabled],
    queryFn: () => callbackYoutube(params),
    enabled,
  });

export const useDeleteYoutubeMutate = (options?: AppMutationOptions) =>
  useAppMutation(deleteYoutube, {
    useAppMutationProps: options,
  });

export const useGetVideosYoutube = (params: IConnectYoutubeVideos) =>
  useAppQuery({
    queryKey: ['videos-youtube', params],
    queryFn: () => videosYoutube(params),
  });

export const useGetDetailVideoYoutube = (params: IYoutubeDetailVideo, enabled: boolean) =>
  useAppQuery({
    queryKey: ['detail-video', params],
    queryFn: () => detailVideosYoutube(params),
    enabled,
  });

export const usePublishVideoMutate = (options?: AppMutationOptions) =>
  useAppMutation(
    publishVideoYoutube,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const useRefreshVideosMutate = (options?: AppMutationOptions) =>
  useAppMutation(refreshVideosYoutube, {
    useAppMutationProps: options,
  });

export const useGetVideoHistory = (params: IYoutubeDetailVideo, enabled: boolean) =>
  useAppQuery({
    queryKey: ['video-history', params],
    queryFn: () => getVideoHistory(params),
    enabled,
  });

export const useGetTotalVideoInfo = () =>
  useAppQuery({
    queryKey: ['total-video'],
    queryFn: () => getTotalVideoInfo(),
    gcTime: 0,
  });
