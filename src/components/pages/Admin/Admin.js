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
          <Link to={"/admin/update"} className={cx("side-item")}>
            <FontAwesomeIcon icon={faEdit} className={cx("icon")} />
            <span>Movie Update</span>
          </Link>
          <Link to={"/admin/delete"} className={cx("side-item")}>
            <FontAwesomeIcon icon={faTrash} className={cx("icon")} />
            <span>Delete movies</span>
          </Link>
        </ul>
      </div>
      <div className={cx("content")}>
        <Routes>
          <Route path="/" element={<h1>Danh sách phim</h1>} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<h1>Cập nhật phim</h1>} />
          <Route path="/delete" element={<h1>Xóa phim</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
