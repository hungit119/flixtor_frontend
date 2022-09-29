import React from "react";
import classNames from "classnames/bind";
import styles from "./MenuProfile.module.scss";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const MenuProfile = () => {
  return (
    <div className={cx("wrapper")}>
      <Row className={cx("menu-list")}>
        <Col lg={12} className={cx("menu-item")}>
          <FontAwesomeIcon icon={faHeart} /> Watch List
        </Col>
        <Col lg={12} className={cx("menu-item")}>
          <FontAwesomeIcon icon={faUser} /> Edit Profile
        </Col>
        <Col lg={12} className={cx("menu-item")}>
          <FontAwesomeIcon icon={faSignOut} /> Sign Out
        </Col>
      </Row>
    </div>
  );
};

export default MenuProfile;
