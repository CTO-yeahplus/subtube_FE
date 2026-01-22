// ----- START: CONNECT ------

export interface IConnectYoutube {
  id?: any;
}

export interface IRefreshTotalVideo {
  id: string | number;
}

export interface IDisconnectYoutube {
  id: string | number;
}

export interface IListYoutubeAccount {
  id: string;
  email: string;
  name_channel: string;
  picture: string;
  total_video: number;
  user_id: string;
}

export interface IConnectYoutubeCallback {
  state?: string;
  code?: string;
  scope?: string;
  authuser?: string;
  hd?: string;
  prompt?: string;
  enabled?: boolean;
}

export interface IConnectYoutubeVideos {
  text?: string;
  youtube_account_id: number;
  page_token?: string;
  limit?: string;
}

export interface IYoutubeDetailVideo {
  video_id: string;
  youtube_account_id: number;
}

export interface ILocalizations {
  lang: string;
  title: string;
  description: string;
}

export interface ISnippetVideo {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultLanguage?: string;
  defaultAudioLanguage?: string;
  title: string;
  description: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  publishedAt: string;
  thumbnails: IThumbnail;
}

export interface ITransVideoYoutube {
  video_id: string;
  localizations: string;
  youtube_account_id: number;
  default_lang: string;
  category_id: string;
}

export interface ITransVideoResponse {
  etag: string;
  id: string;
  kind: string;
  localizations: {
    [key: string]: { title: string; description: string };
  };
  snippet: ISnippetVideo;
}

// ----- END: CONNECT ------

export interface IListLanguageRequest {
  youtube_account_id: number;
}

export interface IListYoutubeLanguageResponse {
  kind: string;
  etag: string;
  items: {
    kind: string;
    etag: string;
    id: string;
    snippet: {
      hl: string;
      name: string;
    };
  }[];
}

export interface IListLanguage {
  code: string;
  name: string;
}

export interface ITranslateVideo {
  title: string;
  description: string;
  language: string;
}

export interface ItranslateTextRequest {
  title: string;
  description: string;
  languages: string[];
  exclude_titles: string[];
  exclude_descriptions: string[];
}

export interface IRefreshVideo {
  youtube_account_id: number;
}

export interface IVideoHistoryResponse {
  id: number;
  user_id: number;
  video_id: string;
  youtube_account_id: number;
  localizations: string;
  default_lang: string;
  category_id: string;
  exclude_title: string;
  exclude_description: string;
}

export interface IThumbnail {
  default: {
    width: number;
    height: number;
    url: string;
  };
}
export interface IVideoYoutube {
  kind: string;
  etag: string;
  id: { kind: string; videoId: string };
  is_push: boolean;
  is_push_caption: boolean;
  snippet: {
    channelId: string;
    channelTitle: string;
    title: string;
    description: string;
    liveBroadcastContent: string;
    publishTime?: string;
    publishedAt: string;
    thumbnails: IThumbnail;
  };
}

export interface IListVideoByAccount {
  etag: string;
  items: IVideoYoutube[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
}

export interface IDetailVideoYoutube {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippetVideo;
}

export interface IGetCaptionByVideoRequest {
  youtube_account_id: number | string;
  video_id: string;
}

export interface IGetDetailCaptionRequest {
  youtube_account_id: number | string;
  video_id: string;
  default_lang: string;
  original_lang: string;
}

export interface ICaptionByVideo {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    videoId: string;
    lastUpdated: string;
    trackKind: string;
    language: 'en' | string;
    name: string;
    audioTrackType: string;
    isCC: boolean;
    isLarge: boolean;
    isEasyReader: boolean;
    isDraft: boolean;
    isAutoSynced: boolean;
    status: boolean;
  };
}

export interface ICaptionDetail {
  begin: string;
  end: string;
  text: string;
}

export interface IPublishCaptionRequest {
  youtube_account_id: number | string;
  video_id: string;
  content: string;
  lang: string;
  exclude_text: string;
  is_default_lang: boolean;
}

export interface ITranslateCaptionRequest {
  captions: ICaptionDetail[];
  languages: string[];
  exclude_captions: string[];
}

export interface ITranslateCaptionResponse {
  content: ICaptionDetail[];
  lang: string;
}

export interface IGetCaptionPushHistoryRequest {
  youtube_account_id: string | number;
  video_id: string;
}

export interface IGetCaptionPushHistoryResponse {
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  id: number;
  user_id: number;
  video_id: string;
  youtube_account_id: number;
  content: string;
  default_lang: string;
  exclude_text: string | null;
}

export interface ITotalVideoInfo {
  total_translated_Caption: number;
  total_translated_video: number;
  total_video: number;
  total_account_youtube: number;
}
