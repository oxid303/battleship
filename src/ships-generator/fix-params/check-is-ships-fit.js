const checkIsShipsFit = (x, y, shipsSizes) => {

  const maxLine = Math.max(x, y);
  const minLine = Math.min(x, y);
  const linesNum = Math.ceil(minLine / 3);

  const lines = Array(linesNum).fill({
    line: maxLine,
    shipsOnLine: 0,
  });

  for (const shipSize of shipsSizes) {
    let isWrong = true;

    for (let i = 0; i < linesNum; ++i) {
      const { line, shipsOnLine } = lines[i];

      if (shipsOnLine * (shipSize - 1) + shipSize <= line) {

        lines[i] = {
          line: line - shipSize - 2,
          shipsOnLine: shipsOnLine + 1,
        };
        isWrong = false;
        break;
      }
    }
    if (isWrong) return false;
  }

  // 99,9%
  return true;
};

export default checkIsShipsFit;