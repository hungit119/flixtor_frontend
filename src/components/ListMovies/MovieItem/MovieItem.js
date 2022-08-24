import React from "react";
import className from "classnames/bind";
import styles from "../ListMovies.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import TippyWrapper from "../../TippyWrapper";
import ToolTipBox from "../../ToolTipBox";
import { Link } from "react-router-dom";
const cx = className.bind(styles);

const MovieItem = ({ item, col = "col-cus" }) => {
  const href = `/${item.type.toLowerCase()}/${item.film_id}`;
  return (
    <div className={cx(col)}>
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
