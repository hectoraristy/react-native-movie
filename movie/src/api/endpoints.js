import Constants from './constants';

export default {
  [Constants.BASE_URL]: 'https://api.themoviedb.org/3/movie/',
  [Constants.API_KEY]: '?api_key=<<api_key>>&language=en-US',
  [Constants.GET_DETAIL]: 'id',
  [Constants.GET_LATESTS]: 'latest',
  [Constants.GET_POPULAR]: 'popular',
  [Constants.GET_TOP_RATED]: 'top_rated',
  [Constants.GET_UPCOMING]: 'upcoming'
};