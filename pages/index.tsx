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
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Header from './Header';

// ルートインデックス
const Home: NextPage = () => {
  // APIレスポンス
  const [apiSample, setApiSample] = useRecoilState(apiState);
  // APIレスポンスヒストリー
  const [apiResponseHistory, setApiResponseHistory] = useRecoilState(apiStateB);

  // 読込中
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 画像エレメント
  const imgElement = useRef(null);

  // onClickで発火するイベント。API通信（GET）を行う
  const onClickApiGet = async () => {
    console.log('onClickApiGet');

    // console.log(imgElement);
    // console.log(imgElement.current);
    // e.target.dataset.load

    // 画像エレメントをunload状態に
    if (imgElement && imgElement.current) {
      // @ts-ignore
      imgElement.current.dataset.load = 'load';
    }

    // ローディング状態に
    setIsLoading(true);

    // ポケモンIDを作成
    const num: number = getRandom(1, 151);

    // ポケモンAPIからデータを取得
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致させる必要があります
    });
    // console.log('res', await res.json());

    // レスポンス変換
    const resJson: never = (await res.json()) as never;
    console.log('resJson', resJson);

    console.log(apiSample);

    // 履歴に追加
    console.log('apiResponseHistory', apiResponseHistory);
    const apiResponseHistoryPayload: never[] =
      apiResponseHistory.concat() as never[];
    apiResponseHistoryPayload.push(resJson);
    setApiResponseHistory(apiResponseHistoryPayload);

    // recoil（API State）に保存
    setApiSample(resJson);

    // ローディング状態解除
    setIsLoading(false);
  };

  const onLoad = (e: any) => {
    // console.log('onLoad', e);
    // console.log(e.target.srcset);
    // e.target.dataset.load = 'loading';

    if (e.target.src) {
      e.target.dataset.load = 'done';
    }
  };

  return (
    <>
      {/* ヘッダー */}
      <Header></Header>
      <div className={styles.container}>
        {/* メタデータ */}
        <Head>
          <title>Next Sample Project [BD]</title>
          <meta name="description" content="ポケモンを捕まえよう" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <br />
          <br />

          <h1 className={styles.title}>トップページ</h1>
          <br />
          <br />

          {/* <h2>{apiSample.text}</h2> */}

          {/* 画像表示 */}
          <div>
            <img
              src={
                apiSample.sprites?.front_default ||
                `https://placehold.jp/32/003060/e0e0e0/300x200.png?text=hoge`
              }
              width={320}
              height={320}
              alt="pika"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.jp/32/003060/e0e0e0/300x200.png?text=hoge`;
              }}
              className={styles.image}
              data-load="done"
              onLoad={onLoad}
              ref={imgElement}
            />
          </div>

          {/* データ表示 */}
          <div>No：{apiSample.order}</div>
          <div>Name：「{apiSample.name}」</div>
          <br />
          <br />

          <div>画像URL</div>
          <div>{apiSample.sprites?.front_default}</div>
          <br />
          <br />

          {/* イベント発火ボタン */}
          <div>
            <button onClick={onClickApiGet}>
              ポケモンを捕まえる（API GET）
            </button>
          </div>
          <br />
          <br />

          {/* レスポンス生データ */}
          <div>レスポンス生データ</div>
          <div>{JSON.stringify(apiSample)}</div>

          {/* ローディングスピナー */}
          <div
            // className={`spinner ${isLoading === true ? 'fade-in' : ''}`}
            className={`spinner`}
            style={{
              transition: '0.4s',
              opacity: isLoading ? 0.8 : 0,
              zIndex: isLoading ? 1000000 : -1000000,
              // width: isLoading ? '100vw' : 0,
            }}
          >
            <div>
              <Audio
                color="#00BFFF"
                height={100}
                width={100}
                // timeout={3000} //3 secs
              />
            </div>
          </div>
        </main>

        {/* フッター */}
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
