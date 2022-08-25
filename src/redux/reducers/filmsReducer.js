const { SET_FILMS_TYPE } = require("../const");

export const filmsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_FILMS_TYPE:
      return action.payload;

    default:
      return state;
  }
};
