import { render, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';

test('calls onClick when clicked', () => {
  const mockFn = jest.fn();
  const { getByText } = render(<Button onClick={mockFn}>Click</Button>);
  fireEvent.click(getByText('Click'));
  expect(mockFn).toHaveBeenCalledTimes(1);
});