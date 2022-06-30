import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  it('should render', () => {
    const { container } = render(<ContactForm />);

    expect(container).toMatchSnapshot();
  });

  it('should validate form and not allow button click with invalid fields', () => {
    render(<ContactForm />);
    const nameText = 'John Doe';
    const email = 'invalid';
    const message = 'message';

    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const messageInput = screen.getByPlaceholderText('Message');
    const button = screen.getByRole('button');

    userEvent.type(nameInput, nameText);
    userEvent.type(emailInput, email);
    userEvent.type(messageInput, message);

    userEvent.click(button);

    // no API call is made to submit form
  });
});
