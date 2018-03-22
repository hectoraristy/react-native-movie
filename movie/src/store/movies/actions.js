// external
import { createAction} from 'redux-actions';

// internal
import { ADD_FAVORITE, REMOVE_FAVORITE, CLEAR, SET_MOVIES, LOAD_MORE_MOVIES } from './action-types';


export const addFavorite = createAction(ADD_FAVORITE);

export const removeFavorite = createAction(REMOVE_FAVORITE);

export const setMovies = createAction(SET_MOVIES);

export const loadmoreMovies = createAction(LOAD_MORE_MOVIES);

export const clear = createAction(CLEAR);