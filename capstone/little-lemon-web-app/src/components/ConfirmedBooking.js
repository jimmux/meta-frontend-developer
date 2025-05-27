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
  const { date, time, number } = useParams();

  return (<p>
    Your booking for {number} people, at {time} on {formatDate(date)} is confirmed!
  </p>)
};

export default ConfirmedBooking;
