import fixParams from './fix-params';
import createGrid from './create-grid';
import getShip from './get-ship';
import { SHIFTS } from './constants';
import { transformNumToPos } from './utils';

const getShips = params => {

  const { x, y, shipsSizes } = fixParams(params);

  const grid = createGrid(x, y);
  const ships = [];

  for (const shipSize of shipsSizes) {

    const ship = getShip(shipSize, grid, [...grid]);

    ship.forEach(point => {
      ships.push(point);
      SHIFTS.forEach(shift => grid.delete(point + shift));
    });
  }

  return transformNumToPos(ships);
};

export default getShips;