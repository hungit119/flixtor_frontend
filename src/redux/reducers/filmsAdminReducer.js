import {
  SET_FILMS_LIST_ADMIN,
  SET_FILM_REMOVED,
  SET_FILM_RESTORE,
  SET_FILM_SORT_DEL,
  SET_FILM_TRASH,
} from "../const";

export const filmsAdminReducer = (state = { films: [] }, action) => {
  switch (action.type) {
    case SET_FILMS_LIST_ADMIN:
      return { ...state, films: action.payload };
    case SET_FILM_REMOVED:
      return {
        ...state,
        films: state.films.filter((film) => film.id !== action.payload),
      };
    case SET_FILM_SORT_DEL:
      return {
        ...state,
        films: state.films.map((film) =>
          film.id === action.payload ? { ...film, sortdel: true } : film
        ),
      };
    case SET_FILM_RESTORE:
      return {
        ...state,
        films: state.films.map((film) =>
          film.id === action.payload ? { ...film, sortdel: false } : film
        ),
      };

    case SET_FILM_TRASH:
      return { ...state, films: action.payload };

    default:
      return state;
  }
};
