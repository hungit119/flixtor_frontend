import classNames from "classnames/bind";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuItemProfile.module.scss";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);

const MenuItemProfile = ({ icon, title, type, to, onClick }) => {
  return (
    <>
      {type === "button" ? (
        <div className={cx("wrapper")}>
          {icon} {title}
        </div>
      ) : (
        <NavLink
          to={to}
          className={(nav) => cx("wrapper", { active: nav.isActive })}
        >
          {icon} {title}
        </NavLink>
      )}
    </>
  );
};
MenuItemProfile.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};
export default MenuItemProfile;
