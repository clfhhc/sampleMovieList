// src/js/components/List.jsx

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addMovie, filterMovies} from '../actions/index';

const mapDispatchToProps = (dispatch) => ({
    addMovie: (movie) => dispatch(addMovie(movie)),
    filterMovies: (filterCallback) => dispatch(filterMovies(filterCallback))
});

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            filterString:'',
            addString: '',
            timeoutID: null
        };

    }

    filterMoviesOnString(){
        let regExp = new RegExp(this.state.filterString,'i')
        const filterCallback = (movie) => regExp.test(movie.title);
        this.props.filterMovies(filterCallback);
        (this.state.timeoutID) && (clearTimeout(this.state.timeoutID));
    }

    addMovieOnString(){
        this.props.addMovie({title: this.state.addString});
        this.filterMoviesOnString(this.state.filterString);
    }

    handleClick(event){
        event.preventDefault();
        if (event.target.name === 'filter-button') {
            this.filterMoviesOnString();
        }
        if (event.target.name === 'add-button') {
            this.addMovieOnString();
        }
    }

    handleChange(event) {
        if (event.target.name === 'filter-title') {
            this.setState({
                filterString: event.target.value,
                timeoutID: setTimeout(this.filterMoviesOnString.bind(this), 10000)
            });
        }
        if (event.target.name === 'add-title') {
            this.setState({
                addString: event.target.value,
            });
        }
    }

    handleKeyPress(event) {
        if (event.which === 13) {
            if (event.target.name === 'filter-title') {
                this.filterMoviesOnString();
            }
            if (event.target.name === 'add-button') {
                this.addMovieOnString();
            }
        }
    }

    render(){
        return (
            <form className="search">
                <fieldset>
                    <input name="add-title" 
                    type="text" 
                    placeholder="Add movie title here..." 
                    value={this.state.addString} 
                    onChange={this.handleChange.bind(this)} 
                    onKeyPress={this.handleKeyPress.bind(this)}/>
                    <button className="add btn" name="add-button" onClick={this.handleClick.bind(this)} >
                        Add
                    </button>
                </fieldset>
                <fieldset>
                    <input name="filter-title" 
                    type="text" 
                    placeholder="Search..." 
                    value={this.state.filterString} 
                    onChange={this.handleChange.bind(this)} 
                    onKeyPress={this.handleKeyPress.bind(this)}/>
                    <button className="filter btn" name="filter-button" onClick={this.handleClick.bind(this)} >
                        Go
                    </button>
                </fieldset>
            </form>
        );
    }
};

const ConnectedSearch = connect(null, mapDispatchToProps)(Search)


export default ConnectedSearch;