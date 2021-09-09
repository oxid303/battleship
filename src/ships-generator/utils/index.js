import { X_NUM, Y_NUM } from '../constants';

export const getXNames = num => {
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from(str.substr(0, num));
};

export const getYNames = num => {
  const arr = [];

  for (let i = 1; i <= num; ++i) {
    arr.push(String(i));
  }
  return arr;
};

export const getVectors = () => {

  let vectors = [-X_NUM, Y_NUM, X_NUM, -Y_NUM];
  const v1 = vectors[Math.floor(Math.random() * 4)];
  const v2 = -v1;

  vectors = vectors.filter(v => v !== v1 && v !== v2);
  const v3 = vectors[Math.floor(Math.random() * 2)];
  const v4 = -v3;

  return [v4, v3, v2, v1];
};

export const transformNumToPos = arr => {
  const result = [];

  for (const point of arr) {
    result.push({
      x: ~~(point / X_NUM),
      y: point % X_NUM,
    });
  }

  return result;
};