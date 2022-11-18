import { SET_IS_LOADING_FILMS, SET_MODAL_SHOW } from "../const";

export const setShowModal = (value) => ({
  type: SET_MODAL_SHOW,
  payload: value,
});
export const setIsLoadingFilms = (value) => ({
  type: SET_IS_LOADING_FILMS,
  payload: value,
});
