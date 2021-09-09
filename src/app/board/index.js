import React from 'react';
import styles from '../../styles';

const Board = ({ x, y, xNames, yNames, ships }) => {

  const ref = React.createRef();
  const point = 30;
  const size = 2;
  const full = point + size;

  React.useEffect(() => {

    const full = point + size;
    const doubleSize = size * 2;
    const width = x * full + size;
    const height = y * full + size;

    const canv = ref.current;
    const ctx = canv.getContext('2d');
    canv.width = width;
    canv.height = height;

    ctx.fillStyle = '#263238';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#fff';
    ctx.fillRect(size, size, width - doubleSize, height - doubleSize);

    ctx.fillStyle = '#b0bec5';
    for (let i = 1; i < x; ++i) ctx.fillRect(i * full, size, size, height - doubleSize);
    for (let i = 1; i < y; ++i) ctx.fillRect(size, i * full, width - doubleSize, size);

    ctx.fillStyle = '#455a64';
    for (const { x, y } of ships) {
      ctx.fillRect(x * full + size, y * full + size, point, point);
    }

  }, [x, y, ships, ref]);

  return (
    <div style={styles.getBoard(x, full)}>
      <div style={styles.getXNames(x, full)}>
        <span></span>

        {xNames.map(name =>
          <div key={name} style={styles.getName(full)}>{name}</div>)}
      </div>

      <div style={styles.getVerticalGrid(full)}>
        <div>
          {yNames.map(name =>
            <div key={name} style={styles.getName(full)}>{name}</div>)}
        </div>

        <canvas ref={ref} style={styles.canvas} />
      </div>
    </div>
  );
};

export default Board;