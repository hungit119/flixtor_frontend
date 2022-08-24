const { SET_FILMS_MOVIES } = require("../const");

export const filmsReducer = (
  state = {
    movies: [],
    tvSeries: [],
    trending: [],
    lastestMovies: [],
    lastestTvSeries: [],
  },
  action
) => {
  switch (action.type) {
    case SET_FILMS_MOVIES:
      return { ...state, movies: action.payload };

    default:
      return state;
  }
};
