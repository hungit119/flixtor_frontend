import {
  SET_FILM_ADMIN,
  SET_FILM_SORT_DEL,
  SET_ID_FILM_DELETE,
} from "../const";

export const filmAdminReducer = (
  state = {
    film: {
      title: "",
      poster: "",
      thumnail: "",
      times: "",
      type: "",
      quantity: "",
      description: "",
      tags: "",
      productions: "",
      genres: "",
      countries: "",
      rating: "",
      imdb: "",
      releases: "",
      director: "",
      casts: "",
      year: "",
      trailerURL: "",
    },
    id: "",
  },
  action
) => {
  switch (action.type) {
    case SET_FILM_ADMIN:
      return { ...state, film: action.payload };

    case SET_ID_FILM_DELETE:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
