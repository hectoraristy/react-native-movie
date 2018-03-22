import { ADD_FAVORITE, REMOVE_FAVORITE, CLEAR, LOAD_MORE_MOVIES, SET_MOVIES } from "./action-types";
import INITIAL_STATE from './initial-state';
import {addProperty} from './helpers';


const addFavorite = (state, action) => {
  action.payload.isFavorite = true;
  const movies = [ ...state.data];
  const movieSelected = movies.findIndex((movie) => movie.id === action.payload.id)
  if (movieSelected !== -1) {
    movies[movieSelected].isFavorite = true;
  }
  return {
    ...state,
    favorites: state.favorites.concat(action.payload),
    data: [ ...movies]
  }
}

const removeFavorite = (state, action) => {
  const favorites = state.favorites.filter((movie) => movie !== action.payload)
  const movies = [ ...state.data];
  const movieSelected = movies.findIndex((movie) => movie.id === action.payload.id)
  if (movieSelected !== -1) {
    movies[movieSelected].isFavorite = false;
  }
  return {
    ...state,
    favorites,
    data: [ ...movies]
  }
}

const loadmoreMovies = (state, action) => {
  const property = {
    name: 'isFavorite',
    value: false
  };
  const movies = addProperty(action.payload, property);
  return {
    ...state,
    data: state.data.concat(movies)
  }
}

const setMovies = (state, action) => {
  const property = {
    name: 'isFavorite',
    value: false
  };
  const movies = addProperty(action.payload, property);
  return {
    ...state,
    data: movies
  }
}

const clear = (state, action) => INITIAL_STATE;


const actions = {};
actions[ADD_FAVORITE] = addFavorite;
actions[REMOVE_FAVORITE] = removeFavorite;
actions[LOAD_MORE_MOVIES] = loadmoreMovies;
actions[SET_MOVIES] = setMovies;
actions[CLEAR] = clear;


export default movies = (state = INITIAL_STATE, action) => {
  return actions[action.type] ? actions[action.type](state, action) : state;
}
