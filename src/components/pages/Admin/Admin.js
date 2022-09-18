import React from "react";
import className from "classnames/bind";
import styles from "./Admin.module.scss";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faEdit,
  faList,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Add from "./content/Add";
import List from "./content/List";
import Film from "./content/Film/Film";
import Delete from "./content/Delete";
const cx = className.bind(styles);

const Admin = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sidebar")}>
        <ul className={cx("sidebar-list")}>
          <Link to={"/admin"} className={cx("side-item")}>
            <FontAwesomeIcon icon={faList} className={cx("icon")} />
            <span>Movie list</span>
          </Link>
          <Link to={"/admin/add"} className={cx("side-item")}>
            <FontAwesomeIcon icon={faAdd} className={cx("icon")} />
            <span>Create a movie</span>
          </Link>
          <Link to={"/admin/delete"} className={cx("side-item")}>
            <FontAwesomeIcon icon={faTrash} className={cx("icon")} />
            <span>Delete movies</span>
          </Link>
        </ul>
      </div>
      <div className={cx("content")}>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/film/:id" element={<Film />} />
          <Route
            path="/film/update/:id"
            element={<Add typeFunction="update" />}
          />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
