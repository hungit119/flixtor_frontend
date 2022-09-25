import React from "react";
import classNames from "classnames/bind";
import styles from "./MenuUserInfor.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSignOut,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from "../../constants";
import setAuthToken from "../../utils/setAuthToken";
const cx = classNames.bind(styles);
const MenuUserInfor = () => {
  const handleClickLogout = () => {
    if (localStorage[ACCESS_TOKEN_NAME]) {
      localStorage.removeItem(ACCESS_TOKEN_NAME);
      setAuthToken();
      window.location.reload();
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("menu-user-item")}>
        <Link to="/users/profile">
          <FontAwesomeIcon
            className={cx("icon-menu-user-info")}
            icon={faUserCircle}
          />
          <span>Profile</span>
        </Link>
      </div>
      <div className={cx("menu-user-item")}>
        <Link to={"/users/watchlist"}>
          <FontAwesomeIcon
            className={cx("icon-menu-user-info")}
            icon={faHeart}
          />
          <span>My Watch List</span>
        </Link>
      </div>
      <hr />
      <div className={cx("menu-user-item")}>
        <FontAwesomeIcon
          className={cx("icon-menu-user-info")}
          icon={faSignOut}
        />
        <span onClick={handleClickLogout}>Sign Out</span>
      </div>
    </div>
  );
};

export default MenuUserInfor;
