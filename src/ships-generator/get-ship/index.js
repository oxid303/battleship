import { getVectors } from '../utils';

const getShip = (shipSize, grid, restGrid) => {

  if (!restGrid.length) return [];

  const first = restGrid[Math.floor(Math.random() * restGrid.length)];
  const vectors = getVectors();
  let ship = [first];

  while (ship.length < shipSize) {
    const next = ship[ship.length - 1] + vectors[vectors.length - 1];

    if (grid.has(next)) {
      ship.push(next);

    } else {
      vectors.pop();

      if (!vectors.length) {
        return getShip(shipSize, grid, restGrid.filter(p => p !== first));
      }

      if (vectors.length === 2) {
        ship = [first];
      } else {
        ship.reverse();
      }
    }
  }
  return ship;
};

export default getShip;