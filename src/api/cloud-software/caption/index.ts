import { request } from '@/api/request';
import {
  ICaptionByVideo,
  ICaptionDetail,
  IGetCaptionByVideoRequest,
  IGetCaptionPushHistoryRequest,
  IGetCaptionPushHistoryResponse,
  IGetDetailCaptionRequest,
  IPublishCaptionRequest,
  ITranslateCaptionRequest,
} from '@/interfaces/cloud-software';

export const getCaptionByVideo = (params: IGetCaptionByVideoRequest) =>
  request.get<IGetCaptionByVideoRequest, { data: ICaptionByVideo[] }>(
    '/youtube/captions-by-video',
    params
  );

export const getCaptionDetail = (params: IGetDetailCaptionRequest) =>
  request.get<IGetCaptionByVideoRequest, { data: ICaptionDetail[] }>(
    '/youtube/detail-caption',
    params
  );

export const translateCaption = (body: ITranslateCaptionRequest) =>
  request.post<ITranslateCaptionRequest, { data: { lang: string; content: ICaptionDetail[] }[] }>(
    '/translate/translate-text-caption',
    body
  );

export const publishCaption = (body: IPublishCaptionRequest) =>
  request.post<IPublishCaptionRequest, { data: any }>('/youtube/translation-caption', body);

export const getCaptionPushHistory = (params: IGetCaptionPushHistoryRequest) =>
  request.get<IGetCaptionPushHistoryRequest, { data: IGetCaptionPushHistoryResponse }>(
    '/youtube/caption-push-history',
    params
  );
