import { SET_FILM, SET_FILM_SUGGESTS } from "../const";

export const filmReducer = (
  state = {
    filmData: {
      countries: "",
      genres: "",
      productions: "",
      casts: "",
    },
    filmSuggests: [],
  },
  action
) => {
  switch (action.type) {
    case SET_FILM:
      return { ...state, filmData: action.payload };
    case SET_FILM_SUGGESTS:
      return { ...state, filmSuggests: action.payload };
    default:
      return state;
  }
};
