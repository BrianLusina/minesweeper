import { FunctionComponent, ReactNode } from 'react';
import Header from '@sections/Header';
import Footer from '@sections/Footer';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <header id="header">
        <Header />
        <Footer />
      </header>
      {children}
    </>
  );
};

export default MainLayout;
