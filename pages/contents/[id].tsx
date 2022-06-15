import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import styles from '../../styles/History.module.css';

import { useRecoilState, useRecoilValue } from 'recoil';
import apiState from '../../state/apiState';
import apiStateB from '../../state/apiStateResponseHistory';
import apiSelector from '../../state/apiSelector';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../Header';
import { getRandom } from '../../ts/util';

type Props = {
  pokemon: any;
};

const ContentsId: NextPage<Props> = ({ pokemon }) => {
  // const [apiSample, setApiSample] = useRecoilState(apiState);

  // const apiHistory: any = useRecoilValue(apiSelector);
  // const [apiResponseHistory, setApiResponseHistory] = useRecoilState(apiStateB);
  // const apiHistory: any[] = useRecoilValue(apiStateB);

  // console.log('apiHistory', apiHistory);

  // useEffect(() => {
  //   const res = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  //   console.log('res', res);
  // }, []);

  console.log('pokemon', pokemon);
  console.log('front_default', pokemon.sprites.front_default);

  // const [apiSample, setApiSample] = useRecoilState(apiState);
  // const apiResponseHistory = useRecoilValue(apiStateB);
  const [apiResponseHistory, setApiResponseHistory] = useRecoilState(apiStateB);

  // 読込中
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // データ
  const [pokemonState, setPokemonState] = useState<any>({ hoge: 'null' });

  const onClickApiGet = async () => {
    console.log('onClickApiGet');

    // ローディング状態に
    setIsLoading(true);

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
    const resJson: never = (await res.json()) as never;
    console.log('resJson', resJson);

    setPokemonState(resJson);

    // ローディング状態解除
    setIsLoading(false);
  };

  return (
    <>
      <Header></Header>
      <div className={styles.container}>
        <Head>
          <title>個体</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>個体</h1>
          <br />
          <br />

          <div>
            <img
              src={pokemon.sprites.front_default}
              width={320}
              height={320}
              alt="pika"
              // onError={(e) => {
              //   e.currentTarget.src = `https://placehold.jp/32/003060/e0e0e0/300x200.png?text=hoge`;
              // }}
              className={styles.image}
              data-load="done"
              // onLoad={onLoad}
              // ref={imgElement}
            />
          </div>

          <br />
          <br />

          {/* <div>画像URL</div> */}
          <div>No：{pokemon.order}</div>
          <div>Name：「{pokemon.name}」</div>

          <br />
          <br />

          <div>
            <button onClick={onClickApiGet}>新規API通信</button>
          </div>

          <br />
          <br />

          <div>新規fetchデータ</div>
          <div>{JSON.stringify(pokemonState)}</div>

          {/* <div>{JSON.stringify(pokemon)}</div> */}
          {/* <div>{pokemon.name}</div> */}
        </main>

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

//どんなpathがあるか
export const getStaticPaths = async () => {
  // const res = await fetch('http://localhost:3001/blog');
  // const json = await res.json();

  const paths = [`/contents/1`, `/contents/2`, `/contents/3`];
  return { paths, fallback: false };
};

//各ページのレンダリング
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  // const res = await fetch(`http://localhost:3001/blog/${id}`);
  // const json = await res.json();

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
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
  const json: never = (await res.json()) as never;
  // console.log('resJson', resJson);

  return {
    props: {
      pokemon: json,
    },
  };
};

export default ContentsId;