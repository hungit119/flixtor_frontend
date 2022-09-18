import {
  SET_FILMS_FILTER,
  SET_FILMS_LASTEST_MOVIES,
  SET_FILMS_LASTEST_TV,
  SET_FILMS_LIST_ADMIN,
  SET_FILMS_TRENDING,
  SET_FILMS_TYPE_MOVIES,
  SET_FILMS_TYPE_TV,
  SET_FILM_REMOVED,
  SET_FILM_RESTORE,
  SET_FILM_SORT_DEL,
  SET_FILM_TRASH,
} from "../const";

export const setFilmsListAdmin = (films) => ({
  type: SET_FILMS_LIST_ADMIN,
  payload: films,
});
export const setFilmsTypeMovies = (films) => ({
  type: SET_FILMS_TYPE_MOVIES,
  payload: films,
});
export const setFilmsTypeTv = (films) => ({
  type: SET_FILMS_TYPE_TV,
  payload: films,
});
export const setFilmsTrending = (films) => ({
  type: SET_FILMS_TRENDING,
  payload: films,
});
export const setFilmsLastestMovies = (films) => ({
  type: SET_FILMS_LASTEST_MOVIES,
  payload: films,
});
export const setFilmsLastestTv = (films) => ({
  type: SET_FILMS_LASTEST_TV,
  payload: films,
});
export const setFilmsFilter = (films) => ({
  type: SET_FILMS_FILTER,
  payload: films,
});
export const setFilmSortDel = (id) => ({
  type: SET_FILM_SORT_DEL,
  payload: id,
});
export const setFilmRestore = (id) => ({
  type: SET_FILM_RESTORE,
  payload: id,
});
export const setFilmTrash = (films) => ({
  type: SET_FILM_TRASH,
  payload: films,
});
export const setFilmRemoved = (id) => ({
  type: SET_FILM_REMOVED,
  payload: id,
});
