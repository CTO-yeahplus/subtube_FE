import VerifyError from '@/components/auth/verify-error';
import { DEFAULT_LOCALE } from '@/constants';
import AuthLayout from '@/layouts/auth-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const VerifyAccountError = () => {
  const { t } = useTranslation(['auth', 'common']);

  return <VerifyError title={t('verify.linkExpired')} description={t('verify.linkExpiredDesc')} />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['auth', 'common'])),
    },
  };
};

VerifyAccountError.layout = AuthLayout;
export default VerifyAccountError;
