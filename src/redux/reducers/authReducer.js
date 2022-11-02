import { SET_AUTH_LOADING, SET_AUTH_LOGIN } from "../const";

const authReducer = (
  state = {
    isAuthenticated: false,
    authLoading: true,
  },
  action
) => {
  switch (action.type) {
    case SET_AUTH_LOGIN:
      return { ...state, isAuthenticated: action.payload };

    case SET_AUTH_LOADING:
      return { ...state, authLoading: action.payload };
    default:
      return state;
  }
};
export default authReducer;
