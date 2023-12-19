import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('ParentLayout should be Visible', () => {
  render(<App />);
  const layoutElement = screen.getByTestId('parentL');
  expect(layoutElement).toBeVisible();
 });
