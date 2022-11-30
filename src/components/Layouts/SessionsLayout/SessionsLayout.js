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
import PropTypes from "prop-types";
import { setIsLoadingFilms } from "../../../redux/actions/controlAction";
import { apiUrl } from "../../../constants";

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
      dispatch(setIsLoadingFilms(true));
      const response = await axios.get(urlApi);
      ResponseApiHandle(response, (resData) => {
        dispatch(actionDispatch(resData.filmsType));
        dispatch(setIsLoadingFilms(false));
      });
    } catch (errors) {
      console.log(errors.message);
    }
  };
  useEffect(() => {
    getFilms(`${apiUrl}/films/type/movie`, setFilmsTypeMovies);
    getFilms(`${apiUrl}/films/type/TV-Series`, setFilmsTypeTv);
    getFilms(`${apiUrl}/films/>=/imdb/9`, setFilmsTrending);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [root]);
  console.log(filmsType);
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

SessionsLayout.propTypes = {
  title: PropTypes.string,
  root: PropTypes.string,
};

export default SessionsLayout;
