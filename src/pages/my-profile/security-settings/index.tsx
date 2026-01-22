import ContainerWrapper from '@/components/common/container-wrapper';
import SecuritySetting from '@/components/my-profile/security-settings';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const SecuritySettingPage = () => {
  return (
    <ContainerWrapper>
      <SecuritySetting />
    </ContainerWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, [
      'common',
      'my-profile',
      'cloud-software',
    ])),
  },
});

SecuritySettingPage.layout = AdminLayout;

export default SecuritySettingPage;
