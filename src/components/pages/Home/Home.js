import {
  faChartLine,
  faList,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import className from "classnames/bind";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ButtonGroupShare from "../../ButtonGroupShare";
import ListMovies from "../../ListMovies/ListMovies";
import SessionsHome from "../../SessionsHome";
import styles from "./Home.module.scss";
import { setFilmsMovies } from "../../../redux/actions/filmsAction";
import { filmsMoviesSelector } from "../../../redux/selectors";
const cx = className.bind(styles);

const tabs = [
  {
    title: "Movies",
    icon: <FontAwesomeIcon icon={faPlayCircle} />,
    href: "movies",
  },
  {
    title: "TV-Shows",
    icon: <FontAwesomeIcon icon={faList} />,
    href: "tv-shows",
  },
  {
    title: "Trending",
    icon: <FontAwesomeIcon icon={faChartLine} />,
    href: "trending",
  },
];

const HomePage = () => {
  const dispatch = useDispatch();
  let params = useParams();
  const filmsMovies = useSelector(filmsMoviesSelector);
  const getFilmsMovies = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/films/type/movie"
      );
      if (response.data.success) {
        dispatch(setFilmsMovies(response.data.filmsMovies));
      }
    } catch (errors) {
      console.log(errors.message);
    }
  };

  useEffect(() => {
    getFilmsMovies();
  }, []);

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
      <SessionsHome title={"Recommended"} tabs={tabs}>
        {params.param.match("movies") && <ListMovies items={filmsMovies} />}
        {/* {params.param.match("tv-shows") && <ListMovies items={tvseries} />}
        {params.param.match("trending") && <ListMovies items={trending} />} */}
      </SessionsHome>
      {/* <SessionsHome title={"Lastest Movies"} viewall={true} href="movies">
        <ListMovies items={movies} />
      </SessionsHome>
      <SessionsHome title={"Lastest TV Series"} viewall={true} href="tv-series">
        <ListMovies items={tvseries} />
      </SessionsHome> */}
    </div>
  );
};

export default HomePage;
