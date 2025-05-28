import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

// Todo: Test form submission when it is actually doing something.

test('Renders BookingForm labels', () => {
  render(<BookingForm availableTimes={[]} dispatchAvailableTimes={undefined} submitForm={undefined} />);

  [
    "Choose date",
    "Choose time",
    "Number of guests",
    "Occasion"
  ].forEach(text => {
    const label = screen.getByLabelText(text);
    expect(label).toBeInTheDocument();
  });
});
