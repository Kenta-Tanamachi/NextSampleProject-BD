import React from 'react';
import { RecoilRoot } from 'recoil';

import '../styles/globals.css';
import type { AppProps } from 'next/app';

// アプリケーションエンドポイント
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
