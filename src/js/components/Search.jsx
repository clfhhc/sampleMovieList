// src/js/components/List.jsx

import React from 'react';
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
            filterTitle:'',
            addTitle: '',
            watchedPage: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }


    filterMoviesOnKeys(title, watchedPage){
        let regExp = new RegExp(title, 'i');
        const filterCallback = (movie) => {
            return (regExp.test(movie.title) && (movie.watched === watchedPage))};
        this.props.filterMovies(filterCallback);
    }

    addMovieOnString(title){
        this.props.addMovie({
            title: title,
            watched: false
        });
    }

    handleClick(event){
        event.preventDefault();
        if (event.target.id === 'filter-button') {
            this.filterMoviesOnKeys(this.state.filterTitle, this.state.watchedPage);
        }
        if (event.target.id === 'add-button') {
            this.setState((prevState) => {
                this.addMovieOnString(prevState.addTitle);
                this.filterMoviesOnKeys(prevState.filterTitle, prevState.watchedPage);
                return {...prevState, addTitle: ''};
            })
        }
        if (event.target.id === 'watched-button') {
            this.setState((prevState) => {
                this.filterMoviesOnKeys(prevState.filterTitle, true);
                return {...prevState, watchedPage: true};
            })
        }
        if (event.target.id === 'to-watch-button') {
            this.setState((prevState) => {
                this.filterMoviesOnKeys(prevState.filterTitle, false);
                return {...prevState, watchedPage: false};
            })
        }
    }

    handleChange(event) {
        const updateString = event.target.value;
        if (event.target.name === 'filter-title') {
            this.setState((prevState) => ({
                ...prevState, filterTitle: updateString
            }));
        }
        if (event.target.name === 'add-title') {
            this.setState((prevState) => ({
                ...prevState, addTitle: updateString
            }));
        }
        event.preventDefault();
    }

    handleKeyPress(event) {
        if (event.which === 13) {
            if (event.target.name === 'filter-title') {
                this.filterMoviesOnKeys(this.state.filterTitle, this.state.watchedPage);
            }
            if (event.target.name === 'add-title') {
                this.setState((prevState) => {
                    this.addMovieOnString(prevState.addTitle);
                    this.filterMoviesOnKeys(prevState.filterTitle, prevState.watchedPage);
                    return {...prevState, addTitle: ''};
                })
            }
            event.preventDefault();
        }
    }

    render(){
        return (
            <form className="search">
                <fieldset>
                    <input name="add-title" 
                    type="text" 
                    placeholder="Add movie title here..." 
                    value={this.state.addTitle} 
                    onChange={this.handleChange} 
                    onKeyPress={this.handleKeyPress}/>
                    
                    <button className="add btn" id="add-button" onClick={this.handleClick} >
                        Add
                    </button>
                </fieldset>
                <fieldset className="filter-form">
                    <button id="watched-button"
                    onClick={this.handleClick}
                    >Watched</button>
                    
                    <button id="to-watch-button"
                    onClick={this.handleClick}
                    >To Watch</button>
                    
                    <input name="filter-title" 
                    type="text" 
                    placeholder="Search..." 
                    value={this.state.filterTitle} 
                    onChange={this.handleChange} 
                    onKeyPress={this.handleKeyPress}/>
                    
                    <button className="filter btn" id="filter-button" onClick={this.handleClick} >
                        Go
                    </button>
                </fieldset>
            </form>
        );
    }
};

const ConnectedSearch = connect(null, mapDispatchToProps)(Search);


export default ConnectedSearch;