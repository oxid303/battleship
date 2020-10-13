import React from 'react';
import Square from '../square';

export default ({ squares, ships, horizontals, verticals }) => {

  const getColor = square => {
    let color = '#ccc';
    ships.forEach(ship => Object.values(ship.ship).forEach(item => {
      if (item.x === square.x && item.y === square.y) {
        ship.length === 4 && (color = '#263238');
        ship.length === 3 && (color = '#37474f');
        ship.length === 2 && (color = '#455a64');
        ship.length === 1 && (color = '#546e7a');
      };
    }));
    return color;
  };

  return (
    <div style={{ margin: 'auto', width: 264 }}>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(11, 22px)',
      }}>
        <span></span>

        {horizontals.map(name => (
          <div
            key={name}
            style={{
              width: 22,
              height: 22,
              textAlign: 'center',
            }}
          >
            {name}
          </div>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '22px auto',
      }}>
        <div>
          {verticals.map(name => (
            <div
              key={name}
              style={{
                width: 22,
                height: 22,
                textAlign: 'center',
              }}
            >
              {name}
            </div>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 22px)',
        }}>
          {squares.map(square => (
            <Square
              key={square.id}
              square={square}
              color={getColor(square)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};