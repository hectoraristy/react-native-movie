// external
import { createAction} from 'redux-actions';

// internal
import { ADD_FAVORITE, REMOVE_FAVORITE, CLEAR } from './action-types';


export const addFavorite = createAction(ADD_FAVORITE);

export const removeFavorite = createAction(REMOVE_FAVORITE);

export const clear = createAction(CLEAR);