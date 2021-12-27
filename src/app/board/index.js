import React from 'react';
import Field from '../field';
import styles from './styles';

const Board = ({ x, y, size, ships, xNames, yNames }) => {

  return (
    <div style={styles.getWrapper(x, size)}>
      <div style={styles.getXNames(x, size)}>
        <span></span>

        {xNames.map(name =>
          <div key={name} style={styles.getName(size)}>{name}</div>)}
      </div>

      <div style={styles.getYNamesAndField(size)}>
        <div>
          {yNames.map(name =>
            <div key={name} style={styles.getName(size)}>{name}</div>)}
        </div>

        <Field x={x} y={y} size={size} ships={ships} />
      </div>
    </div>
  );
};

export default Board;