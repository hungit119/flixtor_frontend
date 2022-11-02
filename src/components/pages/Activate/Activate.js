import { useParams } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import classNames from "classnames/bind";
import styles from "./Activate.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../../constants";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
const Activate = () => {
  const [isloading, setisloading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState({
    activated: false,
    message: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  const verifyTokenEmailUser = async () => {
    try {
      setisloading(true);
      const response = await axios.get(
        `${apiUrl}/auth/activate/${params.token}`
      );
      if (response.data.success) {
        setTimeout(() => {
          setisloading(false);
          setIsAuthenticated({
            activated: true,
            message: response.data.message,
          });
          navigate("/");
        }, 2000);
      } else {
        setisloading(false);
        setIsAuthenticated({ activated: true, message: response.data.message });
      }
    } catch (error) {
      throw error.message;
    }
  };
  useEffect(() => {
    verifyTokenEmailUser();
  }, []);
  return (
    <div className={cx("wrapper")}>
      {isloading && (
        <div className={cx("loading-wrapper")}>
          <HashLoader color="#17a2b8" size={100} />
          <div className={cx("activate-message")}>Please wait ....</div>
        </div>
      )}
      {isAuthenticated && (
        <div className={cx("activated-message")}>{isAuthenticated.message}</div>
      )}
    </div>
  );
};
export default Activate;
