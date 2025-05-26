import styles from "./Nav.module.css";
// import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Menu",
    href: "/menu"
  },
  {
    name: "Reservations",
    href: "/booking"
  },
  {
    name: "Order Online",
    href: "/order"
  },
  {
    name: "Login",
    href: "/login"
  },
];

const Nav = () => {
  return (
    <nav>
      <ul className={`lead ${styles.menu}`}>
        {menuItems.map(({ name, href }) => (
          <li key={name}>
            <a href={href}>{name}</a>
            {/* <Link to={href} >{name}</Link> */}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
