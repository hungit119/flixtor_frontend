import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./UserWatchList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSort } from "@fortawesome/free-solid-svg-icons";
import WatchList from "./WatchList";
import { apiUrl } from "../../../../constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFilmsWatchList } from "../../../../redux/actions/filmsAction";
import { filmsWatchListSelector } from "../../../../redux/selectors";
import TippyHeadLess from "../../../TippyHeadLess";
import MenuDropDownSearch from "../../../MenuDropDownSearch";
const cx = classNames.bind(styles);

const sortMenu = [
  "Default",
  "Recently Added",
  "Name A-Z",
  "IMDb",
  "Release Date",
];

const UserWatchList = () => {
  const [sortBy, setSortBy] = useState("Default");
  const dispatch = useDispatch();
  const filmsWatchList = useSelector(filmsWatchListSelector);
  const getWatchList = async () => {
    try {
      const response = await axios.get(`${apiUrl}/films/watch-list`);
      if (response.data.success) {
        dispatch(setFilmsWatchList(response.data.data));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleClickFilter = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/films/watch-list?sortBy=${sortBy}`
      );
      if (response.data.success) {
        dispatch(setFilmsWatchList(response.data.data));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getWatchList();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-content")}>
        <div className={cx("header-content-title")}>Watch List</div>
      </div>
      <div className={cx("content")}>
        <div className={cx("filter")}>
          <TippyHeadLess
            menuTippy={
              <MenuDropDownSearch
                menus={sortMenu}
                size={"small"}
                grid={12}
                title={"Sort"}
                type={"radio"}
                setOptions={setSortBy}
              />
            }
            position={"bottom-start"}
          >
            <span className={cx("btn-filter")}>
              <FontAwesomeIcon icon={faSort} /> Sort{" "}
              <span className={cx("sort-value")}>
                {sortBy.length === 0 ? "Default" : sortBy}
              </span>
            </span>
          </TippyHeadLess>
          <div
            className={cx("btn-filter", "filter-fea")}
            onClick={handleClickFilter}
          >
            <FontAwesomeIcon icon={faFilter} /> Filter
          </div>
        </div>
        <div className={cx("watch-list")}>
          <WatchList data={filmsWatchList} />
        </div>
      </div>
    </div>
  );
};

export default UserWatchList;
