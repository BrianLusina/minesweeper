import { render, screen } from '@testing-library/react';
import DefaultErrorView from './DefaultErrorView';

describe('DefaultErrorView', () => {
  it('Should render & display text', () => {
    render(<DefaultErrorView />);

    const titleElement = screen.getByText('Oops! Well, this is embarassing...');
    expect(titleElement).toBeInTheDocument();
  });

  it('Should render & display custom title & message', () => {
    const title = 'Error';
    const message = 'Something went wrong';

    render(<DefaultErrorView title={title} message={message} />);

    const titleElement = screen.getByText(/Error/);
    expect(titleElement).toBeInTheDocument();

    const messageElement = screen.getByText(/Something went wrong/);
    expect(messageElement).toBeInTheDocument();
  });
});
