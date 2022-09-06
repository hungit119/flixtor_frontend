import {
  SET_SEARCH_RESULTS,
  SET_SEARCH_RESULTS_FULL,
  SET_SEARCH_VALUE_INPUT,
} from "../const";

export const searchReaducer = (
  state = {
    searchInput: "",
    searchResults: [],
    searchResultsFull: [],
  },
  action
) => {
  switch (action.type) {
    case SET_SEARCH_VALUE_INPUT:
      return { ...state, searchInput: action.payload };
    case SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };
    case SET_SEARCH_RESULTS_FULL:
      return { ...state, searchResultsFull: action.payload };
    default:
      return state;
  }
};
