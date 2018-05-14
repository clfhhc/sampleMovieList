// src/js/actions/index.js

import {ADD_MOVIE,FILTER_MOVIES} from '../constants/actionTypes';

export const addMovie = (movie) => ({type: ADD_MOVIE, payload: movie});
export const filterMovies = (criteria, values) => (
    {type: FILTER_MOVIES, 
    payload: (movie) => {
        if (Array.isArray(criteria)) {
            return criteria.every((criterion,i) => (
                (movie.hasOwnProperty(criterion)) && (movie[criterion] === values[i])
            ));
        } 
        return ((movie.hasOwnProperty(criteria)) && (movie[criteria] === values));
    }
});