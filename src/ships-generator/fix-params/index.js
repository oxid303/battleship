import { XY_MIN, XY_MAX, XY_INIT } from '../constants';
import checkIsShipsFit from './check-is-ships-fit';
import checkShipsSizes from './check-ships-sizes';
import getShipsSizes from './get-ships-sizes';

const fixParams = params => {
  if (!(params instanceof Object)) params = {};
  let { x, y, shipsSizes } = params;

  if (!Number.isInteger(x) || x < XY_MIN || x > XY_MAX) x = XY_INIT;
  if (!Number.isInteger(y) || y < XY_MIN || y > XY_MAX) y = XY_INIT;

  if (!checkShipsSizes(shipsSizes)) {
    return { x, y, shipsSizes: getShipsSizes(x, y) };
  }

  shipsSizes = [...shipsSizes].sort((a, b) => b - a);

  if (!checkIsShipsFit(x, y, shipsSizes)) {
    return { x, y, shipsSizes: getShipsSizes(x, y) };
  }

  return { x, y, shipsSizes };
};

export default fixParams;