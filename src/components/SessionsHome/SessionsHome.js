import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./SessionsHome.module.scss";
const cx = className.bind(styles);
const SessionsHome = ({
  children,
  title,
  tabs = [],
  viewall = false,
  href = "#",
}) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-sessions")}>
        <div className={cx("header-sessions-left")}>
          <h1 className={cx("title")}>{title}</h1>
          <nav className={cx("tabs")}>
            {tabs.map((tab, index) => (
              <NavLink
                className={(nav) => cx("tab-item", { active: nav.isActive })}
                to={`/home/${tab.href.toLowerCase()}`}
                key={index}
              >
                <span>{tab.icon}</span> {tab.title}
              </NavLink>
            ))}
          </nav>
        </div>
        {viewall ? (
          <span className={cx("header-sessions-right")}>
            <Link to={`/${href}`}>
              View all <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Link>
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
