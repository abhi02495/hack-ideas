import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/login/Login';

test('renders sign in page', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});
