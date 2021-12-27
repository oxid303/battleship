import React from 'react';
import styles from './styles';

const Field = ({ x, y, size, ships }) => {

  const ref = React.createRef();

  React.useEffect(() => {

    const wall = 1;
    const sizeIn = size - wall;
    const doubleWall = wall * 2;
    const width = x * size + wall;
    const height = y * size + wall;
    const widthIn = width - doubleWall;
    const heightIn = height - doubleWall;

    const canv = ref.current;
    const ctx = canv.getContext('2d');
    canv.width = width;
    canv.height = height;

    ctx.fillStyle = '#263238';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#fff';
    ctx.fillRect(wall, wall, widthIn, heightIn);

    ctx.fillStyle = '#b0bec5';
    for (let i = 1; i < x; ++i) ctx.fillRect(i * size, wall, wall, heightIn);
    for (let i = 1; i < y; ++i) ctx.fillRect(wall, i * size, widthIn, wall);

    ctx.fillStyle = '#455a64';
    for (const { x, y } of ships) {
      ctx.fillRect(x * size + wall, y * size + wall, sizeIn, sizeIn);
    }

  }, [x, y, size, ships, ref]);

  return (
    <canvas ref={ref} style={styles.canvas} />
  );
};

export default Field;