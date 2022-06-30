import { FunctionComponent } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as Monitoring from '@monitoring';
import ErrorBoundary from './ErrorBoundary';
import { FallbackProps } from './ErrorBoundary.interface';

jest.mock('@monitoring', () => {
  return {
    captureAndLogError: jest.fn(),
    captureException: jest.fn(),
    captureScope: jest.fn(),
    Severity: {
      Error: 'error',
    },
  };
});

function Bomb({ shouldThrow = false }: { shouldThrow: boolean }): null {
  if (shouldThrow) {
    throw new Error('💣');
  } else {
    return null;
  }
}

const FallbackComponent: FunctionComponent<FallbackProps> = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  return (
    <div data-testid="fallback-component">
      <p>Some Error has occured {error.message}</p>
      <button type="button" onClick={resetErrorBoundary}>
        Reset
      </button>
    </div>
  );
};

const Fallback = () => {
  return (
    <div data-testid="fallback">
      <p>Some Error has occured</p>
    </div>
  );
};

describe('ErrorBoundary', () => {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.error.mockRestore();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls captureAndLogError and renders there was an error', () => {
    const { rerender } = render(
      <ErrorBoundary>
        <Bomb shouldThrow={false} />
      </ErrorBoundary>,
    );

    rerender(
      <ErrorBoundary>
        <Bomb shouldThrow />
      </ErrorBoundary>,
    );

    const error = expect.any(Error);
    const info = { componentStack: expect.stringContaining('Bomb') };

    expect(Monitoring.captureAndLogError).toHaveBeenCalledWith(error, info);
    expect(Monitoring.captureAndLogError).toHaveBeenCalledTimes(1);
  });

  it('calls onError prop and renders there was an error', () => {
    const onErrorMock = jest.fn();

    const { rerender } = render(
      <ErrorBoundary onError={onErrorMock}>
        <Bomb shouldThrow={false} />
      </ErrorBoundary>,
    );

    rerender(
      <ErrorBoundary onError={onErrorMock}>
        <Bomb shouldThrow />
      </ErrorBoundary>,
    );

    const error = expect.any(Error);
    const info = { componentStack: expect.stringContaining('Bomb') };

    expect(onErrorMock).toHaveBeenCalledWith(error, info);
    expect(onErrorMock).toHaveBeenCalledTimes(1);
    expect(Monitoring.captureAndLogError).toHaveBeenCalledTimes(0);
  });

  it('renders FallbackComponent if one is provided passing in provided props', () => {
    const onResetMock = jest.fn();

    const { rerender } = render(
      <ErrorBoundary onReset={onResetMock} FallbackComponent={FallbackComponent}>
        <Bomb shouldThrow={false} />
      </ErrorBoundary>,
    );

    rerender(
      <ErrorBoundary onReset={onResetMock} FallbackComponent={FallbackComponent}>
        <Bomb shouldThrow />
      </ErrorBoundary>,
    );

    const element = screen.getByText('Some Error has occured 💣');

    expect(element).toBeInTheDocument();
    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(onResetMock).toHaveBeenCalledTimes(1);
  });

  it('renders fallback if one is provided', () => {
    const { rerender } = render(
      <ErrorBoundary fallback={Fallback()}>
        <Bomb shouldThrow={false} />
      </ErrorBoundary>,
    );

    rerender(
      <ErrorBoundary fallback={Fallback()}>
        <Bomb shouldThrow />
      </ErrorBoundary>,
    );

    const element = screen.getByText('Some Error has occured');

    expect(element).toBeInTheDocument();
  });
});
