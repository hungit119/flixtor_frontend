import { SET_FILMS_LIST_ADMIN, SET_FILMS_TYPE } from "../const";

export const setFilmsListAdmin = (films) => ({
  type: SET_FILMS_LIST_ADMIN,
  payload: films,
});
export const setFilmsType = (films) => ({
  type: SET_FILMS_TYPE,
  payload: films,
});
