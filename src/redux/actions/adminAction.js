import { SET_ALL_USERS, SET_USER_RULE } from "../const";

export const setAllUsers = (users) => ({
  type: SET_ALL_USERS,
  payload: users,
});
export const setUserRule = (data) => ({
  type: SET_USER_RULE,
  payload: data,
});
