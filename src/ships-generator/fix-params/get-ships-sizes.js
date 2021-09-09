import checkIsShipsFit from './check-is-ships-fit';

const getShipsSizes = (x, y) => {

  let maxShip = 1;
  let shipsSizes = [1];
  let result = shipsSizes;

  while (checkIsShipsFit(x, y, shipsSizes)) {
    result = shipsSizes;
    shipsSizes = [];

    for (let shipSize = ++maxShip, num = 1; shipSize > 0; --shipSize, ++num) {
      for (let i = 0; i < num; ++i) {
        shipsSizes.push(shipSize);
      }
    }
  }
  return result;
};

export default getShipsSizes;