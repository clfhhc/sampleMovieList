// src/js/components/ListEntry.jsx

import React from 'react';
import {connect} from 'react-redux';
import {toggleWatched} from '../actions/index';

const mapDispatchToProps = (dispatch, ownProps) => ({
    movie: ownProps.movie,
    toggleWatched: (movie) => dispatch(toggleWatched(movie))
})

class ListEntry extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        this.props.toggleWatched(this.props.movie);
    }

    render() {
        return (
            <li className="movie-list-entry">
                <span>
                    {this.props.movie.title}
                </span>
                <button onClick={this.handleClick}>{this.props.movie.watched ? 'To Watch' : 'Watched'}</button>
            </li>
        );
    }
}

const ConnectedListEntry = connect(null,mapDispatchToProps)(ListEntry);

export default ConnectedListEntry;