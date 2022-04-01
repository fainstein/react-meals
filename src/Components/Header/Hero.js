import React from "react";
import styles from "./Hero.module.css";
import PizzaVideo from "../../Media/PizzaVideo.mp4";
import Card from "../UI/Card";

const Hero = () => {
  return (
    <>
      <div className={styles.videoContainer}>
        <video
          height="1000"
          width="1000"
          autoPlay
          muted
          loop
          playsInline
          className={styles.heroVideo}
        >
          <source src={PizzaVideo} type="video/mp4" />
        </video>
      </div>
      <Card className={styles.mealsDescription}>
        <h2>Delicious food, delivered to you</h2>
        <p>
          Choose your favorite meal from our board selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </Card>
    </>
  );
};

export default Hero;
