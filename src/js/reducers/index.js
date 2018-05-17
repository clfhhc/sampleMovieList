// src/js/reducers/index.js

import {ADD_MOVIE, FILTER_MOVIES, TOGGLE_WATCHED} from '../constants/actionTypes';

const movies = [];

const initialState = {
    movies: movies,
    filteredMovies: movies
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            if (state.movies.every((movie) => (action.payload.title && movie.title !== action.payload.title))) {
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