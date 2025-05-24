import styles from "./Special.module.css";

function formatPrice(price) {
  return `$${price.toFixed(2)}`
}

const Special = ({ name, price, description, image }) => {
  return (
    <article className={`${styles.special} card`}>
      <img className={styles.image} src={image} alt={name} />
      <h1 className="card-title">{name}</h1>
      <span className="highlight">{formatPrice(price)}</span>
      <p>{description}</p>
      <p className="lead">
        <a href="/order">
          Order a delivery
        </a>
      </p>
    </article>
  )
}

export default Special;
