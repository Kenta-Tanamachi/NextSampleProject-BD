/* eslint-disable react-hooks/rules-of-hooks */
import { db } from '../firebase.config';
import { collection, where, WhereFilterOp } from 'firebase/firestore';
import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { query } from 'firebase/firestore';

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
  console.log('ref', ref);
  // return undefined;

  const usersQuery = useFirestoreQuery(tableName, ref);
  console.log('usersQuery', usersQuery);

  return usersQuery;
};

export default getFireStoreSnapShot;
