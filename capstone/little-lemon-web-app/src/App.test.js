import { render, screen } from '@testing-library/react';
import App from './App';

test('The Home page', () => {
  render(<App />);
  const heroTitle = screen.getByText("Little Lemon");
  expect(heroTitle).toBeInTheDocument();

  const heroSubtitle = screen.getByText("Chicago");
  expect(heroSubtitle).toBeInTheDocument();
});
