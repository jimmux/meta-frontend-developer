import logo from "../lib/logo.svg";

const Nav = ({ className }) => {
  return (
    <nav className={`nav-menu ${className}`}>
      <img src={logo} alt="Little Lemon Logo"></img>
      <ul className="lead">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
