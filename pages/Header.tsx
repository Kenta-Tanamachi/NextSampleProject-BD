import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import apiState from '../state/apiState';
import apiStateB from '../state/apiStateResponseHistory';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { getRandom } from '../ts/util';

import { Audio } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Header: NextPage = () => {
  return (
    <div className="header">
      <Link href="/">
        <a>トップページ</a>
      </Link>
      <span
        style={{
          padding: '0 24px',
          fontSize: '75%',
        }}
      >
        {' '}
        /{' '}
      </span>
      <Link href="/history">
        <a>API履歴</a>
      </Link>
      <span
        style={{
          padding: '0 24px',
          fontSize: '75%',
        }}
      >
        {' '}
        /{' '}
      </span>
      <Link href="/contents">
        <a>SSG一覧</a>
      </Link>
    </div>
  );
};

export default Header;
