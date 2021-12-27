import React from 'react';
import Board from './board';
import Button from './button';
import getShips from '../ships-generator';

const x = 10;
const y = 10;
const size = 32;
const xNames = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.substring(0, x)];
const yNames = Array(y).fill().map((_, i) => String(i + 1));

const App = () => {

  let [ships, setShips] = React.useState(null);

  const handleUpdate = () => {
    setShips(getShips({ x, y }));
  };

  React.useEffect(() => {
    handleUpdate();
  }, []);

  return (
    ships && <>
      <Board x={x} y={y} size={size} ships={ships} xNames={xNames} yNames={yNames} />
      <Button x={x} size={size} handleUpdate={handleUpdate} />
    </>
  );
};

export default App;