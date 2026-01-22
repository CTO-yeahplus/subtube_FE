import DashBoard from '@/components/dashboard';
import { DEFAULT_LOCALE } from '@/constants';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DashBoardPage = () => {
  return <DashBoard />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'dashboard'])),
    },
  };
};

export default DashBoardPage;
