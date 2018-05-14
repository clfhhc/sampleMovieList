// src/js/actions/index.js

import {ADD_MOVIE,FILTER_MOVIES} from '../constants/actionTypes';

export const addMovie = (movie) => ({type: ADD_MOVIE, payload: movie});
export const filterMovies = (criterion, value) => ({type: FILTER_MOVIES, payload: (movie) => ((movie.hasOwnProperty(criterion)) && (movie[criterion] === value))});