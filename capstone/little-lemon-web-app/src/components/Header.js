import Nav from "./Nav";
import heroPhoto from "../lib/restaurant-food.jpg";

const Header = () => {
  return (<header>
    <Nav className="has-full-width"></Nav>
    <section className="hero">
      <div className="hero-text has-full-width">
        <h1 className="title">
          Little Lemon
        </h1>
        <h2 className="subtitle">
          Chicago
        </h2>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <button>
          Reserve a Table
        </button>
      </div>
      <div className="hero-image card">
        <img src={heroPhoto} alt="Restaurant food" />
      </div>
    </section>
  </header>);
}

export default Header;
