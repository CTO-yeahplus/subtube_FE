import ContainerWrapper from '@/components/common/container-wrapper';
import PersonalInfo from '@/components/my-profile/pesonal-info';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const PersonalInfoPage = () => {
  return (
    <ContainerWrapper>
      <PersonalInfo />
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

PersonalInfoPage.layout = AdminLayout;

export default PersonalInfoPage;
