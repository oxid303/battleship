import getVectors from '../get-vectors';

const getShip = (shipSize, grid) => {

  if (!grid.size) return [];

  const vectors = getVectors();
  const first = [...grid][~~(Math.random() * grid.size)];
  let ship = [first];
  grid.delete(first);

  while (ship.length < shipSize) {
    const next = ship[ship.length - 1] + vectors[vectors.length - 1];

    if (grid.has(next)) {
      ship.push(next);

    } else {
      vectors.pop();
      if (!vectors.length) return getShip(shipSize, grid);

      if (vectors.length === 2) ship = [first];
      else ship.reverse();
    }
  }
  return ship;
};

export default getShip;