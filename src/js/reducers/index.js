// src/js/reducers/index.js

import {ADD_MOVIE, FILTER_MOVIES} from '../constants/actionTypes';

const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
];


const initialState = {
    movies: movies,
    filteredMovies: movies
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {...state, movies: state.movies.includes(action.payload) ? [...state.movies] : [...state.movies, action.payload]};
        case FILTER_MOVIES:
            return {...state, filteredMovies: state.movies.filter(action.payload)};
        default:
            return state;
    }
};

export default rootReducer;