import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Game from './Game';
import registerServiceWorker from './registerServiceWorker';

/* istanbul ignore next */
ReactDOM.render(<Game />, document.getElementById('root'));
/* istanbul ignore next */
registerServiceWorker();
