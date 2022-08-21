import { SET_FILMS_LIST_ADMIN } from "../const";

export const setFilmsListAdmin = (films) => ({
  type: SET_FILMS_LIST_ADMIN,
  payload: films,
});
