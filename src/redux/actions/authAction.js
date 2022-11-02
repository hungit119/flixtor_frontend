import { SET_AUTH_LOADING, SET_AUTH_LOGIN } from "../const";

export const setAuthentication = (auth) => ({
  type: SET_AUTH_LOGIN,
  payload: auth,
});
export const setAuthLoading = (isLoading) => ({
  type: SET_AUTH_LOADING,
  payload: isLoading,
});
