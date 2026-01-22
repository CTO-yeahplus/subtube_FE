import { DEFAULT_LOCALE } from '@/constants';
import AuthLayout from '@/layouts/auth-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';

// import { useEffect } from 'react';

const YoutubeCallback = () => {
  // useEffect(() => {
  //   const handleMessage = (event: any) => {
  //     if (event.origin !== window.location.origin) {
  //       return;
  //     }

  //     window.close();
  //   };

  // window.addEventListener('message', handleMessage);

  //   return () => {
  //     window.removeEventListener('message', handleMessage);
  //   };
  // });

  useEffect(() => {
    window.open('', '_self')?.close();
  }, []);

  return null;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'auth'])),
    },
  };
};

YoutubeCallback.layout = AuthLayout;
export default YoutubeCallback;
