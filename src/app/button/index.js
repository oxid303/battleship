import React from "react";
import styles from './styles';

const Button = ({ x, size, handleUpdate }) => {

  let [hover, setHover] = React.useState(false);
  let [focus, setFocus] = React.useState(false);

  const width = x * size + 1;

  return (
    <div style={styles.getWrapper(size, width)}>

      <button
        onClick={() => handleUpdate()}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={styles.getButton(size, width, hover, focus)}
      >
        GENERATE
      </button>
    </div>
  )
};

export default Button;