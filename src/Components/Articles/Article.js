import React from "react";
import styles from "./Article.module.css";
import Button from "../UI/Button";

const Article = (props) => {
  return (
    <>
      <div className={styles.articleContainer}>
        <div className={styles.articleInfo}>
          <h3 className={styles.articleName}>{props.data.name}</h3>
          <p className={styles.articleDescription}>
            <em>{props.data.description}</em>
          </p>
          <p className={styles.articlePrice}>$ {props.data.price}</p>
        </div>
        <div className={styles.articleCta}>
          <div className={styles.articleQuantity}>
            <p className={styles.amountTitle}>Amount</p>
            <input type="number"></input>
          </div>
          <Button>+ Add</Button>
        </div>
      </div>
      {!props.lastItem && (
        <>
          <br />
          <hr />
          <br />
        </>
      )}
    </>
  );
};

export default Article;
