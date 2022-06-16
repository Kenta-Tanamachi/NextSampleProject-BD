import { atom } from 'recoil';

// APIのレスポンスを格納する
const apiState = atom<any>({
  key: 'api.state',
  default: {},
});

export default apiState;
