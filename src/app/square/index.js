import React from 'react';

export default ({ square, color }) => {
  return (
    <div style={{
      width: 20,
      height: 20,
      border: '1px solid gray',
      backgroundColor: color,
    }}>
    </div>
  );
};