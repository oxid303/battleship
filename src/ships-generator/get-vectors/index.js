import { X_NUM, Y_NUM } from '../constants';

const getVectors = () => {
  let v1 = Math.random() < 0.5 ? X_NUM : Y_NUM;
  let v2 = v1 === X_NUM ? Y_NUM : X_NUM;

  v1 = Math.random() < 0.5 ? v1 : -v1;
  v2 = Math.random() < 0.5 ? v2 : -v2;

  return [v1, -v1, v2, -v2];
};

export default getVectors;