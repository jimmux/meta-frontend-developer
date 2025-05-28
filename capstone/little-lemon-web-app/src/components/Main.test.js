// import { render, screen } from '@testing-library/react';
import { initialiseTimes, updateTimes } from './Main';

describe("initialiseTimes", () => {
  it("uses times for today", () => {
    // Todo: Could use spies on fetchAPI instead;
    const todayString = (new Date()).toJSON().split("T").shift();
    const expectedTimes = updateTimes({}, { type: "changeDate", value: todayString });

    const availableTimes = initialiseTimes();
    expect(availableTimes).toEqual(expectedTimes);
    expect(availableTimes).not.toHaveLength(0);
  });
});

describe("updateTimes", () => {
  it.each([
    [
      "is correct for valid dates",
      "2025-05-27",
      ["17:00", "17:30", "18:00", "19:30", "21:30", "22:30", "23:30"]
    ],
    [
      "varies times for different dates",
      "2025-05-28",
      ["17:00", "17:30", "18:00", "18:30", "19:30", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"]
    ],
    [
      "handles missing dates",
      "",
      []
    ]
  ])("%s", (_, selectedDate, expectedTimes) => {
    const state = {};
    const action = {
      type: "changeDate",
      value: selectedDate
    };

    expect(updateTimes(state, action)).toEqual(expectedTimes);
  });

  it("handles unknown actions", () => {
    expect(() => updateTimes([], { type: null, value: "2025-05-27" })).toThrow("Unknown action.");
  });
});