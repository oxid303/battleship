import React from 'react';
import Board from '../board';
import getShips from '../../utils/getShips';

export default ({ squares, maxShip, horizontals, verticals }) => {
  let [ships, setShips] = React.useState(getShips(squares, maxShip));

  const handleUpdate = () => {
    setShips(getShips(squares, maxShip));
  };

  return (
    <div>

      <Board
        squares={squares}
        ships={ships}
        horizontals={horizontals}
        verticals={verticals}
      />

      <div style={{
        margin: 'auto',
        paddingTop: 20,
        width: 220,
      }}>
        <button style={{
          cursor: 'pointer',
          fontSize: 18,
          backgroundColor: '#ddd',
          outline: 0,
          border: '1px solid #000',
        }} onClick={handleUpdate}>get new random battleships</button>
      </div>
    </div>
  )
};