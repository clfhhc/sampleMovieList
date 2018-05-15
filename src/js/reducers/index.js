// src/js/reducers/index.js

import {ADD_MOVIE, FILTER_MOVIES} from '../constants/actionTypes';

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
        default:
            return state;
    }
};

export default rootReducer;