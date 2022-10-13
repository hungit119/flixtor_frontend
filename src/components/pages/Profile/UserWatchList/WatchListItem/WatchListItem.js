import React from "react";
import classNames from "classnames/bind";
import styles from "./WatchListItem.module.scss";
import { Col } from "react-bootstrap";
import MovieItem from "../../../../ListMovies/MovieItem";
const cx = classNames.bind(styles);

const WatchListItem = ({ data }) => {
  return <MovieItem item={data} type={"watch-list"} />;
};

export default WatchListItem;
