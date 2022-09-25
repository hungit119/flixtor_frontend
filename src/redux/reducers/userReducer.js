import { SET_USER_INFOR } from "../const";

export const userReducer = (
  state = {
    username: "",
    email: "",
  },
  action
) => {
  switch (action.type) {
    case SET_USER_INFOR:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};
