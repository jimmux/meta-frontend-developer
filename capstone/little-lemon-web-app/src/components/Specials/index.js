import Special from "../Special";
import styles from "./styles.module.css";
import greekSaladImage from "../../lib/greek-salad-square.jpg";
import bruschettaImage from "../../lib/bruschetta-square.jpg";
import lemonDessertImage from "../../lib/lemon-dessert-square.jpg";

const details = [
  {
    name: "Greek Salad",
    price: 12.99,
    description: `The famous Greek salad of crispy lettuce, peppers, ${""}olives, and our Chicago style feta cheese, garnished with crunchy ${""}garlic and rosemary croutons.`,
    image: greekSaladImage
  },
  {
    name: "Bruschetta",
    price: 5.99,
    description: `Our bruschetta is made from grilled bread that has been ${""}smeared with garlic and seasoned with salt and olive oil.`,
    image: bruschettaImage
  },
  {
    name: "Lemon Dessert",
    price: 5.0,
    description: `This comes straight from Grandma's recipe book, ${""}every last ingredient has been sourced and is as authentic ${""}as can be imagined.`,
    image: lemonDessertImage
  }
];

const Specials = () => {
  return (
    <div className={styles.content}>
      <div className={`to-page-width`}>
        <section className={`${styles.attention} ${styles.columns}`}>
          <div>
            <h1 className="title">This week's specials!</h1>
          </div>
          <div>
            <a href="/menu">
              <button>Online Menu</button>
            </a>
          </div>
        </section>
        <section className={styles.columns}>
          {details.map((detail) => (
            <Special key={detail.name} {...detail} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Specials;
