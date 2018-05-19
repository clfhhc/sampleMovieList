// src/js/components/ListEntry.jsx

import React from 'react';
import {connect} from 'react-redux';
import {toggleWatched, toggleDescription} from '../actions/index';

const mapStateToProps = (state, ownProps) =>{
    console.log(ownProps.index);
    return ({
    index: ownProps.movieIndex,
    movie: state.movies[ownProps.movieIndex],
    showDescription: state.movies[ownProps.movieIndex].description,
    description: state.filteredDescriptions[ownProps.index]
})}

const mapDispatchToProps = (dispatch) => ({
    // movie: ownProps.movie,
    // description: ownProps.description,
    toggleWatched: (movie) => dispatch(toggleWatched(movie)),
    toggleDescription: (movie) => dispatch(toggleDescription(movie))
})

class ListEntry extends React.Component {
    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleTitleClick = this.handleTitleClick.bind(this);
    }

    handleButtonClick(event){
        this.props.toggleWatched(this.props.index);
    }

    handleTitleClick(event){
        this.props.toggleDescription(this.props.index);
    }

    render() {
        console.log(this.props.description)
        return (
            <li className="movie-list-entry">
                <div onClick={this.handleTitleClick}>
                    <span>
                        {this.props.movie.title}
                    </span>
                </div>
                <div>
                    {(this.props.movie && this.props.movie.description) && (this.props.description ? (
                        <div>
                            <div>Year: {this.props.description.Year}</div>
                            <div>Runtime: {this.props.description.Runtime}</div>
                            <div>Metascore: {this.props.description.Metascore}</div>
                            <div>imdbRating: {this.props.description.imdbRating}</div>
                        </div>  
                    ) : (
                        <div>
                            Description to be retreived.
                        </div>
                    ))}
                    {(this.props.movie && this.props.movie.description) && (
                        <div>
                            <label>Watched:</label> 
                            <input type="radio" 
                            id="watched-button" 
                            checked={this.props.movie.watched} 
                            readOnly={true}
                            onClick={this.handleButtonClick} />
                        </div>
                    )}
                </div>
            </li>
        );
    }
}

const ConnectedListEntry = connect(mapStateToProps, mapDispatchToProps)(ListEntry);

export default ConnectedListEntry;