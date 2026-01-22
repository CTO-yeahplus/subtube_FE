import IconSuccess from '@/assets/images/svg/icon-check-circle.svg';
import { DEFAULT_LOCALE, ROUTER_PATH } from '@/constants';
import AuthLayout from '@/layouts/auth-layout';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const VerifyRegister = () => {
  const { t } = useTranslation(['auth', 'common']);

  const router = useRouter();

  return (
    <Auth.FormWrapper>
      <Auth.VerifyWrapper>
        <Auth.IconVerify>
          <IconSuccess />
        </Auth.IconVerify>
        <Auth.FormTitle>{t('verify.allSet')}</Auth.FormTitle>
        <Auth.DescriptionVerify>{t('verify.accountActivated')}</Auth.DescriptionVerify>
        <Auth.SubmitButton type="primary" onClick={() => router.push(ROUTER_PATH.LOGIN)}>
          {t('verify.goToLogin')}
        </Auth.SubmitButton>
      </Auth.VerifyWrapper>
    </Auth.FormWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['auth', 'common'])),
    },
  };
};

VerifyRegister.layout = AuthLayout;
export default VerifyRegister;
