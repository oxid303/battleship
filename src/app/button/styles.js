const styles = {
  buttonWrapper: {
    margin: 'auto',
    paddingTop: 28,
    width: 258,
  },
  getButton: (hover, keyboard) => ({
    cursor: 'pointer',
    fontSize: 18,
    backgroundColor: hover ? '#b0bec5' : keyboard ? '#cfd8dc' : '#fff',
    outline: 0,
    border: '1px solid #263238',
    width: 258,
    height: 50,
    transition: '0.1s',
  }),
};

export default styles;