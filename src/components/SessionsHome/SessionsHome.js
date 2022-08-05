import React from "react";
import className from "classnames/bind";
import styles from "./SessionsHome.module.scss";
import { Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
const cx = className.bind(styles);
const SessionsHome = ({ children, title, tabs = [], viewall = false }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-sessions")}>
        <div className={cx("header-sessions-left")}>
          <h1 className={cx("title")}>Recommended</h1>
          <nav className={cx("tabs")}>
            {tabs.map((tab, index) => (
              <NavLink
                className={(nav) => cx("tab-item", { active: nav.isActive })}
                to={`/home/${tab.title.toLowerCase()}`}
                key={index}
              >
                <span>{tab.icon}</span> {tab.title}
              </NavLink>
            ))}
          </nav>
        </div>
        {viewall ? (
          <span className={cx("header-sessions-right")}>
            View all <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </span>
        ) : (
          <></>
        )}
      </div>
      {children}
    </div>
  );
};

export default SessionsHome;
