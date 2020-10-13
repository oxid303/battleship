import React from 'react';
import UI from './ui';

import getNames from '../utils/getNames';
import getSquares from '../utils/getSquares';

export default () => {
  const hNum = 10;
  const vNum = 10;
  const maxShip = 4;
  const horizontals = getNames(hNum, true);
  const verticals = getNames(vNum);
  const squares = getSquares(hNum, vNum);

  return (
    <>
      <UI
        squares={squares}
        maxShip={maxShip}
        horizontals={horizontals}
        verticals={verticals}
      />
    </>
  );
};