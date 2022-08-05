import React from "react";
import className from "classnames/bind";
import styles from "./Home.module.scss";
import ButtonGroupShare from "../../ButtonGroupShare";
import SessionsHome from "../../SessionsHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faList,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Route, Routes } from "react-router-dom";
import ListMovies from "../../ListMovies/ListMovies";
const cx = className.bind(styles);

const tabs = [
  { title: "Movies", icon: <FontAwesomeIcon icon={faPlayCircle} /> },
  { title: "TV-Shows", icon: <FontAwesomeIcon icon={faList} /> },
  { title: "Trending", icon: <FontAwesomeIcon icon={faChartLine} /> },
];

const HomePage = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content-header")}>
        <h1 className={cx("content-header-title")}>
          flixtor.video - Watch the Latest Movies and TV Shows for Free with No
          registration!
        </h1>
        <span className={cx("content-header-description")}>
          flixtor.video - flixtors, flixtor, flixtor movies, flixtor online
          movies, movies flixtor
        </span>
        <span className={cx("content-header-description")}>
          Watch your movies, tv shows online free in flixtor.video - no tracking
          - no ads - no virus.
        </span>
        <span className={cx("content-header-btn-shares")}>
          <ButtonGroupShare />
        </span>
      </div>
      <SessionsHome tabs={tabs} viewall="true"></SessionsHome>
    </div>
  );
};

export default HomePage;
