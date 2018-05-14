// src/js/components/ListEntry.jsx

import React, {Component} from 'react';

let ListEntry = (props) => (
    <li className="movie-list-entry">
        <span>
            {props.movie.title}
        </span>
    </li>
);

export default ListEntry;