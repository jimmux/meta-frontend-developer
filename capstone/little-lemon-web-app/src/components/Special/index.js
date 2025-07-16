import styles from "./styles.module.css";

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

const Special = ({ name, price, description, image }) => {
  return (
    <article className={`${styles.special} card`}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.copy}>
        <h1 className={styles.price}>
          <span className="card-title">{name}</span>
          <span className="highlight color-salmon">{formatPrice(price)}</span>
        </h1>
        <p>{description}</p>
        <p className="lead">
          <a href="/order">Order a delivery 🛵</a>
        </p>
      </div>
    </article>
  );
};

export default Special;
