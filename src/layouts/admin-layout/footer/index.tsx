import { DEFAULT_LOCALE } from '@/constants';
import cookies from '@/utils/cookie';
import { useTranslation } from 'next-i18next';
import React from 'react';

import * as S from './index.styles';

const MainFooter = () => {
  const { t } = useTranslation(['common']);

  const locale = cookies.get('locale') ?? DEFAULT_LOCALE;

  const handleClickTermsOfUse = () => {
    window.open(`/pdf/${locale}/terms-of-use.pdf`);
  };

  const handleClickPolicy = () => {
    window.open(`/pdf/${locale}/privacy-policy.pdf`);
  };

  return (
    <S.ContentFooter>
      <S.CompanyInfo>
        {t('footer.companyName', { ns: 'common' })} | {t('footer.owner', { ns: 'common' })}
      </S.CompanyInfo>
      <S.CompanyInfo>{t('footer.address', { ns: 'common' })}</S.CompanyInfo>
      <S.Reserved>
        <div>{t('footer.allRightsReserved', { ns: 'common' })}</div>
        <S.Copyright>
          <div>{t('footer.copyright', { ns: 'common' })}</div>
          <S.LinkUrl onClick={handleClickTermsOfUse}>
            {t('footer.termsOfUse', { ns: 'common' })}
          </S.LinkUrl>
          <S.LinkUrl onClick={handleClickPolicy}>
            {t('footer.privacyPolicy', { ns: 'common' })}
          </S.LinkUrl>
        </S.Copyright>
      </S.Reserved>
    </S.ContentFooter>
  );
};

export default MainFooter;
