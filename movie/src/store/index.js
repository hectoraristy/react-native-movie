import { combineReducers, createStore } from 'redux';
import movies from './movies';

console.log(movies.reducer);
const reducers = combineReducers({
  movies: movies.reducer
});


export const store = createStore(reducers);