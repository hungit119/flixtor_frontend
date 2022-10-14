import axios from "axios";
import classNames from "classnames/bind";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilmsTrending,
  setFilmsTypeMovies,
  setFilmsTypeTv,
} from "../../../redux/actions/filmsAction";
import {
  filmsTypeAllMoviesSelector,
  filmsTypeAllTrendingSelector,
  filmsTypeAllTvSelector,
} from "../../../redux/selectors";
import ResponseApiHandle from "../../../utils/ResponseApiHandle";
import FilterBar from "../../FilterBar";
import ListMovies from "../../ListMovies/ListMovies";
import SessionsHome from "../../SessionsHome";
import styles from "./SessionsLayout.module.scss";
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
  // Handle get film
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
