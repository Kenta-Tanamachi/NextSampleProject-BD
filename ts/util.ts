// ランダムな整数を生成
export const getRandom = (min: number, max: number) => {
  const result = Math.floor(Math.random() * (max + 1 - min)) + min;
  return result;
};
