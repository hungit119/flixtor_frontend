import { SET_FILM_ADMIN } from "../const";

export const setFilmAdmin = (film) => {
  return {
    type: SET_FILM_ADMIN,
    payload: film,
  };
};
