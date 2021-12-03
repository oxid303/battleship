import fixParams from './fix-params';
import createGrid from './create-grid';
import getShip from './get-ship';
import { X_NUM, SHIFTS } from './constants';

const getShips = params => {

  const { x, y, shipsSizes } = fixParams(params);

  const grid = createGrid(x, y);
  const ships = [];

  for (const shipSize of shipsSizes) {
    const ship = getShip(shipSize, grid);

    ship.forEach(point => {
      ships.push({ x: ~~(point / X_NUM), y: point % X_NUM });
      SHIFTS.forEach(shift => grid.delete(point + shift));
    });
  }

  return ships;
};

export default getShips;