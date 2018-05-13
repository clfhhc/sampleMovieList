// src/index.js

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import App from './js/components/App.jsx';

window.movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

ReactDOM.render(<App movies={window.movies} />, document.getElementById('app'));