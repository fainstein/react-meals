import React from "react";
import Article from "./Article";
import styles from "./Articles.module.css";
import Card from "../UI/Card";

const Articles = (props) => {
  return (
    <div className={styles.listWrapper}>
      <Card className={styles.articlesList}>
        {props.articles.map((article, i) => {
          return (
            <Article
              lastItem={i + 1 === props.articles.length}
              key={article.key}
              data={article}
            ></Article>
          );
        })}
      </Card>
    </div>
  );
};

export default Articles;
