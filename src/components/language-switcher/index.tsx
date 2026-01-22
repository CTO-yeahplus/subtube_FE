import IconKorea from '@/assets/images/svg/country/icon-korea.svg';
import IconUSA from '@/assets/images/svg/country/icon-usa.svg';
import { BaseDropdown } from '@/components/common/base-dropdown';
import cookies from '@/utils/cookie';
import { MenuProps } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import * as S from './index.styles';

const languages: MenuProps['items'] = [
  {
    label: 'English',
    key: 'en',
    icon: <IconUSA />,
  },
  {
    label: '한국어',
    key: 'ko',
    icon: <IconKorea />,
  },
];

export default function LanguageSwitcher() {
  const { push, pathname, asPath, query, locale } = useRouter();

  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (locale) {
      cookies.set('locale', locale);
      setLang(locale);
    }
  }, [locale]);

  return (
    <>
      <BaseDropdown
        overlayClassName="countrys"
        menu={{
          items: languages,
          onClick: async ({ key }) => {
            setLang(key);
            cookies.set('locale', key);

            await push(
              {
                pathname: pathname,
                query: query,
              },
              asPath,
              { locale: key }
            );
          },
        }}
        placement="bottomRight"
        trigger={['click']}
      >
        <S.Country onClick={(e) => e.preventDefault()}>
          {lang === 'en' ? <IconUSA /> : <IconKorea />}
        </S.Country>
      </BaseDropdown>
    </>
  );
}
