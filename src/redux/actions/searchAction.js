import {
  SET_SEARCH_RESULTS,
  SET_SEARCH_RESULTS_FULL,
  SET_SEARCH_VALUE_INPUT,
} from "../const";

export const setSearchInputValue = (value) => ({
  type: SET_SEARCH_VALUE_INPUT,
  payload: value,
});
export const setSearchResults = (films) => ({
  type: SET_SEARCH_RESULTS,
  payload: films,
});
export const setSearchResultsFull = (films) => ({
  type: SET_SEARCH_RESULTS_FULL,
  payload: films,
});
