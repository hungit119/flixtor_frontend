import { SET_AUTH_LOADING, SET_AUTH_LOGIN } from "../const";

const authReducer = (
  state = {
    isLogin: false,
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case SET_AUTH_LOGIN:
      return { ...state, isLogin: action.payload };

    case SET_AUTH_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
export default authReducer;
