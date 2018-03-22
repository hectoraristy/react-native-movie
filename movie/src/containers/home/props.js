import {
  addFavorite,
  removeFavorite
} from '../../store/movies/actions';

export const mapStateToProps = (state) => {
  return {
  };
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (item) => {
      dispatch(addFavorite(item));
    },
    removeFavorite: (item) => {
      dispatch(removeFavorite(item));
    }
  };
}
