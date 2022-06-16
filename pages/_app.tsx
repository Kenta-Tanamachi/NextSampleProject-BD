import React from 'react';
import { RecoilRoot } from 'recoil';

import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

// アプリケーションエンドポイント
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default MyApp;
