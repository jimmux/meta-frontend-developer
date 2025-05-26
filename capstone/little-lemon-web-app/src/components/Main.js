import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./Main.module.css";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import BookingPage from "./BookingPage";
import OrderPage from "./OrderPage";
import LoginPage from "./LoginPage";

const Main = () => {
  return (
    <main className={styles.main}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Main;
