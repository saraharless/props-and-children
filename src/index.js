import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
