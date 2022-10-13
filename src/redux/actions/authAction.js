import {
  SET_UPDATE_INFOR_USER,
  SET_USER_ALL_INFO,
  SET_USER_INFOR,
} from "../const";

export const setUserInfo = (userInfo) => ({
  type: SET_USER_INFOR,
  payload: userInfo,
});
export const setUserAllInfo = (allUserInfo) => ({
  type: SET_USER_ALL_INFO,
  payload: allUserInfo,
});
export const setUpdateInforUser = (updateUserInfo) => ({
  type: SET_UPDATE_INFOR_USER,
  payload: updateUserInfo,
});
