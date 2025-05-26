import heroPhoto from "../lib/restaurant-food-square.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
  console.debug(styles);

  return (<div className={styles.hero}>
    <div className={styles.content}>
      <div className={"to-page-width " + styles.columns}>
        <div className={styles.text}>
          <h1 className="title color-lemon">
            Little Lemon
          </h1>
          <h2 className="subtitle">
            Chicago
          </h2>
          <p>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>
          <a href="/booking">
            <button>
              Reserve a Table
            </button>
          </a>
        </div>
        <div className={styles.frame}>
          <img className={`card ${styles.image}`} src={heroPhoto} alt="Restaurant food" />
        </div>
      </div>
    </div>
  </div>);
}

export default Hero;
