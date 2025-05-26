import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, dispatchAvailableTimes }) => {
  return (<BookingForm
    availableTimes={availableTimes}
    dispatchAvailableTimes={dispatchAvailableTimes}
  />)
};

export default BookingPage;
