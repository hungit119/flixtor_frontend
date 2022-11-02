import {
  SET_UPDATE_INFOR_USER,
  SET_USER_ALL_INFO,
  SET_USER_INFOR,
} from "../const";

export const userReducer = (
  state = {
    id: "",
    username: "",
    email: "",
    password: "",
    verify: false,
  },
  action
) => {
  switch (action.type) {
    case SET_USER_INFOR:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        id: action.payload.id,
        verify: action.payload.verify,
        rule: action.payload.rule,
      };
    case SET_USER_ALL_INFO:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        verify: action.payload.verify,
      };
    case SET_UPDATE_INFOR_USER:
      return {
        ...state,
        username: action.payload.username,
        emai: action.payload.emai,
      };
    default:
      return state;
  }
};
