import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  it('should render', () => {
    const mockOnClick = jest.fn();
    const text = 'Button';

    render(<Button onClick={mockOnClick} text={text} />);

    const textElement = screen.getByText(text);

    expect(textElement).toBeInTheDocument();
  });

  it('should not call onClick when disabled', () => {
    const mockOnClick = jest.fn();
    const text = 'Button';

    render(<Button onClick={mockOnClick} text={text} disabled />);

    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });

  it('should call onClick when disabled', () => {
    const mockOnClick = jest.fn();
    const text = 'Button';

    render(<Button onClick={mockOnClick} text={text} disabled={false} />);

    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
