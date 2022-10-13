import React from "react";
import classNames from "classnames/bind";
import styles from "./MenuProfile.module.scss";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import MenuItemProfile from "./MenuItemProfile";

const cx = classNames.bind(styles);

const MenuProfile = () => {
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
        />
      </Row>
    </div>
  );
};

export default MenuProfile;
