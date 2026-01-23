// src/pages/index.tsx

// import DashBoard from '@/components/dashboard'; // 기존 코드 주석 처리
import LandingRenewal from '@/components/landing-renewal'; // ⭐️ 새로 만든 컴포넌트 Import
import { DEFAULT_LOCALE } from '@/constants';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DashBoardPage = () => {
  return <LandingRenewal />; // ⭐️ 교체 완료
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'dashboard'])),
    },
  };
};

export default DashBoardPage;