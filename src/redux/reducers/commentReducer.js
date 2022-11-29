import { SET_COMMENTS_OF_FILM, SET_NEW_RECENT_COMMENT } from "../const";

const commentReducer = (
  state = {
    comments: [],
  },
  action
) => {
  switch (action.type) {
    case SET_COMMENTS_OF_FILM:
      return { ...state, comments: action.payload };
    case SET_NEW_RECENT_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    default:
      return state;
  }
};
export default commentReducer;
