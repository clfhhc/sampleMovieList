// src/js/reducers/index.js

import {createReducer} from 'redux';
import {ADD_MOVIE, FILTER_MOVIES, TOGGLE_WATCHED, TOGGLE_DESCRIPTION} from '../constants/actionTypes';

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
    movies: [],
    filteredMovies: [],
    descriptions: descriptions,
    filteredDescriptions: []
};

// const rootReducer = createReducer([],{
//     [ADD_MOVIE]: (state = initialState, action) => {

//     }
// })

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE: {
            if (action.payload.title && state.movies.every((movie) => (movie.title !== action.payload.title))) {
                return {...state, movies: [...state.movies, action.payload]};
            } else {
                return state;
            }
        }

        case FILTER_MOVIES: {
            let newFilteredMovies = [];
            for (let i = 0; i < state.movies.length; i++) {
                action.payload(state.movies[i]) && newFilteredMovies.push(i);
            }
            
            // const newFilteredMovies = Array(state.movies.length).fill().map((_,index) => index).filter((_, index) => {
            //     return action.payload(state.movies[index]);
            // })
            // const newFilteredMovies = state.movies.filter(action.payload);
            const newFilteredDescriptions = newFilteredMovies.map((index) => {
                return state.descriptions[state.movies[index].title];
            });
            return {...state, filteredMovies: newFilteredMovies, filteredDescriptions: newFilteredDescriptions};
        }

        case TOGGLE_WATCHED: {
            // let movieIndex = state.movies.findIndex((movie) => movie.title === action.payload.title);
            let newMovies = state.movies.slice();
            let newFilteredMovies = state.filteredMovies.slice();
            let newFilteredDescriptions = state.filteredDescriptions.slice();
            newMovies[action.payload[0]].watched = !state.movies[action.payload[0]].watched;
            console.log(action.payload[0])
            console.log(action.payload[1])
            newFilteredMovies.splice(action.payload[1], 1);
            newFilteredDescriptions.splice(action.payload[1], 1);
            return {...state, movies: newMovies, filteredMovies: newFilteredMovies, filteredDescriptions: newFilteredDescriptions};
        }

        case TOGGLE_DESCRIPTION: {
            // let movieIndex = state.movies.findIndex((movie) => movie.title === action.payload.title);
            // const filteredMovieIndex = state.filteredMovies.findIndex((movie) => movie.title === action.payload.title);
            let newMovies = state.movies.slice();
            
            // let newFilteredMovies = state.filteredMovies.slice();
            newMovies[action.payload].description = !state.movies[action.payload].description;
            // newFilteredMovies[filteredMovieIndex].description = newFilteredMovies[filteredMovieIndex].description
            return {...state, movies: newMovies};
        }
            
        default: {
            return state;
        }
    }
};

export default rootReducer;