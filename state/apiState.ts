import { atom } from 'recoil';

const apiState = atom({
  key: 'api.state',
  default: {
    text: 'hoge',
  },
});

export default apiState;
