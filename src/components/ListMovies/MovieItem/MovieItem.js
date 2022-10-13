import React from "react";
import className from "classnames/bind";
import styles from "./MovieItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faXmark,
  faXmarkSquare,
} from "@fortawesome/free-solid-svg-icons";
import TippyWrapper from "../../TippyWrapper";
import ToolTipBox from "../../ToolTipBox";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { apiUrl, NOTIFY_ALL_TOAST } from "../../../constants";
import { setFilmsWatchList } from "../../../redux/actions/filmsAction";
import { toast } from "react-toastify";
import ResponseApiHandle from "../../../utils/ResponseApiHandle";
const cx = className.bind(styles);

const MovieItem = ({ item, col = "col-cus", type }) => {
  const dispatch = useDispatch();
  const href = `/${
    item.type.toLowerCase() === "tv-series" ? "tv" : item.type.toLowerCase()
  }/${item.id}`;
  const handleClickDeleteWatchList = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/film/watch-list/remove?fid=${item.id}`
      );
      ResponseApiHandle(response, (resData) => {
        dispatch(setFilmsWatchList(resData.data));
        toast.success("Deleted film from watch list !", {
          toastId: NOTIFY_ALL_TOAST,
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={cx(col, "wrapper")}>
      {type === "watch-list" ? (
        <span
          className={cx("delete-icon")}
          onClick={handleClickDeleteWatchList}
        >
          <FontAwesomeIcon icon={faXmark} className={cx("xmart-icon")} />
        </span>
      ) : (
        <></>
      )}
      <TippyWrapper
        content={<ToolTipBox href={href} item={item} />}
        position="right"
        animation={true}
      >
        <Link to={href}>
          <div className={cx("movie")}>
            <div className={cx("movie-image")}>
              <img
                className={cx("movie-image-src")}
                src={item.poster}
                alt="img"
              />
              <div className={cx("movie-overlay")}></div>
              <div className={cx("movie-overlay-icon-wrapper")}>
                <FontAwesomeIcon
                  className={cx("movie-play-icon")}
                  icon={faCirclePlay}
                />
              </div>
            </div>
            <div className={cx("movie-info")}>
              <div className={cx("movie-title")}>{item.title}</div>
              <div className={cx("movie-body")}>
                <span className={cx("movie-meta")}>
                  <span>{item.year}</span> &#8226; <span>{item.times} min</span>
                </span>
                <span className={cx("movies-type")}>{item.type}</span>
              </div>
            </div>
            <div className={cx("movie-quantity")}>{item.quantity}</div>
          </div>
        </Link>
      </TippyWrapper>
    </div>
  );
};

export default MovieItem;
