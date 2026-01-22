import { request } from '@/api/request';
import {
  IListLanguage,
  IListLanguageRequest,
  IListYoutubeLanguageResponse,
  ITranslateVideo,
  ItranslateTextRequest,
} from '@/interfaces/cloud-software';

export const getListLanguage = (params: IListLanguageRequest) =>
  request.get<IListLanguageRequest, { data: IListLanguage[] }>('/translate/list-language', params);

export const translateText = (body: ItranslateTextRequest) =>
  request.post<ItranslateTextRequest, { data: ITranslateVideo[] }>(
    '/translate/translate-text',
    body
  );

export const getListYoutubeLanguage = (params: IListLanguageRequest) =>
  request.get<IListLanguageRequest, { data: IListYoutubeLanguageResponse }>(
    '/youtube/languages-youtube',
    params
  );
