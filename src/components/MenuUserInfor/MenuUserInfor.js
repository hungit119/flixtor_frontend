import {
  faHeart,
  faLock,
  faSignOut,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React from "react";
import { useSelector } from "react-redux";
import { ACCESS_TOKEN_NAME } from "../../constants";
import { userRuleSelector } from "../../redux/selectors";
import setAuthToken from "../../utils/setAuthToken";
import styles from "./MenuUserInfor.module.scss";
const cx = classNames.bind(styles);
const MenuUserInfor = () => {
  const userRule = useSelector(userRuleSelector);
  const handleClickLogout = () => {
    if (localStorage[ACCESS_TOKEN_NAME]) {
      localStorage.removeItem(ACCESS_TOKEN_NAME);
      setAuthToken();
      window.location.reload();
    }
  };
  return (
    <div className={cx("wrapper")}>
      {userRule > 1 && (
        <a className={cx("menu-user-item")} href="/admin/dashboard">
          <FontAwesomeIcon
            className={cx("icon-menu-user-info")}
            icon={faLock}
          />
          <span>Admin</span>
        </a>
      )}
      <a className={cx("menu-user-item")} href="/user/profile">
        <FontAwesomeIcon
          className={cx("icon-menu-user-info")}
          icon={faUserCircle}
        />
        <span>Profile</span>
      </a>
      <a className={cx("menu-user-item")} href="/user/watch-list">
        <FontAwesomeIcon className={cx("icon-menu-user-info")} icon={faHeart} />
        <span>My Watch List</span>
      </a>
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
