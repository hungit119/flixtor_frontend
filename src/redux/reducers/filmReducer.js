import { SET_FILM_ADMIN } from "../const";

export const filmReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_FILM_ADMIN:
      return action.payload;

    default:
      return state;
  }
};
