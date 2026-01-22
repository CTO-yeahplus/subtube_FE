import {
  usePublishCaptionMutation,
  useTranslateCaptionMutation,
} from '@/hooks/features/useCaptionize';
import { useFeedback } from '@/hooks/useFeedback';
import { ICaptionDetail } from '@/interfaces/cloud-software';
import { useState } from 'react';

export const usePublishCaption = () => {
  const publishCaption = usePublishCaptionMutation();
  const [isPending, setIsPending] = useState<boolean>(false);
  const { notification } = useFeedback();

  const onPublish = async (
    {
      video_id,
      youtube_account_id,
      content,
      exclude_text,
      defaultLang,
    }: {
      video_id: string;
      youtube_account_id: string;
      content: { lang: string; content: ICaptionDetail[] }[];
      defaultLang: string;
      exclude_text: string;
    },
    { onSuccess }: { onSuccess: (response: { id: string | number }) => void }
  ) => {
    setIsPending(true);
    try {
      for (const contentItem of content) {
        const payload = {
          youtube_account_id,
          video_id,
          lang: contentItem.lang,
          content: JSON.stringify(contentItem.content),
          exclude_text: exclude_text,
          is_default_lang: defaultLang === contentItem.lang,
        };
        await publishCaption.mutateAsync(payload);
      }
      setIsPending(false);
      onSuccess({ id: video_id });
    } catch (error: any) {
      setIsPending(false);
      if (typeof error?.data?.message !== 'string' || !error?.data?.message) return;
      notification.error({ message: error.data.message });
    }
  };

  return {
    onPublish,
    isPending,
  };
};

export const useTransCaption = () => {
  const translateCaption = useTranslateCaptionMutation();
  const [isPending, setIsPending] = useState<boolean>(false);

  const onTranslate = async (
    {
      languages,
      exclude_captions,
      captions,
    }: {
      languages: string[];
      exclude_captions: string[];
      captions: ICaptionDetail[];
    },
    {
      onSuccess,
      onError,
    }: {
      onSuccess: (response: { lang: string; content: ICaptionDetail[] }[]) => void;
      onError: () => void;
    }
  ) => {
    const result = [];
    setIsPending(true);
    try {
      for (const lang of languages) {
        const response = await translateCaption.mutateAsync({
          languages: [lang],
          exclude_captions: exclude_captions,
          captions: captions,
        });
        result.push(...response.data);
      }
      onSuccess(result);
      setIsPending(false);
    } catch (err) {
      onError();
      setIsPending(false);
    }
  };
  return {
    onTranslate,
    isPending,
  };
};
