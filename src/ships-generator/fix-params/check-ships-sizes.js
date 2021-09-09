const checkShipsSizes = shipsSizes => {
  if (!Array.isArray(shipsSizes) || !shipsSizes.length) return false;

  for (const shipSize of shipsSizes) {
    if (!Number.isInteger(shipSize) || shipSize < 1) return false;
  }

  return true;
};

export default checkShipsSizes;