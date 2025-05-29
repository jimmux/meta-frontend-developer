import styles from "./BookingForm.module.css";
import { useState } from "react";
import ValidationMessage from "./ValidationMessage";

// Todo: Add aria attributes, handle no available times.
// Maybe add validation for occasion, even though invalid
// selections aren't possible, and add unit tests for all.

const DEFAULT_TIME = new Date();

export const DEFAULT_BOOKING = {
  date: DEFAULT_TIME.toJSON().split("T").shift(),
  // 17:00 to 22:00
  time: "17:00",
  // String name of the booking guest
  name: "",
  // 1 to 10
  number: 2,
  // "birthday" or "anniversary"
  occasion: "birthday"
};

export const getChicagoDateAndTime = (date) => {
  // Format like "05/29/2025, 14:49"
  const formatted = (date).toLocaleString(
    "en-US",
    {
      timeZone: "America/Chicago",
      hourCycle: "h24",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });

  const [, month, day, year, time] = formatted
    .match(/(\d\d)\/(\d\d)\/(\d\d\d\d), (\d\d:\d\d)/);

  return [`${year}-${month}-${day}`, time];
};

export const dateValidation = (date) => {
  const [today,] = getChicagoDateAndTime(new Date());
  if (date < today) {
    return "Please select a date of today or later.";
  }

  return "";
};

export const dateAndTimeValidation = (date, time) => {
  const [today, now] = getChicagoDateAndTime(new Date());
  if (new Date(`${date}T${time}`) < new Date(`${today}T${now}`)) {
    return "Please select a future date and time.";
  }

  return "";
}

export const nameValidation = (rawName) => {
  const name = rawName.trim();

  if (name.length < 1) {
    return "Please enter a guest name for this booking."
  }

  if (name.length < 2) {
    return "Name must be at least two characters."
  }

  return "";
}

export const numberValidation = (number) => {
  if (number < 1) {
    return "Bookings require at least one guest."
  }

  if (number > 10) {
    return "Bookings are for at most ten guests."
  }

  return "";
}

const BookingForm = ({ availableTimes, dispatchAvailableTimes, submitForm }) => {
  const [booking, setBooking] = useState({
    ...DEFAULT_BOOKING,
    time: availableTimes[0] ?? ""
  });

  const [validation, setValidation] = useState({
    date: "",
    time: "",
    name: "",
    number: ""
  });

  const canSubmit = !dateValidation(booking.date)
    && !dateAndTimeValidation(booking.date, booking.time)
    && !nameValidation(booking.name)
    && !numberValidation(booking.number);

  const changeDate = (event) => {
    const date = event.target.value;

    dispatchAvailableTimes?.({
      type: "changeDate",
      value: date
    });

    setBooking({
      ...booking,
      date
    });

    setValidation({
      ...validation,
      date: dateValidation(date)
    });
  }

  const changeTime = (event) => {
    const time = event.target.value;

    setBooking({
      ...booking,
      time
    });

    setValidation({
      ...validation,
      time: dateAndTimeValidation(booking.date, time)
    });
  }

  const changeName = (event) => {
    const name = event.target.value;

    setBooking({
      ...booking,
      name
    });

    setValidation({
      ...validation,
      name: nameValidation(name)
    });
  }

  const changeGuestNumber = (event) => {
    const number = Number(event.target.value);

    setBooking({
      ...booking,
      number: number
    });

    setValidation({
      ...validation,
      number: numberValidation(number)
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
    submitForm?.(booking);
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
        required
      />
      <ValidationMessage message={validation.date} />

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        value={booking.time}
        onChange={changeTime}
        required
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <ValidationMessage message={validation.time} />

      <label htmlFor="name">Enter your name</label>
      <input
        type="text"
        id="name"
        placeholder="Reservation name"
        required
        minLength={2}
        onChange={changeName}
        value={booking.name}
      ></input>
      <ValidationMessage message={validation.name} />

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder={1}
        min={1}
        max={10}
        id="guests"
        onChange={changeGuestNumber}
        value={booking.number}
        required
      />
      <ValidationMessage message={validation.number} />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={booking.occasion}
        onChange={changeOccasion}
        required
      >
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" disabled={!canSubmit} />
    </form>
  );
};

export default BookingForm;
