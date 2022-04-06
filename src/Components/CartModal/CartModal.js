import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./CartModal.module.css";

const CartModal = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length !== 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const buttonClickHandler = () => {
    console.log("Ordering...", cartCtx.items);
  };

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
            <CartItem
              index={i}
              key={cartItem.key}
              data={cartItem}
              onRemove={cartItemRemoveHandler.bind(null, cartItem.id)}
              onAdd={cartItemAddHandler.bind(null, cartItem)}
            ></CartItem>
          );
        })}
        <div className={styles.totalContainer}>
          <h3>Total amount</h3>
          <h3>{cartCtx.totalAmount.toFixed(2)}</h3>
        </div>
        <div className={styles.buttonWrapper}>
          {hasItems && (
            <Button className={styles.orderButton} onClick={buttonClickHandler}>
              Order
            </Button>
          )}
        </div>
      </Card>
    </>,
    document.getElementById("cart-root")
  );
};

export default CartModal;
