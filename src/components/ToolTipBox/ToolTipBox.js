import {
  faHeart,
  faMinus,
  faPlay,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import className from "classnames/bind";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUrl, NOTIFY_ALL_TOAST } from "../../constants";
import ResponseApiHandle from "../../utils/ResponseApiHandle";
import styles from "./ToolTipBox.module.scss";
const cx = className.bind(styles);

const ToolTipBox = ({ href, item }) => {
  const [addedToWatchlist, setAddedToWatchlist] = useState(false);

  const handleClickBookmart = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/film/watchlist/addedWatchlist?fid=${item.id}`
      );
      ResponseApiHandle(response, async (resData) => {
        if (resData.rows.length === 0) {
          setAddedToWatchlist(true);
          // add this film to watchlist with user_id = current user id
          const response = await axios.post(`${apiUrl}/film/watchlist/add`, {
            fid: item.id,
          });
          ResponseApiHandle(response, (resData) => {
            toast.success("This film added to my watchlist!", {
              toastId: NOTIFY_ALL_TOAST,
              position: "bottom-right",
            });
          });
        } else {
          toast.success("This film was added to watchlist", {
            toastId: NOTIFY_ALL_TOAST,
            position: "bottom-right",
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>{item.title}</div>
      <div className={cx("meta")}>
        <span className={cx("imdb")}>
          <FontAwesomeIcon className={cx("icon")} icon={faStar} /> {item.imdb}
        </span>
        <span>{item.year}</span>
        <span>{item.times} min</span>
        <span className={cx("quantity")}>{item.quantity}</span>
      </div>
      <div className={cx("description")}>{item.description}</div>
      <div className={cx("origin")}>
        <div>
          <span>Country : </span>

          {item.countries.includes(",") ? (
            item.countries.split(",").map((country, index) => (
              <Link key={index} to={`/search/country/${country.trim()}`}>
                {country},
              </Link>
            ))
          ) : (
            <Link to={`/search/country/${item.countries.trim()}`}>
              {item.countries}
            </Link>
          )}
        </div>
        <div>
          <span>Genre : </span>
          {item.genres.includes(",") ? (
            item.genres.split(",").map((genre, index) => (
              <Link key={index} to={`/search/genre/${genre.trim()}`}>
                {genre},
              </Link>
            ))
          ) : (
            <Link to={`/search/genre/${item.genres.trim()}`}>
              {item.genres}
            </Link>
          )}
        </div>
      </div>
      <div className={cx("actions")}>
        <span className={cx("watch")}>
          <Link to={href ? href : "#"}>
            <FontAwesomeIcon icon={faPlay} /> Watch now
          </Link>
        </span>
        <span className={cx("bookmark")} onClick={handleClickBookmart}>
          {addedToWatchlist ? (
            <FontAwesomeIcon icon={faMinus} className={cx("icon-heart")} />
          ) : (
            <FontAwesomeIcon icon={faHeart} className={cx("icon-heart")} />
          )}
        </span>
      </div>
    </div>
  );
};

export default ToolTipBox;
