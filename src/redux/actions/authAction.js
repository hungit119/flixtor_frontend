import { SET_USER_INFOR } from "../const";

export const setUserInfo = (username) => ({
  type: SET_USER_INFOR,
  payload: username,
});
