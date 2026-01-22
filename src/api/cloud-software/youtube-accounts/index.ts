import { request } from '@/api/request';
import { ResponseData } from '@/interfaces';
import {
  IConnectYoutube,
  IConnectYoutubeCallback,
  IConnectYoutubeVideos,
  IDetailVideoYoutube,
  IListVideoByAccount,
  IListYoutubeAccount,
  IRefreshTotalVideo,
  IRefreshVideo,
  ITotalVideoInfo,
  ITransVideoResponse,
  ITransVideoYoutube,
  IVideoHistoryResponse,
  IYoutubeDetailVideo,
} from '@/interfaces/cloud-software';

export const connectYoutube = () => request.get<null, ResponseData<any>>('/youtube/connect');

export const getListYoutube = (params: IConnectYoutube) =>
  request.get<IConnectYoutube, ResponseData<{ entities: IListYoutubeAccount[] }>>(
    '/youtube/list',
    params
  );

export const refreshTotalVideosYoutube = (params: IRefreshTotalVideo) =>
  request.get<IRefreshTotalVideo, ResponseData<any>>(`/youtube/refresh-total-video/${params.id}`);

export const deleteYoutube = (body: IConnectYoutube) =>
  request.delete<IConnectYoutube, ResponseData<any>>(`/youtube/${body.id}`);

export const callbackYoutube = (params: IConnectYoutubeCallback) =>
  request.get<IConnectYoutubeCallback, ResponseData<any>>('/youtube/callback', params);

export const videosYoutube = (params: IConnectYoutubeVideos) =>
  request.get<IConnectYoutubeVideos, { data: IListVideoByAccount }>('/youtube/videos', params);

export const detailVideosYoutube = (params: IYoutubeDetailVideo) =>
  request.get<IYoutubeDetailVideo, { data: IDetailVideoYoutube }>('/youtube/detail-video', params);

export const publishVideoYoutube = (body: ITransVideoYoutube) =>
  request.post<ITransVideoYoutube, { data: ITransVideoResponse }>(
    '/youtube/translation-video',
    body
  );

export const refreshVideosYoutube = (body: IRefreshVideo) =>
  request.post<IRefreshVideo, ResponseData<any>>('/youtube/refresh-video', body);

export const getVideoHistory = (params: IYoutubeDetailVideo) =>
  request.get<IYoutubeDetailVideo, { data: IVideoHistoryResponse }>(
    '/youtube/video-push-history',
    params
  );

export const getTotalVideoInfo = () =>
  request.get<null, { data: ITotalVideoInfo }>('/youtube/total-translation-of-video');
