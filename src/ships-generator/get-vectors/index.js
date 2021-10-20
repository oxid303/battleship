import { X_NUM, Y_NUM } from '../constants';

const getVectors = () => {

  let vectors = [-X_NUM, Y_NUM, X_NUM, -Y_NUM];
  const v1 = vectors[Math.floor(Math.random() * 4)];
  const v2 = -v1;

  vectors = vectors.filter(v => v !== v1 && v !== v2);
  const v3 = vectors[Math.floor(Math.random() * 2)];
  const v4 = -v3;

  return [v4, v3, v2, v1];
};

export default getVectors;