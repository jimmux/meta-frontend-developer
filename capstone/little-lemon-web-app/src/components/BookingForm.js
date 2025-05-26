import styles from "./BookingForm.module.css";
import { useState } from "react";

const DEFAULT_TIME = new Date();

const DEFAULT_BOOKING = {
  date: DEFAULT_TIME.toJSON().split("T").shift(),
  // 17:00 to 22:00
  time: 17,
  // 1 to 10
  number: 2,
  // "birthday" or "anniversary"
  occasion: "birthday"
};

const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState([17, 18, 19, 20]);
  const [booking, setBooking] = useState(DEFAULT_BOOKING);

  const changeDate = (event) => {
    setBooking({
      ...booking,
      date: event.target.value
    });
  }

  const changeTime = (event) => {
    setBooking({
      ...booking,
      time: Number(event.target.value)
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
    alert("Submitted!");
    console.debug(booking);
    setBooking(DEFAULT_BOOKING);
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
            {`${time}:00`}
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
