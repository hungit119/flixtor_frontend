import axios from "axios";
import classNames from "classnames/bind";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { apiUrl } from "../../../constants";
import { setIsLoadingFilms } from "../../../redux/actions/controlAction";
import { setFilmsFilter } from "../../../redux/actions/filmsAction";
import { filmsFilterSelector } from "../../../redux/selectors";
import ResponseApiHandle from "../../../utils/ResponseApiHandle";
import FilterBar from "../../FilterBar";
import ListMovies from "../../ListMovies/ListMovies";
import SessionsHome from "../../SessionsHome";
import styles from "./FilmsFilter.module.scss";
const cx = classNames.bind(styles);

const FilmFilter = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    state: { genre, type, country, quantity, year },
  } = location;

  const filmsFilter = useSelector(filmsFilterSelector);

  const getFilmsFilter = async () => {
    try {
      dispatch(setIsLoadingFilms(true));
      const response = await axios.post(`${apiUrl}/films/filter`, {
        filters: {
          genre,
          type,
          country,
          quantity,
          year,
        },
      });
      ResponseApiHandle(response, (resData) => {
        dispatch(setFilmsFilter(resData.filmsFilter));
        dispatch(setIsLoadingFilms(false));
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getFilmsFilter();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <SessionsHome title={"Filter Movies"}>
        <>
          <FilterBar />
          <ListMovies items={filmsFilter} pagnition={true} />
        </>
      </SessionsHome>
    </div>
  );
};

export default FilmFilter;
