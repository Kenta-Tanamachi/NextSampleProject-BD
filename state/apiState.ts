import { atom } from 'recoil';

const apiState = atom({
  key: 'api.state',
  default: {
    obj: {},
  },
});

export default apiState;
