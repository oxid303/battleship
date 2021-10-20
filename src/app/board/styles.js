const styles = {
  getBoardWrapper: (x, point) => ({
    margin: 'auto',
    width: (x + 2) * point,
  }),
  getXNames: (x, point) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${x + 1}, ${point}px)`,
  }),
  getYNamesAndBoard: point => ({
    display: 'grid',
    gridTemplateColumns: `${point}px auto`,
  }),
  getName: point => ({
    width: point,
    height: point,
    textAlign: 'center',
    lineHeight: 2,
  }),
  canvas: {
    display: 'block',
    outline: 0,
  },
};

export default styles;