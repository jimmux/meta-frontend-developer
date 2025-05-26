import styles from "./Header.module.css";
import Nav from "./Nav";
import logo from "../lib/logo.svg";

const Header = () => {
  return (
    <header className={`${styles.header} to-page-width`}>
      <a href="/">
        <img src={logo} alt="Little Lemon Logo"></img>
      </a>
      <Nav />
    </header>
  );
};

export default Header;
