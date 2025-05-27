import styles from "./BookingForm.module.css";
import { useState } from "react";
import { submitAPI } from "../api/booking";

// Todo: Add aria attributes, handle no available times.

const DEFAULT_TIME = new Date();

const DEFAULT_BOOKING = {
  date: DEFAULT_TIME.toJSON().split("T").shift(),
  // 17:00 to 22:00
  time: "17:00",
  // 1 to 10
  number: 2,
  // "birthday" or "anniversary"
  occasion: "birthday"
};

const BookingForm = ({ availableTimes, dispatchAvailableTimes, submitForm }) => {
  const [booking, setBooking] = useState({
    ...DEFAULT_BOOKING,
    time: availableTimes[0] ?? null
  });

  const changeDate = (event) => {
    dispatchAvailableTimes?.({
      type: "changeDate",
      value: event.target.value
    });
    setBooking({
      ...booking,
      date: event.target.value
    });
  }

  const changeTime = (event) => {
    setBooking({
      ...booking,
      time: event.target.value
    });
  }

  const changeGuestNumber = (event) => {
    setBooking({
      ...booking,
      number: Number(event.target.value)
    });
  }

  const changeOccasion = (event) => {
    setBooking({
      ...booking,
      occasion: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(booking);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={booking.date}
        min={DEFAULT_BOOKING.date}
        onChange={changeDate}
      />
      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        value={booking.time}
        onChange={changeTime}
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={changeGuestNumber}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={booking.occasion}
        onChange={changeOccasion}
      >
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
