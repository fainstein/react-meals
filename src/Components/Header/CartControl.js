import React, { useContext, useState } from "react";
import styles from "./CartControl.module.css";
import CartContext from "../../CartContext/cart-context";
import CartModal from "../CartModal/CartModal";

const CartControl = () => {
  const [cartModalVisible, setCartModalVisible] = useState(false);
  const ctx = useContext(CartContext);
  const cartClickHandler = () => {
    setCartModalVisible(true);
  };

  const closeCartHandler = () => {
    setCartModalVisible(false);
  };
  return (
    <>
      {cartModalVisible && (
        <CartModal onCloseCart={closeCartHandler} data={ctx}></CartModal>
      )}
      <div className={styles.cartControl} onClick={cartClickHandler}>
        <span className={`material-icons-outlined material-icons`}>
          shopping_cart
        </span>
        <p className={styles.cartTitle}>Your cart</p>
        <div className={styles.cartItems}>
          <p className={styles.cartTitle}>{ctx.totalItems}</p>
        </div>
      </div>
    </>
  );
};

export default CartControl;
