const VECTORS = ['up', 'right', 'down', 'left'];
let FILL = [];
let X = 0;
let Y = 0;

const squareFill = sq => {
  if (sq.x < 0 || sq.x > X || sq.y < 0 || sq.y > Y) return;

  for (let i = 0; i < FILL.length; i++) {
    if (FILL[i].x === sq.x && FILL[i].y === sq.y) return;
  }
  FILL.push(sq);
};

const shipPartFill = square => {

  for (let yShift = -1; yShift <= 1; yShift++) {
    for (let xShift = -1; xShift <= 1; xShift++) {

      squareFill({ x: square.x + xShift, y: square.y + yShift });
    }
  }
};

const shipFill = ship => {
  for (let i = 0; i < ship.length; i++) {
    shipPartFill(ship[i]);
  }
};

const getReversVector = vector => {
  const v = VECTORS.findIndex(v => v === vector);
  return v > 1 ? VECTORS[v - 2] : VECTORS[v + 2];
};

const getRandomAngleVector = vector => {
  const v = VECTORS.findIndex(v => v === vector);
  const rv = v > 1 ? v - 2 : v + 2;

  const vRest = [0, 1, 2, 3].filter(i => i !== v && i !== rv);
  return Math.random() < 0.5 ? VECTORS[vRest[0]] : VECTORS[vRest[1]];
};

const checkSquare = sq => {
  if (sq.x < 0 || sq.x > X || sq.y < 0 || sq.y > Y) return false;

  for (let i = 0; i < FILL.length; i++) {
    if (FILL[i].x === sq.x && FILL[i].y === sq.y) {
      return false;
    }
  }
  return true;
};

const addSquareVector = (params, iterator, isX) => {

  const nextSquare = {
    x: isX ?
      params.ship[params.firstRevers ? 0 : params.ship.length - 1].x + iterator :
      params.ship[0].x,
    y: isX ?
      params.ship[0].y :
      params.ship[params.firstRevers ? 0 : params.ship.length - 1].y + iterator,
    isHit: false,
  };

  params.firstRevers = false;

  if (checkSquare(nextSquare)) {
    params.ship.push(nextSquare);

  } else if (!params.revers) {
    params.revers = true;
    params.firstRevers = true;
    params.vector = getReversVector(params.vector);

  } else if (!params.changedAngle) {
    params.revers = false;
    params.vector = getRandomAngleVector(params.vector);
    params.changedAngle = true;
    params.ship = [params.ship[0]];

  } else {
    params.break = true;
  }
};

const addSquare = params => {

  switch (params.vector) {
    case VECTORS[0]:
      addSquareVector(params, -1, false);
      break;

    case VECTORS[1]:
      addSquareVector(params, 1, true);
      break;

    case VECTORS[2]:
      addSquareVector(params, 1, false);
      break;

    case VECTORS[3]:
      addSquareVector(params, -1, true);
      break;

    default:
      break;
  }
};

const addFirstSquare = () => {
  const square = {
    x: Math.floor(Math.random() * X),
    y: Math.floor(Math.random() * Y),
    isHit: false,
  };
  return checkSquare(square) ? square : addFirstSquare();
};

const buildShip = length => {

  const params = {
    revers: false,
    firstRevers: false,
    vector: VECTORS[Math.floor(Math.random() * 4)],
    changedAngle: false,
    ship: [addFirstSquare()],
    break: false,
  };

  while (params.ship.length < length) {
    addSquare(params);

    if (params.break) return buildShip(length);
  }

  return params.ship;
};

const setShip = (ships, length, id) => {

  let ship = buildShip(length);
  shipFill(ship);

  ships.push({
    id,
    length,
    hits: 0,
    isSunk: false,
    ship,
  });
};

export default (squares, maxShip = 4, customShips = false) => {
  const ships = [];

  squares.forEach(item => {
    X = Math.max(item.x, X);
    Y = Math.max(item.y, Y);
  });

  if (customShips) {
    customShips.sort((a, b) => a > b);

    for (let i = 0; i < customShips.length; i++) {
      setShip(ships, customShips[i], i);
    }

  } else {
    for (let length = maxShip, num = 1, id = 0; length > 0; length--, num++) {
      for (let i = 0; i < num; i++) {
        setShip(ships, length, id++);
      }
    }
  }
  FILL = [];
  X = 0;
  Y = 0;
  return ships;
};