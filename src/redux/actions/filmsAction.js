import { SET_FILMS_LIST_ADMIN, SET_FILMS_MOVIES } from "../const";

export const setFilmsListAdmin = (films) => ({
  type: SET_FILMS_LIST_ADMIN,
  payload: films,
});
export const setFilmsMovies = (films) => ({
  type: SET_FILMS_MOVIES,
  payload: films,
});
