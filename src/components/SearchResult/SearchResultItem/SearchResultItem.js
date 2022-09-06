import React from "react";
import classNames from "classnames/bind";
import styles from "./SearchResultItem.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useSpring } from "framer-motion";

const cx = classNames.bind(styles);

const SearchResultItem = ({ data }) => {
  return (
    <Link
      to={`/${data.type === "TV-Series" ? "tv" : data.type}/${data.id}`}
      className={cx("wrapper")}
    >
      <div className={cx("search-item")}>
        <img className={cx("img-search-item")} src={data.poster} alt="poster" />
        <div className={cx("info-search")}>
          <div className={cx("title")}>{data.title}</div>
          <div className={cx("body")}>
            <span>
              <FontAwesomeIcon icon={faStar} /> {data.imdb}
            </span>
            <span className={cx("dot")}>&#8226;</span>
            <span>{data.year}</span>
            <span className={cx("dot")}>&#8226;</span>
            <span>{data.times === 1 ? "N/A" : data.times} min</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultItem;
