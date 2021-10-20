import React from "react";
import styles from './styles';

const Button = ({ handleUpdate }) => {

  let [hover, setHover] = React.useState(false);
  let [keyboard, setKeyboard] = React.useState(false);

  return (
    <div>
      <div style={styles.buttonWrapper}>

        <button
          onClick={() => handleUpdate()}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onFocus={() => setKeyboard(true)}
          onBlur={() => setKeyboard(false)}
          style={styles.getButton(hover, keyboard)}
        >
          generate battleships
        </button>
      </div>
    </div>
  )
};

export default Button;