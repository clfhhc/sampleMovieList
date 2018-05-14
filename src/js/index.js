// src/js/index.js


import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App.jsx';
import store from './store/index';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>), 
  document.getElementById('app')
);