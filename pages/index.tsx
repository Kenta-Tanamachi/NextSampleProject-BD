import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import apiState from '../state/apiState';
import apiStateB from '../state/apiStateResponseHistory';
import { useEffect } from 'react';
import Link from 'next/link';
import { getRandom } from '../ts/util';

const Home: NextPage = () => {
  const [apiSample, setApiSample] = useRecoilState(apiState);
  // const apiResponseHistory = useRecoilValue(apiStateB);
  const [apiResponseHistory, setApiResponseHistory] = useRecoilState(apiStateB);

  // useEffect(() => {
  //   const res = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  //   console.log('res', res);
  // }, []);

  const onClickApiGet = async () => {
    const num: number = getRandom(1, 151);
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
    const resJson = await res.json();
    console.log('resJson', resJson);

    console.log(apiSample);

    // 履歴に追加
    // const historyArray: any[] = apiSample.apiResponseHistory as any[];
    // console.log(historyArray);
    // historyArray.push(resJson);

    console.log('apiResponseHistory', apiResponseHistory);
    const apiResponseHistoryPayload: any[] = apiResponseHistory.concat();
    apiResponseHistoryPayload.push(resJson);
    setApiResponseHistory(apiResponseHistoryPayload);

    const payload = {
      ...apiSample,
      apiResponse: resJson,
      apiResponseHistory: [],
    };

    setApiSample(resJson);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Link href="./">
            <a>トップページ・</a>
          </Link>
          <Link href="history">
            <a>API履歴</a>
          </Link>
        </div>
        <br />
        <br />

        <h1 className={styles.title}>トップページ</h1>

        {/* <h2>{apiSample.text}</h2> */}

        <div>
          <Image
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
          />
        </div>

        {/* <div>画像URL</div> */}
        <div>No：{apiSample.order}</div>
        <div>Name：{apiSample.name}</div>
        <br />
        <br />

        <div>画像URL</div>
        <div>{apiSample.sprites?.front_default}</div>
        <br />
        <br />

        <div>
          <button onClick={onClickApiGet}>API GET</button>
        </div>
        <br />
        <br />

        <div>レスポンス生データ</div>
        <div>{JSON.stringify(apiSample)}</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
