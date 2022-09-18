import { SET_FILMS_LIST_ADMIN, SET_FILM_SORT_DEL } from "../const";

export const filmsAdminReducer = (state = [], action) => {
  switch (action.type) {
    case SET_FILMS_LIST_ADMIN:
      return action.payload;
    case SET_FILM_SORT_DEL:
      return state.map((film) =>
        film.id === action.payload ? { ...film, sortDel: 1 } : film
      );

    default:
      return state;
  }
};
