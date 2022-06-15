import { atom } from 'recoil';

const apiStateResponseHistory = atom({
  key: 'api.state.apiStateResponseHistory',
  default: [],
});

export default apiStateResponseHistory;
