import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';
import config from '@config';
import ErrorBoundary from '@components/Errors/ErrorBoundary';
import { initializeMonitoring } from '@monitoring';
import NotificationContainer from '@containers/notification';
import App from './app';
import reportWebVitals from './reportWebVitals';
import '@scss/main.scss';

initializeMonitoring();

const { meta } = config;

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Helmet titleTemplate={`${meta.title} | %s `} defaultTitle={`${meta.title}`} />
    <ErrorBoundary>
      <NotificationContainer />
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
