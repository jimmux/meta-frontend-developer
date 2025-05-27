// import { render, screen } from '@testing-library/react';
import { initialiseTimes, updateTimes } from './Main';

test('Initialise available times', () => {
  [
    [[], [17, 18, 19, 20]],
    [[], [17, 18, 19, 20]]
  ].forEach(([reducerInitial, expectedTimes]) => {
    expect(initialiseTimes(reducerInitial)).toEqual(expectedTimes);
  });
});

test('Updates available times based on the selected date', () => {
  [
    ["2025-01-01", [17, 18, 19, 20]],
    ["1999-01-01", [17, 18, 19, 20]]
  ].forEach(([selectedDate, expectedTimes]) => {
    const STATE = {};
    const ACTION = {
      type: "changeDate",
      value: selectedDate
    };

    expect(updateTimes(STATE, ACTION)).toEqual(expectedTimes);
  });
});
