import React from "react";
import className from "classnames/bind";
import styles from "./ServerButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const cx = className.bind(styles);

const ServerButton = ({ title, active }) => {
  return (
    <div className={cx("wrapper", active ? "active-server" : "")}>
      <div className={cx("server-icon")}>
        <FontAwesomeIcon className={cx("icon")} icon={faPlay} />
      </div>
      <div className={cx("server-body")}>
        <div className={cx("server-label")}>Server</div>
        <div className={cx("server-title")}>{title}</div>
      </div>
    </div>
  );
};

export default ServerButton;
