import React from "react";
import className from "classnames/bind";
import styles from "./ButtonShare.module.scss";
const cx = className.bind(styles);
const ButtonShare = ({ icon, title, variant, option = null }) => {
  return (
    <button className={cx("wrapper", variant)}>
      <span className={cx("icon")}>{icon}</span>{" "}
      <span className={cx("title")}>{title}</span> <span>{option}</span>
    </button>
  );
};

export default ButtonShare;
