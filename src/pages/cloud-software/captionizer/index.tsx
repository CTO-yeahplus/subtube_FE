import CaptionComponent from '@/components/cloud-software/captionizer';
import RouteChangeWrapper from '@/components/modals/modal-route-change';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const Captionizer = () => {
  return (
    <RouteChangeWrapper>
      <CaptionComponent />
    </RouteChangeWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'cloud-software'])),
  },
});

Captionizer.layout = AdminLayout;

export default Captionizer;
