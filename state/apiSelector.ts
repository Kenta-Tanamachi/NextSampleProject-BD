import { selector } from 'recoil';
import apiState from './apiState';

const apiSelector = selector({
  // ユニークキー
  key: 'api.selector',
  // 取得用
  get: ({ get }): any[] => {
    // getの引数にstateを渡す
    const obj = get(apiState);

    return obj.apiResponseHistory;
  },
});

export default apiSelector;
