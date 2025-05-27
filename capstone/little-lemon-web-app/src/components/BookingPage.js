import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, dispatchAvailableTimes, submitForm }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              Available times
            </th>
          </tr>
        </thead>
        <tbody>
          {availableTimes.map(time =>
            <tr key={time}>
              <td>{time}</td>
            </tr>
          )}
        </tbody>
      </table>
      <BookingForm
        availableTimes={availableTimes}
        dispatchAvailableTimes={dispatchAvailableTimes}
        submitForm={submitForm}
      />
    </>
  )
};

export default BookingPage;
