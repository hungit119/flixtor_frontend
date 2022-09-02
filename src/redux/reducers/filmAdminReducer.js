import { SET_FILM_ADMIN } from "../const";

export const filmAdminReducer = (
  state = {
    countries: "",
    genres: "",
    productions: "",
    casts: "",
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
