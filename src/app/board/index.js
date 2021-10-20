import React from 'react';
import styles from './styles';

const Board = ({ x, y, xNames, yNames, ships }) => {

  const ref = React.createRef();
  const point = 32;

  React.useEffect(() => {

    const wall = 1;
    const size = point - wall;
    const doubleWall = wall * 2;
    const width = x * point + wall;
    const height = y * point + wall;

    const canv = ref.current;
    const ctx = canv.getContext('2d');
    canv.width = width;
    canv.height = height;

    ctx.fillStyle = '#263238';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#fff';
    ctx.fillRect(wall, wall, width - doubleWall, height - doubleWall);

    ctx.fillStyle = '#b0bec5';
    for (let i = 1; i < x; ++i) ctx.fillRect(i * point, wall, wall, height - doubleWall);
    for (let i = 1; i < y; ++i) ctx.fillRect(wall, i * point, width - doubleWall, wall);

    ctx.fillStyle = '#455a64';
    for (const { x, y } of ships) {
      ctx.fillRect(x * point + wall, y * point + wall, size, size);
    }

  }, [x, y, ships, ref]);

  return (
    <div style={styles.getBoardWrapper(x, point)}>
      <div style={styles.getXNames(x, point)}>
        <span></span>

        {xNames.map(name =>
          <div key={name} style={styles.getName(point)}>{name}</div>)}
      </div>

      <div style={styles.getYNamesAndBoard(point)}>
        <div>
          {yNames.map(name =>
            <div key={name} style={styles.getName(point)}>{name}</div>)}
        </div>

        <canvas ref={ref} style={styles.canvas} />
      </div>
    </div>
  );
};

export default Board;