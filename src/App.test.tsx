import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

xtest('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Steven Doty/i);
  expect(linkElement).toBeInTheDocument();
});
