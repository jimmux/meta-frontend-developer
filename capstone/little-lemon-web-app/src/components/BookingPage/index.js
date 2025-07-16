import styles from "./styles.module.css";
import BookingForm from "../BookingForm";

const BookingPage = ({
  availableTimes,
  dispatchAvailableTimes,
  submitForm
}) => {
  return (
    <div className={styles.columns}>
      <BookingForm
        availableTimes={availableTimes}
        dispatchAvailableTimes={dispatchAvailableTimes}
        submitForm={submitForm}
      />
      <table>
        <thead className="lead">
          <tr>
            <th>Available times</th>
          </tr>
        </thead>
        <tbody>
          {availableTimes.map((time) => (
            <tr key={time}>
              <td>{time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingPage;
