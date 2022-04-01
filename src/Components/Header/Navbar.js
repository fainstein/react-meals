import React from "react";
import CartControl from "./CartControl";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>ReactMeals</h1>
      <CartControl />
    </div>
  );
};


export default Navbar;