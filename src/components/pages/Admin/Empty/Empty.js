import React from "react";
import classNames from "classnames/bind";
import styles from "./Empty.module.scss";
const cx = classNames.bind(styles);

const Empty = ({ text }) => {
  return <div className={cx("text")}>{text}</div>;
};

export default Empty;
