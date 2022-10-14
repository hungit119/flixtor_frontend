import { faHeart, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React from "react";
import { Row } from "react-bootstrap";
import MenuItemProfile from "./MenuItemProfile";
import styles from "./MenuProfile.module.scss";

const cx = classNames.bind(styles);

const MenuProfile = () => {
  const handleClickSignOut = () => {
    console.log("Hello");
  };
  return (
    <div className={cx("wrapper")}>
      <Row className={cx("menu-list")}>
        <MenuItemProfile
          icon={<FontAwesomeIcon icon={faHeart} />}
          title={"Watch List"}
          to={"/user/watch-list"}
        />
        <MenuItemProfile
          icon={<FontAwesomeIcon icon={faUser} />}
          title={"Edit Profile"}
          to={"/user/profile"}
        />
        <MenuItemProfile
          icon={<FontAwesomeIcon icon={faSignOut} />}
          title={"Sign Out"}
          type={"button"}
          onClick={handleClickSignOut}
        />
      </Row>
    </div>
  );
};

export default MenuProfile;
