import React from "react";
import styles from './Button.module.css';

const Button = (props) => {
  let classes = props.className
    ? `${props.className} ${styles.button}`
    : `${styles.button}`;

  return <button onClick={props.onClick} className={classes}>{props.children}</button>;
};

export default Button;