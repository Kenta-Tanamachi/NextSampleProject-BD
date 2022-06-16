import { db } from '../firebase.config';
import { collection, where, WhereFilterOp } from 'firebase/firestore';
import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { query } from 'firebase/firestore';
import '@react-query-firebase/firestore';

export type WhereQueryType = {
  column: string;
  operator: WhereFilterOp;
  value: string;
};

// テーブル名とWhere句を指定してデータを取得
const getFireStoreSnapShot = (
  tableName: string,
  whereQuery: WhereQueryType
) => {
  console.log('getFireStoreSnapShot');

  const ref = query(
    collection(db, tableName),
    where(whereQuery.column, whereQuery.operator, whereQuery.value)
  );
  // const usersQuery = useFirestoreQuery(['users'], ref);
  // return usersQuery;
  return undefined;
};

export default getFireStoreSnapShot;
