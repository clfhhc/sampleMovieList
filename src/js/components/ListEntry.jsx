// src/js/components/ListEntry.jsx

import React from 'react';
import {connect} from 'react-redux';
import {toggleWatched, toggleDescription} from '../actions/index';

const mapStateToProps = (state, ownProps) =>({
    index: ownProps.index,
    movieIndex: ownProps.movieIndex,
    movie: state.movies[ownProps.movieIndex],
    showDescription: state.movies[ownProps.movieIndex].description,
    description: state.filteredDescriptions[ownProps.index]
})

const mapDispatchToProps = (dispatch) => ({
    toggleWatched: (movieIndex,index) => dispatch(toggleWatched(movieIndex,index)),
    toggleDescription: (movieIndex) => dispatch(toggleDescription(movieIndex))
})

class ListEntry extends React.Component {
    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleTitleClick = this.handleTitleClick.bind(this);
    }

    handleButtonClick(event){
        this.props.toggleWatched(this.props.movieIndex, this.props.index);
    }

    handleTitleClick(event){
        this.props.toggleDescription(this.props.movieIndex);
    }

    render() {
        return (
            <li className="movie-list-entry">
                <div onClick={this.handleTitleClick} className={"movie-title" + (this.props.showDescription ? " pressed" : "")} >
                    <span>
                        {this.props.movie.title}
                    </span>
                </div>
                <div className="movie-detail">
                    {(this.props.movie && this.props.showDescription) && (this.props.description ? (
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
                    {(this.props.movie && this.props.showDescription) && (
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