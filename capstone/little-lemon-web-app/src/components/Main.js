import { Routes, Route, useNavigate } from "react-router";
import styles from "./Main.module.css";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import BookingPage from "./BookingPage";
import OrderPage from "./OrderPage";
import LoginPage from "./LoginPage";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../api/booking";
import ConfirmedBooking from "./ConfirmedBooking";

export const initialiseTimes = (_initial) => {
  return fetchAPI(new Date());
};

export const updateTimes = (_state, { type, value }) => {
  if (type === "changeDate") {
    return fetchAPI(new Date(value));
  }

  throw Error("Unknown action.");
};

const Main = () => {
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, [], initialiseTimes);
  const navigate = useNavigate();

  const submitForm = (data) => {
    if (submitAPI(data)) {
      navigate(`/booking-confirmation/${data.date}/${data.time}/${data.number}/${data.name}`);
    } else {
      alert("Booking failed, please try again.")
    }
  };

  return (
    <main className={styles.main}>
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
              submitForm={submitForm}
            />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/booking-confirmation/:date/:time/:number/:name" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
