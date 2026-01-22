import ContainerWrapper from '@/components/common/container-wrapper';
import Payment from '@/components/my-profile/payments';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const PaymentPage = () => {
  return (
    <ContainerWrapper>
      <Payment />
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

PaymentPage.layout = AdminLayout;

export default PaymentPage;
