import Special from "./Special";
import styles from "./Specials.module.css";
import greekSaladImage from "../lib/greek-salad.jpg";
import bruschettaImage from "../lib/bruschetta.jpg";
import lemonDessertImage from "../lib/lemon-dessert.jpg";

const details = [
  {
    name: "Greek Salad",
    price: 12.99,
    description: `The famous Greek salad of crispy lettuce, peppers, ${""
      }olives, and our Chicago style feta cheese, garnished with crunchy ${""
      }garlic and rosemary croutons.`,
    image: greekSaladImage
  },
  {
    name: "Bruschetta",
    price: 5.99,
    description: `Our bruschetta is made from grilled bread that has been ${""
      }smeared with garlic and seasoned with salt and olive oil.`,
    image: bruschettaImage
  },
  {
    name: "Lemon Dessert",
    price: 5.00,
    description: `This comes straight from Grandma's recipe book, ${""
      }every last ingredient has been sourced and is as authentic ${""
      }as can be imagined.`,
    image: lemonDessertImage
  }
];

const Specials = () => {
  return (<main className={`to-page-width`}>
    <section className={styles.columns}>
      <h1 className="title">
        This week's specials!
      </h1>
      <a href="/menu">
        <button>
          Online Menu
        </button>
      </a>
    </section>
    <section className={styles.columns}>
      {
        details.map((detail) => (
          <Special {...detail} />
        )
        )}
    </section>
  </main>);
}

export default Specials;
