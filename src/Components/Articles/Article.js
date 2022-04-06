import React, { useRef, useContext } from "react";
import styles from "./Article.module.css";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";
import Input from "../UI/Input";
import Hr from "../UI/Hr";

const Article = (props) => {
  const articleInputRef = useRef();
  const cartCtx = useContext(CartContext);

  const addClickHandler = () => {
    const enteredAmount = articleInputRef.current.value;
    let enteredNumberAmount = +enteredAmount;
    if (enteredNumberAmount > 0 && enteredNumberAmount < 6) {
      const newItem = props.data;
      newItem.amount = parseInt(enteredNumberAmount);

      cartCtx.addItem(newItem);
      enteredNumberAmount = 1;
    } else {
      console.log("Amount error");
    }
  };

  return (
    <>
      <div className={styles.articleContainer}>
        <div className={styles.articleInfo}>
          <h3 className={styles.articleName}>{props.data.name}</h3>
          <p className={styles.articleDescription}>
            <em>{props.data.description}</em>
          </p>
          <p className={styles.articlePrice}>$ {props.data.price.toFixed(2)}</p>
        </div>
        <div className={styles.articleCta}>
          <Input
            label="Amount"
            ref={articleInputRef}
            input={{
              id: "amount",
              type: "number",
              min: "1",
              max: "5",
              step: "1",
              defaultValue: "1",
            }}
          ></Input>
          <Button onClick={addClickHandler}>+ Add</Button>
        </div>
      </div>
      {!props.lastItem && <Hr />}
    </>
  );
};

export default Article;
