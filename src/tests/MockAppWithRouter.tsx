import { FunctionComponent, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export type MockAppRouterProps = {
  children?: ReactNode;
};

/**
 * Returns a Mock application wrapped in Router only
 * @param {MockAppProps} props to pass in
 * @returns Router Application
 */
const MockAppWithRouter: FunctionComponent<MockAppRouterProps> = ({
  children,
}: MockAppRouterProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default MockAppWithRouter;