import { SET_FILMS_FILTER } from "../const";

const filmsFilterReducer = (state = [], action) => {
  switch (action.type) {
    case SET_FILMS_FILTER:
      return action.payload;

    default:
      return state;
  }
};
export default filmsFilterReducer;
