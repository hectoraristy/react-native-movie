import {
  addFavorite,
  removeFavorite,
  setMovies,
  loadmoreMovies
} from '../../store/movies/actions';

export const mapStateToProps = (state) => {
  return {
    favorites: state.movies.favorites,
    movies: state.movies.data
  };
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (item) => {
      dispatch(addFavorite(item));
    },
    removeFavorite: (item) => {
      dispatch(removeFavorite(item));
    },
    setMovies: (item) => {
      dispatch(setMovies(item));
    },
    loadmoreMovies: (item) => {
      dispatch(loadmoreMovies(item));
    }
  };
}
