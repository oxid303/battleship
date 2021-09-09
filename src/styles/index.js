const styles = {
  getBoard: (x, point) => ({
    margin: 'auto',
    width: (x + 2) * point,
  }),
  getXNames: (x, point) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${x + 1}, ${point}px)`,
  }),
  getVerticalGrid: point => ({
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
  buttonWrapper: {
    margin: 'auto',
    paddingTop: 28,
    width: 258,
  },
  button: {
    cursor: 'pointer',
    fontSize: 18,
    backgroundColor: '#fff',
    outline: 0,
    border: '1px solid #263238',
    width: 258,
    height: 50,
  },
};

export default styles;