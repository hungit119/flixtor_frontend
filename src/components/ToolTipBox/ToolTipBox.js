import React from "react";
import className from "classnames/bind";
import styles from "./ToolTipBox.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
const cx = className.bind(styles);

const ToolTipBox = ({ href, item }) => {
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
              <Link key={index} to={"#"}>
                {country},
              </Link>
            ))
          ) : (
            <Link to={"#"}>{item.countries}</Link>
          )}
        </div>
        <div>
          <span>Genre : </span>
          {item.genres.includes(",") ? (
            item.genres.split(",").map((genre, index) => (
              <Link key={index} to={"#"}>
                {genre},
              </Link>
            ))
          ) : (
            <Link to={"#"}>{item.genres}</Link>
          )}
        </div>
      </div>
      <div className={cx("actions")}>
        <span className={cx("watch")}>
          <Link to={href ? href : "#"}>
            <FontAwesomeIcon icon={faPlay} /> Watch now
          </Link>
        </span>
        <span className={cx("bookmark")}>
          <Link to={"#"}>
            <FontAwesomeIcon icon={faHeart} className={cx("icon-heart")} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ToolTipBox;
