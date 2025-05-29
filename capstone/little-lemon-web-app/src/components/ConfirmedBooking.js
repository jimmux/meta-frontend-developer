import { useParams } from "react-router";

const formatDate = (date) => {
  return (new Date(date)).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};

const ConfirmedBooking = () => {
  const { date, time, number, name } = useParams();

  return (
    <>
      <p>
        Thank you for booking with Little Lemon, {name}!
      </p>
      <p>
        We have reserved a table for {number} people, at {time} on {formatDate(date)}.
      </p>
      <p>
        Bon appétit!
      </p>
    </>)
};

export default ConfirmedBooking;
