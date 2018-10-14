import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRoute } from 'react-router-dom'

ReactDOM.render(
  <BrowserRoute>
    <App />
  </BrowserRoute>,
  document.getElementById('root'));
  registerServiceWorker();
