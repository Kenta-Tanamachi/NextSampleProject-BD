import { atom } from 'recoil';

const apiState = atom({
  key: 'api.state',
  default: {
    apiResponse: {},
    apiResponseHistory: [],
  },
});

export default apiState;
