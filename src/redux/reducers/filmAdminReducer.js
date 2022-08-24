import { SET_FILM } from "../const";

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
    case SET_FILM:
      return action.payload;

    default:
      return state;
  }
};
