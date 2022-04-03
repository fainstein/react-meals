import React, { useRef, useContext } from "react";
import styles from "./Article.module.css";
import Button from "../UI/Button";
import CartContext from "../../CartContext/cart-context";
import Hr from "../UI/Hr";

const Article = (props) => {
  const articleInputRef = useRef();
  const ctx = useContext(CartContext);

  const addClickHandler = () => {
    if (articleInputRef.current.value > 0) {
      ctx.onAddItems(props.data, articleInputRef.current.value);
      articleInputRef.current.value = 1;
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
          <div className={styles.articleQuantity}>
            <p className={styles.amountTitle}>Amount</p>
            <input
              ref={articleInputRef}
              type="number"
              min="1"
              max="5"
              step="1"
              defaultValue="1"
            ></input>
          </div>
          <Button onClick={addClickHandler}>+ Add</Button>
        </div>
      </div>
      {!props.lastItem && <Hr />}
    </>
  );
};

export default Article;
