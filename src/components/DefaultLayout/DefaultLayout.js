import classNames from "classnames/bind";
import React from "react";
import styles from "./DefaultLayout.module.scss";
import Footer from "./Footer";
import Header from "./Header";
const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
  let header = <Header />;
  let footer = <Footer />;
  return (
    <div className={cx("wrapper")}>
      {header}
      <div className={cx("container-fluid")}>{children}</div>
      {footer}
    </div>
  );
};

export default DefaultLayout;
