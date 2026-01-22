import {
  getCaptionByVideo,
  getCaptionDetail,
  getCaptionPushHistory,
  publishCaption,
  translateCaption,
} from '@/api/cloud-software/caption';
import {
  IGetCaptionByVideoRequest,
  IGetCaptionPushHistoryRequest,
} from '@/interfaces/cloud-software';

import useAppMutation, { AppMutationOptions } from '../useAppMutation';
import useAppQuery from '../useAppQuery';

export const useGetCaptionByVideoMutation = (options?: AppMutationOptions) =>
  useAppMutation(getCaptionByVideo, {
    useAppMutationProps: options,
  });

export const useGetCaptionDetail = (options?: AppMutationOptions) =>
  useAppMutation(
    getCaptionDetail,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const useGetCaptionByVideoQuery = (params: IGetCaptionByVideoRequest) =>
  useAppQuery({
    queryKey: ['captionByVideo', params],
    queryFn: () => getCaptionByVideo(params),
  });

export const useTranslateCaptionMutation = (options?: AppMutationOptions) =>
  useAppMutation(
    translateCaption,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const usePublishCaptionMutation = (options?: AppMutationOptions) =>
  useAppMutation(
    publishCaption,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const useGetCaptionPushHistoryQuery = (params: IGetCaptionPushHistoryRequest) =>
  useAppQuery({
    queryKey: ['captionPushHistory', params],
    queryFn: () => getCaptionPushHistory(params),
  });

export const useGetCaptionPushHistoryMutation = (options?: AppMutationOptions) =>
  useAppMutation(getCaptionPushHistory, {
    useAppMutationProps: options,
  });
