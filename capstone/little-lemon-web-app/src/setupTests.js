// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Required to fix "ReferenceError: TextEncoder is not defined"
//   after updating react-router to v7.
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;

