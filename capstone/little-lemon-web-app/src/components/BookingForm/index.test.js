import { render, screen } from "@testing-library/react";
import BookingForm, {
  dateValidation,
  dateAndTimeValidation,
  getChicagoDateAndTime,
  nameValidation,
  numberValidation,
  DEFAULT_BOOKING
} from "./BookingForm";

const labels = [
  "Choose date",
  "Choose time",
  "Enter your name",
  "Number of guests",
  "Occasion"
];

describe("Utilities", () => {
  it("can parse local date and time in expected formats", () => {
    // GMT 2025-01-01 12:00
    const gmtTime = new Date(Date.UTC(2025, 0, 1, 12, 0, 0));
    // Equivalent to local Chicago time (GMT-6) 2025-01-01 06:00
    expect(getChicagoDateAndTime(gmtTime)).toEqual(["2025-01-01", "06:00"]);
  });
});

describe("Form layout", () => {
  it.each(labels)("renders the '%s' label", (labelText) => {
    render(
      <BookingForm
        availableTimes={[]}
        dispatchAvailableTimes={undefined}
        submitForm={undefined}
      />
    );

    const input = screen.getByLabelText(labelText);
    expect(input).toBeInTheDocument();
  });
});

describe("HTML validation", () => {
  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={[]}
        dispatchAvailableTimes={undefined}
        submitForm={undefined}
      />
    );
  });

  it.each(labels)("has required %s field", (labelText) => {
    const input = screen.getByLabelText(labelText);
    expect(input).toHaveAttribute("required");
  });

  it("requires a minimum booking date", () => {
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toHaveAttribute("min", DEFAULT_BOOKING.date);
  });

  it("requires a minimum length booking name", () => {
    const nameInput = screen.getByLabelText("Enter your name");
    expect(nameInput).toHaveAttribute("minLength", "2");
  });

  it("requires between 1 and 10 guests", () => {
    const guestInput = screen.getByLabelText("Number of guests");
    expect(guestInput).toHaveAttribute("min", "1");
    expect(guestInput).toHaveAttribute("max", "10");
  });
});

describe("Form validation functions", () => {
  describe("date", () => {
    it("allows today", () => {
      const [todayString] = getChicagoDateAndTime(new Date());
      expect(dateValidation(todayString)).toEqual("");
    });

    it("allows future dates", () => {
      const date = new Date();
      date.setDate(date.getDate() + 1);
      const [tomorrowString] = getChicagoDateAndTime(date);
      expect(dateValidation(tomorrowString)).toEqual("");
    });

    it("disallows past dates", () => {
      const date = new Date();
      date.setDate(date.getDate() - 1);
      const [tomorrowString] = getChicagoDateAndTime(date);
      expect(dateValidation(tomorrowString)).toEqual(
        "Please select a date of today or later."
      );
    });
  });

  describe("date and time", () => {
    it("allows now", () => {
      const [todayString, nowString] = getChicagoDateAndTime(new Date());
      expect(dateAndTimeValidation(todayString, nowString)).toEqual("");
    });

    it("allows future times", () => {
      const dateTime = new Date();
      dateTime.setMinutes(dateTime.getMinutes() + 1);
      const [todayString, nowString] = getChicagoDateAndTime(dateTime);
      expect(dateAndTimeValidation(todayString, nowString)).toEqual("");
    });

    it("disallows past times", () => {
      const dateTime = new Date();
      dateTime.setMinutes(dateTime.getMinutes() - 1);
      const [todayString, nowString] = getChicagoDateAndTime(dateTime);
      expect(dateAndTimeValidation(todayString, nowString)).toEqual(
        "Please select a future date and time."
      );
    });
  });

  describe("name", () => {
    it("allows names with at least 2 characters", () => {
      expect(nameValidation("Jo")).toEqual("");
    });

    it("disallows names with only 1 characters", () => {
      expect(nameValidation("J")).toEqual(
        "Name must be at least two characters."
      );
    });

    it("ignores leading and trailing whitespace", () => {
      expect(nameValidation(" X ")).toEqual(
        "Name must be at least two characters."
      );
    });

    it("disallows empty names", () => {
      expect(nameValidation("")).toEqual(
        "Please enter a guest name for this booking."
      );
    });

    it("disallows whitespace-only names", () => {
      expect(nameValidation(" ")).toEqual(
        "Please enter a guest name for this booking."
      );
    });
  });

  describe("number", () => {
    it.each([1, 5, 10])("allows bookings for %d people", (number) => {
      expect(numberValidation(number)).toEqual("");
    });

    it("disallows bookings for no people", () => {
      expect(numberValidation(0)).toEqual(
        "Bookings require at least one guest."
      );
    });

    it("disallows bookings for more than 10 guests", () => {
      expect(numberValidation(11)).toEqual(
        "Bookings are for at most ten guests."
      );
    });
  });
});
