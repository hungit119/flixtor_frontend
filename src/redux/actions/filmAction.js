import { SET_FILM } from "../const";

export const setFilm = (film) => {
  return {
    type: SET_FILM,
    payload: film,
  };
};
