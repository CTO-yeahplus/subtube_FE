import YoutubeAccountComponent from '@/components/cloud-software/youtube-account';
import ContainerWrapper from '@/components/common/container-wrapper';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const YoutubeAccount = () => {
  return (
    <ContainerWrapper>
      <YoutubeAccountComponent />
    </ContainerWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'cloud-software'])),
  },
});

YoutubeAccount.layout = AdminLayout;

export default YoutubeAccount;
