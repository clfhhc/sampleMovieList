// src/js/components/ListEntry.jsx

import React, {Component} from 'react';

const ListEntry = (props) => (
    <li className="movie-list-entry">
        <span>
            {props.movie.title}
        </span>
        <button>Watched</button>
    </li>
);

export default ListEntry;