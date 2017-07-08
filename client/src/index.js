import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppState} from './AppState';

import registerServiceWorker from './registerServiceWorker';
const state = new AppState();

ReactDOM.render(<App state={state}/>, document.getElementById('root'));
registerServiceWorker();
