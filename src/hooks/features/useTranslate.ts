import {
  getListLanguage,
  getListYoutubeLanguage,
  translateText,
} from '@/api/cloud-software/translate';
import { IListLanguageRequest } from '@/interfaces/cloud-software';

import useAppMutation, { AppMutationOptions } from '../useAppMutation';
import useAppQuery from '../useAppQuery';

export const useGetListLanguage = (params: IListLanguageRequest, enabled: boolean) =>
  useAppQuery({
    queryKey: ['list-language'],
    queryFn: () => getListLanguage(params),
    enabled,
  });

export const useTranslateText = (options?: AppMutationOptions) =>
  useAppMutation(translateText, {
    useAppMutationProps: options,
  });

export const useGetListYoutubeLanguage = (params: IListLanguageRequest, enabled: boolean) =>
  useAppQuery({
    queryKey: ['list-language-youtube'],
    queryFn: () => getListYoutubeLanguage(params),
    enabled,
  });
