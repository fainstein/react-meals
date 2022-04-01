import React from "react";
import styles from "./CartControl.module.css";

const CartControl = () => {
  return (
    <div className={styles.cartControl}>
      <span className={`material-icons-outlined material-icons`}>
        shopping_cart
      </span>
      <p className={styles.cartTitle}>Your cart</p>
      <div className={styles.cartItems}>
        <p className={styles.cartTitle}>{4}</p>
      </div>
    </div>
  );
};

export default CartControl;
