import React from "react";
import styles from "./CartItem.module.css";
import Hr from "../UI/Hr";

const CartItem = (props) => {
  const price = `$ ${props.data.price.toFixed(2)}`;
  return (
    <>
      <h3>{props.data.name}</h3>
      <div className={styles.cartContainer}>
        <div className={styles.cartItemData}>
          <span>{price}</span>
          <span className={styles.amount}>x {props.data.amount}</span>
        </div>
        <div className={styles.operations}>
          <button
            onClick={props.onRemove}
            className={`${styles.minusOp} ${styles.operator}`}
          >
            -
          </button>
          <button
            onClick={props.onAdd}
            className={`${styles.plusOp} ${styles.operator}`}
          >
            +
          </button>
        </div>
      </div>
      <Hr></Hr>
    </>
  );
};

export default CartItem;
