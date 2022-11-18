import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./MovieItemSkeleton.module.scss";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);

const MovieItemSkeleton = ({ col = "col-cus", type }) => {
  return (
    <div className={cx(col, "wrapper")}>
      {type === "watch-list" ? (
        <span className={cx("delete-icon")}>
          <FontAwesomeIcon icon={faXmark} className={cx("xmart-icon")} />
        </span>
      ) : (
        <></>
      )}
      <div className={cx("movie")}>
        <div className={cx("movie-image")}>
          <div>
            <Skeleton height={"230px"} />
          </div>
        </div>
        <div className={cx("movie-info")}>
          <div className={cx("movie-title")}>
            <Skeleton />
          </div>
          <div className={cx("movie-body")}>
            <span className={cx("movie-meta")}>
              <Skeleton width={"50px"} />
            </span>
            <Skeleton width={"40px"} />
          </div>
        </div>
      </div>
    </div>
  );
};
MovieItemSkeleton.propTypes = {
  col: PropTypes.string,
  type: PropTypes.string,
};

export default MovieItemSkeleton;
