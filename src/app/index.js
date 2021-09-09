import React from 'react';
import Board from './board';
import getShips from '../ships-generator';
import { getXNames, getYNames } from '../ships-generator/utils';
import styles from '../styles';

const x = 10;
const y = 10;
const xNames = getXNames(x);
const yNames = getYNames(y);

const App = () => {

  let [ships, setShips] = React.useState(null);

  const handleUpdate = () => {
    setShips(getShips({ x, y }));
  };

  React.useEffect(() => {
    handleUpdate();
  }, []);

  return (
    <>
      {ships && <div>
        <Board x={x} y={y} ships={ships} xNames={xNames} yNames={yNames} />

        <div style={styles.buttonWrapper}>
          <button style={styles.button} onClick={handleUpdate}>
            generate battleships
          </button>
        </div>
      </div>}
    </>
  );
};

export default App;