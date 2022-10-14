import classNames from "classnames/bind";
import React from "react";
import MovieItem from "../../../../ListMovies/MovieItem";
import styles from "./WatchListItem.module.scss";
const cx = classNames.bind(styles);

const WatchListItem = ({ data }) => {
  return <MovieItem item={data} type={"watch-list"} />;
};

export default WatchListItem;
