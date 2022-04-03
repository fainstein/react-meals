import React, { useState, useContext } from "react";
import styles from "./CartItem.module.css";
import Hr from "../UI/Hr";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const [itemQuantity, setItemQuantity] = useState(props.data.quantity);
  const ctx = useContext(CartContext);

  const inputChangeHandler = (e) => {
    ctx.onUpdateItemQuantity(props.data, e.target.value);
    setItemQuantity(e.target.value);
    console.log(ctx);
  };

  const minusHandler = () => {
    ctx.onUpdateItemQuantity(props.data, itemQuantity);
    setItemQuantity((prevState) => {
      return parseInt(prevState) - 1;
    });
  };
  const plusHandler = () => {
    ctx.onUpdateItemQuantity(props.data, itemQuantity);
    setItemQuantity((prevState) => {
      return parseInt(prevState) + 1;
    });
  };

  return (
    <>
      <h3>{props.data.name}</h3>
      <div className={styles.cartContainer}>
        <div className={styles.cartItemData}>
          <p>$ {props.data.price}</p>
          <input
            onChange={inputChangeHandler}
            className={styles.cartInput}
            type="number"
            value={itemQuantity}
          ></input>
        </div>
        <div className={styles.operations}>
          <div
            onClick={minusHandler}
            className={`${styles.minusOp} ${styles.operator}`}
          >
            -
          </div>
          <div
            onClick={plusHandler}
            className={`${styles.plusOp} ${styles.operator}`}
          >
            +
          </div>
        </div>
      </div>
      <Hr></Hr>
    </>
  );
};

export default CartItem;
