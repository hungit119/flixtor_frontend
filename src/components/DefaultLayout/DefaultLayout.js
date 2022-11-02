import classNames from "classnames/bind";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { userIDSelector } from "../../redux/selectors";
import styles from "./DefaultLayout.module.scss";
import Footer from "./Footer";
import Header from "./Header";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);
const DefaultLayout = ({ children, headerOnly = false }) => {
  const userId = useSelector(userIDSelector);
  let header = <Header />;
  let footer = <Footer />;

  return (
    <div className={cx("wrapper")}>
      {header}
      <div>{children}</div>
      {headerOnly ? <></> : footer}
    </div>
  );
};
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  headerOnly: PropTypes.bool,
};
export default DefaultLayout;
