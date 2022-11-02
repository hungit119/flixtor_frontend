import { SET_MODAL_SHOW } from "../const";

export const controlReducer = (
  state = {
    modalShow: false,
  },
  action
) => {
  switch (action.type) {
    case SET_MODAL_SHOW:
      return { ...state, modalShow: action.payload };
    default:
      return { ...state };
  }
};
