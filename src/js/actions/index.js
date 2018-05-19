// src/js/actions/index.js

import {ADD_MOVIE, FILTER_MOVIES, TOGGLE_WATCHED, TOGGLE_DESCRIPTION} from '../constants/actionTypes';

export const addMovie = (movie) => ({type: ADD_MOVIE, payload: movie});
export const filterMovies = (filterCallback) => ({type: FILTER_MOVIES, payload: filterCallback});
export const toggleWatched = (movieIndex, index) => ({type: TOGGLE_WATCHED, payload: [movieIndex, index]});
export const toggleDescription = (movieIndex) => ({type: TOGGLE_DESCRIPTION, payload: movieIndex});