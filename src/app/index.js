import React from 'react';
import Board from './board';
import Button from './button';
import getShips from '../ships-generator';

const x = 10;
const y = 10;
const xNames = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.substr(0, x)];
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
    <>
      {ships && <div>
        <Board x={x} y={y} ships={ships} xNames={xNames} yNames={yNames} />
        <Button handleUpdate={handleUpdate} />
      </div>}
    </>
  );
};

export default App;