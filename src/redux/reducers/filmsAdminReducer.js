import { SET_FILMS_LIST_ADMIN } from "../const";

export const filmsAdminReducer = (state = [], action) => {
  switch (action.type) {
    case SET_FILMS_LIST_ADMIN:
      return action.payload;

    default:
      return state;
  }
};
