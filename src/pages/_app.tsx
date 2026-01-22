import ErrorBoundary from '@/components/common/error-boundary';
import { store } from '@/stores/store';
import { getThemeConfig } from '@/styles/theme-config';
import GlobalStyle from '@/styles/theme-global';
import { Page } from '@/types/page';
import { QueryClientProvider, queryClient } from '@/utils/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider, App as FeedbackProvider } from 'antd';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import NextNProgress from 'nextjs-progressbar';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import 'typeface-montserrat';

import RootLayout from '../layouts';

type Props = AppProps & {
  Component: Page;
};

function App({ Component, pageProps }: Props) {
  const Layout =
    (Component as Page).layout ||
    (({ children }: { children: ReactNode }) => <RootLayout>{children}</RootLayout>);

  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NEXT_PUBLIC_NODE_ENV === 'development' && <ReactQueryDevtools />}
      <Provider store={store}>
        <GlobalStyle />
        <ConfigProvider theme={getThemeConfig('light')}>
          <FeedbackProvider>
            <Layout>
              <ErrorBoundary>
                <NextNProgress />
                <Component {...pageProps} />
              </ErrorBoundary>
            </Layout>
          </FeedbackProvider>
        </ConfigProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(
  dynamic(() => Promise.resolve(App), {
    ssr: false,
  })
);
