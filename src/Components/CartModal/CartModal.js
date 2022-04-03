import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./CartModal.module.css";

const CartModal = (props) => {
  const cartCtx = useContext(CartContext);

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={props.onCloseCart}></div>
      <Card className={styles.cartModal}>
        <span
          onClick={props.onCloseCart}
          className={`material-icons-outlined material-icons ${styles["close-icon"]}`}
        >
          close
        </span>
        {cartCtx.items.map((cartItem, i) => {
          return (
            <CartItem index={i} key={cartItem.key} data={cartItem}></CartItem>
          );
        })}
        <div className={styles.totalContainer}>
          <h3>Total amount</h3>
          <h3>{cartCtx.totalAmount}</h3>
        </div>
        <div className={styles.buttonWrapper}>
          <Button className={styles.orderButton}>Order</Button>
        </div>
      </Card>
    </>,
    document.getElementById("cart-root")
  );
};

export default CartModal;
