// src/js/actions/index.js

import {ADD_MOVIE, FILTER_MOVIES, TOGGLE_WATCHED} from '../constants/actionTypes';

export const addMovie = (movie) => ({type: ADD_MOVIE, payload: movie});
export const filterMovies = (filterCallback) => ({type: FILTER_MOVIES, payload: filterCallback});
export const toggleWatched = (movie) => ({type: TOGGLE_WATCHED, payload: movie});