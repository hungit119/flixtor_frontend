const {
  SET_FILMS_TYPE_MOVIES,
  SET_FILMS_TYPE_TV,
  SET_FILMS_TRENDING,
  SET_FILMS_LASTEST_MOVIES,
  SET_FILMS_LASTEST_TV,
  SET_FILMS_WATCH_LIST,
} = require("../const");

export const filmsReducer = (
  state = {
    movies: [],
    tvSeries: [],
    trending: [],
    lastest: { movies: [], tvSeries: [] },
    watchList: [],
  },
  action
) => {
  switch (action.type) {
    case SET_FILMS_TYPE_MOVIES:
      return { ...state, movies: action.payload };
    case SET_FILMS_TYPE_TV:
      return { ...state, tvSeries: action.payload };
    case SET_FILMS_TRENDING:
      return { ...state, trending: action.payload };
    case SET_FILMS_LASTEST_MOVIES:
      return {
        ...state,
        lastest: { ...state.lastest, movies: action.payload },
      };
    case SET_FILMS_LASTEST_TV:
      return {
        ...state,
        lastest: { ...state.lastest, tvSeries: action.payload },
      };
    case SET_FILMS_WATCH_LIST:
      return {
        ...state,
        watchList: action.payload,
      };
    default:
      return state;
  }
};
