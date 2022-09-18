import {
  SET_FILM,
  SET_FILM_ADMIN,
  SET_FILM_SORT_DEL,
  SET_FILM_SUGGESTS,
  SET_ID_FILM_DELETE,
  SET_ID_FILM_REMOVE,
  SET_ID_FILM_RESTORE,
} from "../const";

export const setFilmAdmin = (film) => {
  return {
    type: SET_FILM_ADMIN,
    payload: film,
  };
};
export const setFilm = (film) => ({
  type: SET_FILM,
  payload: film,
});
export const setFilmSuggests = (filmSuggests) => ({
  type: SET_FILM_SUGGESTS,
  payload: filmSuggests,
});
export const setFilmIdDelete = (id) => ({
  type: SET_ID_FILM_DELETE,
  payload: id,
});
export const setFilmIdRestore = (id) => ({
  type: SET_ID_FILM_RESTORE,
  payload: id,
});
export const setFilmIdRemove = (id) => ({
  type: SET_ID_FILM_REMOVE,
  payload: id,
});
