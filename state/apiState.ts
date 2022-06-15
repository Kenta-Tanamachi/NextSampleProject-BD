import { atom } from 'recoil';

// type AAA = {
//   key: string;
//   default: Obj;
// };

// type Obj = {
//   apiResponse: object;
//   apiResponseHistory: any[];
// };

const apiState = atom<any>({
  key: 'api.state',
  default: {},
});

export default apiState;
