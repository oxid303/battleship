import getVectors from '../get-vectors';

const getShip = (shipSize, grid) => {

  if (!grid.size) return [];

  const first = [...grid][Math.floor(Math.random() * grid.size)];
  const vectors = getVectors();
  let ship = [first];

  while (ship.length < shipSize) {
    const next = ship[ship.length - 1] + vectors[vectors.length - 1];

    if (grid.has(next)) {
      ship.push(next);

    } else {
      vectors.pop();

      if (!vectors.length) {
        grid.delete(first);
        return getShip(shipSize, grid);
      }

      if (vectors.length === 2) ship = [first];
      else ship.reverse();
    }
  }
  return ship;
};

export default getShip;