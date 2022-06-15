import { atom } from 'recoil';

// type AAA = {
//   key: string;
//   default: Obj;
// };

// type Obj = {
//   apiResponse: object;
//   apiResponseHistory: any[];
// };

const apiState = atom({
  key: 'api.state',
  default: {
    apiResponse: {},
    // apiResponseHistory: [],
  },
});

export default apiState;
