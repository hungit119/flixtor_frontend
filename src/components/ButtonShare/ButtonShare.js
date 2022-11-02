import className from "classnames/bind";
import React from "react";
import styles from "./ButtonShare.module.scss";
import PropTypes from "prop-types";
const cx = className.bind(styles);
const ButtonShare = ({ icon, title, variant, option = null }) => {
  return (
    <button className={cx("wrapper", variant)}>
      <span className={cx("icon")}>{icon}</span>{" "}
      <span className={cx("title")}>{title}</span> <span>{option}</span>
    </button>
  );
};
ButtonShare.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  variant: PropTypes.string,
  option: PropTypes.any,
};

export default ButtonShare;
