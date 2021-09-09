import { X_NUM } from '../constants';

const createGrid = (x, y) => {

  const grid = new Set();

  for (let v = 0; v < y; ++v) {
    for (let h = 0; h < x; ++h) {

      grid.add(h * X_NUM + v);
    }
  }

  return grid;
};

export default createGrid;