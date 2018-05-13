// src/index.js

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import App from './js/components/App.jsx';

let movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

ReactDOM.render(<App movies={movies} />, document.getElementById('app'));