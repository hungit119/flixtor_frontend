import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SessionsLayout.module.scss";
import SessionsHome from "../../SessionsHome";
import ListMovies from "../../ListMovies/ListMovies";
import TippyHeadLess from "../../TippyHeadLess";
import MenuDropDownSearch from "../../MenuDropDownSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClone,
  faCube,
  faEarth,
  faFilter,
  faFolderOpen,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import upperCaseFirst from "../../../utils/UpperCaseFirst";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import {
  setFilmsTrending,
  setFilmsTypeMovies,
  setFilmsTypeTv,
} from "../../../redux/actions/filmsAction";
import { useDispatch, useSelector } from "react-redux";
import {
  filmsTypeAllMoviesSelector,
  filmsTypeAllTvSelector,
  filmsTypeAllTrendingSelector,
} from "../../../redux/selectors";
import FilterBar from "../../FilterBar";
import ResponseApiHandle from "../../../utils/ResponseApiHandle";
const cx = classNames.bind(styles);
const SessionsLayout = ({ title, root }) => {
  const dispatch = useDispatch();
  const filmsType = useSelector(
    root === "movie"
      ? filmsTypeAllMoviesSelector
      : root === "tv-series"
      ? filmsTypeAllTvSelector
      : filmsTypeAllTrendingSelector
  );
  const getFilms = async (urlApi, actionDispatch) => {
    try {
      const response = await axios.get(urlApi);
      ResponseApiHandle(response, (resData) => {
        dispatch(actionDispatch(resData.filmsType));
      });
    } catch (errors) {
      console.log(errors.message);
    }
  };
  useEffect(() => {
    getFilms("http://localhost:8000/api/films/type/movie", setFilmsTypeMovies);
    getFilms("http://localhost:8000/api/films/type/tv-series", setFilmsTypeTv);
    getFilms("http://localhost:8000/api/films/>=/imdb/9", setFilmsTrending);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [root]);
  return (
    <div className={cx("wrapper")}>
      <SessionsHome title={title}>
        <>
          <FilterBar />
          <ListMovies items={filmsType} pagnition={true} />
        </>
      </SessionsHome>
    </div>
  );
};

export default SessionsLayout;
