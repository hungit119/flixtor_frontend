import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ACCESS_TOKEN_NAME, apiUrl } from "../../constants";
import {
  setAuthentication,
  setAuthLoading,
} from "../../redux/actions/authAction";
import { setShowModal } from "../../redux/actions/controlAction";
import { setUserInfo } from "../../redux/actions/userAction";
import ResponseApiHandle from "../../utils/ResponseApiHandle";
import setAuthToken from "../../utils/setAuthToken";

const ContextApi = ({ children }) => {
  const dispatch = useDispatch();
  const loadUser = async () => {
    try {
      if (localStorage[ACCESS_TOKEN_NAME]) {
        setAuthToken(localStorage[ACCESS_TOKEN_NAME]);
      }
      const response = await axios.get(`${apiUrl}/auth`);
      ResponseApiHandle(response, (resData) => {
        dispatch(setUserInfo(resData.userInfo));
        dispatch(setAuthentication(true));
        dispatch(setAuthLoading(false));
        dispatch(setShowModal(false));
      });
    } catch (error) {
      dispatch(setAuthLoading(false));
      dispatch(setAuthentication(false));
      console.log(error.message);
    }
  };
  useEffect(() => {
    loadUser();
  }, []);
  return children;
};

export default ContextApi;
