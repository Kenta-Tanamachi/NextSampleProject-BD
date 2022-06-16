import type { NextPage } from 'next';
import Link from 'next/link';

// ヘッダーコンポーネント
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
