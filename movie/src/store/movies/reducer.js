import { ADD_FAVORITE, REMOVE_FAVORITE, CLEAR } from "./action-types";
import INITIAL_STATE from './initial-state';


const addFavorite = (state, action) => {
  return {
    ...state,
    favorites: state.favorites.concat(action.payload)
  }
}

const removeFavorite = (state, action) => {
  
  const favorites = state.favorites.filter((movie) => movie !== action.payload)
  return {
    ...state,
    favorites
  }
}

const clear = (state, action) => INITIAL_STATE;


const actions = {};
actions[ADD_FAVORITE] = addFavorite;
actions[REMOVE_FAVORITE] = removeFavorite;
actions[CLEAR] = clear;


export default movies = (state = INITIAL_STATE, action) => {
  console.log(action.type);
  return actions[action.type] ? actions[action.type](state, action) : state;
}
