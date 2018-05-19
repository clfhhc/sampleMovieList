// src/js/components/List.jsx

import React from 'react';
import {connect} from 'react-redux';
import ListEntry from './ListEntry.jsx';

const mapStateToProps = (state) => ({
    filteredMovies: state.filteredMovies,
});

const List = (props) => (
    <div>
        <ul>
            {(props.filteredMovies && props.filteredMovies.length) ? props.filteredMovies.map((movieIndex,index) => (
                <ListEntry key={index} index={index} movieIndex={movieIndex}/>)) 
            : <li>No movie matches the keyword.</li>}
        </ul>
    </div>
);

const ConnectedList = connect(mapStateToProps)(List);

export default ConnectedList;