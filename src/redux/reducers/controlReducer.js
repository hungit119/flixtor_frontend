import { SET_IS_LOADING_FILMS, SET_MODAL_SHOW } from "../const";

export const controlReducer = (
  state = {
    modalShow: false,
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case SET_MODAL_SHOW:
      return { ...state, modalShow: action.payload };
    case SET_IS_LOADING_FILMS:
      return { ...state, isLoading: action.payload };
    default:
      return { ...state };
  }
};
