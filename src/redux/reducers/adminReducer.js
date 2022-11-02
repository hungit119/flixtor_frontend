import { SET_ALL_USERS, SET_USER_RULE } from "../const";

const adminReducer = (
  state = {
    users: [],
  },
  action
) => {
  switch (action.type) {
    case SET_ALL_USERS:
      return { ...state, users: action.payload };
    case SET_USER_RULE:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id
            ? { ...user, rule: action.payload.rule }
            : user
        ),
      };
    default:
      return state;
  }
};

export default adminReducer;
