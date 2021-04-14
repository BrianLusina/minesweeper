import React from 'react';
import ReactDOM from 'react-dom';
import Game from './containers/game';
import registerServiceWorker from './registerServiceWorker';
import reportWebVitals from './reportWebVitals';
import './index.scss';

/* istanbul ignore next */
ReactDOM.render(
    <React.StrictMode>
        <Game />
    </React.StrictMode>, 
    document.getElementById('root')
);

/* istanbul ignore next */
registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
