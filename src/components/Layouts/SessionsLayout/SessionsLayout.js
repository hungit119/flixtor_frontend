import React from "react";
import classNames from "classnames/bind";
import styles from "./SessionsLayout.module.scss";
const cx = classNames.bind(styles);
const SessionsLayout = ({ title }) => {
  return <div className={cx("wrapper")}>{title}</div>;
};

export default SessionsLayout;
