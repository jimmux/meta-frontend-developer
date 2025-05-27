import { BrowserRouter, Routes, Route } from "react-router";
import styles from "./Main.module.css";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import BookingPage from "./BookingPage";
import OrderPage from "./OrderPage";
import LoginPage from "./LoginPage";
import { useReducer } from "react";

export const initialiseTimes = (initial) => {
  return [17, 18, 19, 20];
};

export const updateTimes = (state, { type, value }) => {
  if (type === "changeDate") {
    return [17, 18, 19, 20];
  }

  throw Error("Unknown action.");
};

const Main = () => {
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, [], initialiseTimes);

  return (
    <main className={styles.main}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatchAvailableTimes={dispatchAvailableTimes}
              />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Main;
