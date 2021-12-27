const styles = {
  getWrapper: (x, size) => ({
    margin: 'auto',
    width: (x + 2) * size,
  }),
  getXNames: (x, size) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${x + 1}, ${size}px)`,
  }),
  getYNamesAndField: size => ({
    display: 'grid',
    gridTemplateColumns: `${size}px auto`,
  }),
  getName: size => ({
    width: size,
    height: size,
    textAlign: 'center',
    fontSize: size / 2,
    lineHeight: 2,
  }),
};

export default styles;