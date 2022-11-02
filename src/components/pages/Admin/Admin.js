import {
  faAdd,
  faList,
  faPeopleRoof,
  faTrash,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Route, Routes } from "react-router-dom";
import { userRuleSelector } from "../../../redux/selectors";
import styles from "./Admin.module.scss";
import PermissionRouter from "./components/PermissionRouter/PermissionRouter";
import privateRouter from "./routes";
const cx = className.bind(styles);

const Admin = () => {
  const userRule = useSelector(userRuleSelector);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sidebar")}>
        <ul className={cx("sidebar-list")}>
          <NavLink
            to={"/admin/dashboard"}
            className={(nav) => cx("side-item", nav.isActive ? "active" : "")}
          >
            <FontAwesomeIcon icon={faList} className={cx("icon")} />
            <span>Movie list</span>
          </NavLink>
          <NavLink
            to={"/admin/add"}
            className={(nav) => cx("side-item", nav.isActive ? "active" : "")}
          >
            <FontAwesomeIcon icon={faAdd} className={cx("icon")} />
            <span>Create a movie</span>
          </NavLink>
          <NavLink
            to={"/admin/delete"}
            className={(nav) => cx("side-item", nav.isActive ? "active" : "")}
          >
            <FontAwesomeIcon icon={faTrash} className={cx("icon")} />
            <span>Delete movies</span>
          </NavLink>
          {userRule === 3 && (
            <NavLink
              to={"/admin/user"}
              className={(nav) => cx("side-item", nav.isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faUserGroup} className={cx("icon")} />
              <span>Users</span>
            </NavLink>
          )}
        </ul>
      </div>
      <div className={cx("content")}>
        <div className={cx("header-content")}>
          <FontAwesomeIcon className={cx("admin-icon")} icon={faPeopleRoof} />{" "}
          Flixtor Admin
        </div>
        <hr />
        <Routes>
          {privateRouter.map((route, index) => {
            let Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <PermissionRouter permission={route.permission}>
                    <Page typeFunction={route.typeFunction} />
                  </PermissionRouter>
                }
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
