import VerifyError from '@/components/auth/verify-error';
import { DEFAULT_LOCALE } from '@/constants';
import AuthLayout from '@/layouts/auth-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const VerifyPasswordError = () => {
  const { t } = useTranslation(['auth', 'common']);

  return (
    <VerifyError title={t('newPass.linkExpired')} description={t('newPass.linkExpiredDesc')} />
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['auth', 'common'])),
    },
  };
};

VerifyPasswordError.layout = AuthLayout;
export default VerifyPasswordError;
