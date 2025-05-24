import logo from "../lib/logo.svg";
import styles from "./Nav.module.css";

const menuItems = [
  {
    name: "Home",
    href: ""
  },
  {
    name: "About",
    href: ""
  },
  {
    name: "Menu",
    href: ""
  },
  {
    name: "Reservations",
    href: ""
  },
  {
    name: "Order Online",
    href: ""
  },
  {
    name: "Login",
    href: ""
  },
];

const Nav = () => {
  return (
    <nav className={`${styles.nav} to-page-width`}>
      <img src={logo} alt="Little Lemon Logo"></img>
      <ul className={`lead ${styles.menu}`}>
        {menuItems.map(({ name, href }) => (
          <li className={styles.item}>
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
