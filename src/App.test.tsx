import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders button with text "Button"', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).toBeInTheDocument();
});


test('renders button with primary type', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toHaveClass('ant-btn-primary');
});
