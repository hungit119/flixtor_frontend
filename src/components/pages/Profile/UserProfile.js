import classNames from "classnames/bind";
import React from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { userInfoUsernameSelector } from "../../../redux/selectors";
import MenuProfile from "./MenuProfile";
import UserInfo from "./UserInfo";
import styles from "./UserProfile.module.scss";
import UserWatchList from "./UserWatchList";

const cx = classNames.bind(styles);
const UserProfile = () => {
  const username = useSelector(userInfoUsernameSelector);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Link to={"/"}>
          <span className={cx("header-title")}>Home</span>
        </Link>{" "}
        / <span className={cx("header-title")}>User</span>/{" "}
        <span className={cx("header-title")}>{username}</span>
      </div>
      <div className={cx("content")}>
        <Routes>
          <Route path="/profile" element={<UserInfo />} />
          <Route path="/watch-list" element={<UserWatchList />} />
        </Routes>
        <div className={cx("menu-profile")}>
          <MenuProfile />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
