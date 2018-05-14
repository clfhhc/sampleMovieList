// src/js/components/List.jsx

import React from 'react';
import {connect} from 'react-redux';
import ListEntry from './ListEntry.jsx';

const mapStateToProps = (state) => ({
    filteredMovies: state.filteredMovies
});

const List = ({filteredMovies}) => (
    <div>
        <ul>
            {(filteredMovies && filteredMovies.length) ? filteredMovies.map((movie,index) => (
                <ListEntry key={movie.title} movie={movie} />)) 
            : <li>No movie matches the keyword.</li>}
        </ul>
    </div>
);

const ConnectedList = connect(mapStateToProps)(List);

export default ConnectedList;