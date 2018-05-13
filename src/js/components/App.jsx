// src/js/components/App.jsx

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import List from './List.jsx';

let App = (props) => (
    <div>
        <nav>
            <h1>MovieList</h1>
        </nav>
        <div>
            <List movies={props.movies} />
        </div>
    </div>
);

export default App;