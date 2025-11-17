import { render, screen } from '@testing-library/react';
import Welcome from '../../components/Welcome';

test('renders welcome message', () => {
  render(<Welcome />);
  expect(screen.getByTestId('welcome')).toBeInTheDocument();
});