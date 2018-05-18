// src/js/reducers/index.js

import {ADD_MOVIE, FILTER_MOVIES, TOGGLE_WATCHED} from '../constants/actionTypes';

const movies = [];
const descriptions = {
    'Matrix': {
        Year: 1995,
        Runtime: '107 min',
        Metascore: 46,
        imdbRating: 6.2
    },
    'Harry Porter': {
        Year: 2000,
        Runtime: '108 min',
        Metascore: 63,
        imdbRating: 5.9,
    },
    'Identity': {
        Year: 2001,
        Runtime: '130 min',
        Metascore: 75,
        imdbRating: 4.7,
    }
};

const initialState = {
    movies: movies,
    filteredMovies: movies,
    descriptions: descriptions,
    filteredDescriptions: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            if ((action.payload.title) && state.movies.every((movie) => (movie.title !== action.payload.title))) {
                return {...state, movies: [...state.movies, action.payload]};
            } else {
                return state;
            }
        case FILTER_MOVIES:
            return {...state, filteredMovies: state.movies.filter(action.payload)};
        case TOGGLE_WATCHED:
            const movieIndex = state.movies.findIndex((movie) => movie.title === action.payload.title);
            const filteredMovieIndex = state.filteredMovies.findIndex((movie) => movie.title === action.payload.title);
            let newMovies = state.movies.slice();
            newMovies[movieIndex].watched = !state.movies[movieIndex].watched;

            let newFilteredMovies = state.filteredMovies.slice();
            newFilteredMovies.splice(filteredMovieIndex, 1);
            return {...state, movies: newMovies, filteredMovies: newFilteredMovies}
        default:
            return state;
    }
};

export default rootReducer;