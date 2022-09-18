import { SET_FILM_ADMIN } from "../const";

export const filmAdminReducer = (
  state = {
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
  action
) => {
  switch (action.type) {
    case SET_FILM_ADMIN:
      return action.payload;

    default:
      return state;
  }
};
