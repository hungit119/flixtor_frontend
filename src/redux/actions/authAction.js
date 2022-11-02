import { SET_AUTH_LOADING, SET_AUTH_LOGIN } from "../const";

export const setAuthLogin = (isLogin) => ({
  type: SET_AUTH_LOGIN,
  payload: isLogin,
});
export const setAuthLoading = (isLoading) => ({
  type: SET_AUTH_LOADING,
  payload: isLoading,
});
