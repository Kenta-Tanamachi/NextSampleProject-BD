import { atom } from 'recoil';

// APIレスポンスの履歴を格納する
const apiStateResponseHistory = atom({
  key: 'api.state.apiStateResponseHistory',
  default: [],
});

export default apiStateResponseHistory;
