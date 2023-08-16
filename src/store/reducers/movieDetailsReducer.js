import { ACTION_TYPES } from "../action/actionType";

const initValue = {
  movieDetails: [],
};

export const movieReducer = (state = initValue, action) => {
  switch (action.type) {
    case ACTION_TYPES.MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    case ACTION_TYPES.CLEAR_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    default:
      return state;
  }
};
