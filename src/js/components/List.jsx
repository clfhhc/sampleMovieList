// src/js/components/List.jsx

import React, {Component} from 'react';

import ListEntry from './ListEntry.jsx';

let List = (props) => (
    <div>
        <ul>
            {(props.movies && props.movies.length) ? props.movies.map((movie,index) => (
                <ListEntry key={index} movie={movie} />)) 
            : <li>Add movie</li>}
        </ul>
    </div>
);

export default List;