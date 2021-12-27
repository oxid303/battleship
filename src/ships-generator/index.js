import fixParams from './fix-params';
import createGrid from './create-grid';
import getShip from './get-ship';
import { X_NUM, SHIFTS } from './constants';

const getShips = params => {

  const { x, y, shipsSizes } = fixParams(params);

  const grid = createGrid(x, y);
  const ships = [];

  for (const shipSize of shipsSizes) {
    const ship = getShip(shipSize, new Set(grid));

    ship.forEach(pos => {
      ships.push({ x: ~~(pos / X_NUM), y: pos % X_NUM });
      SHIFTS.forEach(shift => grid.delete(pos + shift));
    });
  }

  return ships;
};

export default getShips;