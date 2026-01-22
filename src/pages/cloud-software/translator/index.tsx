import TranslatorComponent from '@/components/cloud-software/translator';
import RouteChangeWrapper from '@/components/modals/modal-route-change';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Translation = () => {
  return (
    <RouteChangeWrapper>
      <TranslatorComponent />
    </RouteChangeWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'cloud-software'])),
  },
});

Translation.layout = AdminLayout;

export default Translation;
