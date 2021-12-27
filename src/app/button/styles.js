const styles = {
  getWrapper: (size, width) => ({
    margin: 'auto',
    paddingTop: size,
    width,
  }),
  getButton: (size, width, hover, focus) => ({
    width,
    height: size * 1.5,
    cursor: 'pointer',
    fontSize: size / 2,
    backgroundColor: hover ? '#b0bec5' : focus ? '#cfd8dc' : '#fff',
    outline: 0,
    border: '1px solid #263238',
    transition: '0.1s',
  }),
};

export default styles;