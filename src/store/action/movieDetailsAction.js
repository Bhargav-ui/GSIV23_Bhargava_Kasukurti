import movieService from "../MovieService";
import { ACTION_TYPES } from "./actionType";

export const movieDetailsAction = (id) => async (dispatch) => {
  const response = await movieService.singleMovieDetails(id);
  console.log("response 5", response);
  // SERVICE
  dispatch({
    type: ACTION_TYPES.MOVIE_DETAILS,
    payload: response.data,
  });
};

export const clearMovieDetailsAction = () => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.CLEAR_MOVIE_DETAILS,
    payload: [],
  });
};
