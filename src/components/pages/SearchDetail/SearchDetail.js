import axios from "axios";
import classNames from "classnames/bind";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setFilmsFilter } from "../../../redux/actions/filmsAction";
import { filmsFilterSelector } from "../../../redux/selectors";
import ResponseApiHandle from "../../../utils/ResponseApiHandle";
import upperCaseFirst from "../../../utils/UpperCaseFirst";
import FilterBar from "../../FilterBar";
import ListMovies from "../../ListMovies/ListMovies";
import SessionsHome from "../../SessionsHome";
import styles from "./SearchDetail.module.scss";

const cx = classNames.bind(styles);

const SearchDetail = ({ typeKeyword }) => {
  const dispatch = useDispatch();
  let params = useParams();
  let { key, type } = params;
  const filmsByType = useSelector(filmsFilterSelector);

  const getFilmsByType = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/films/byType?key=${key}&type=${type}`
      );
      ResponseApiHandle(response, (resData) => {
        dispatch(setFilmsFilter(resData.filmsByType));
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getFilmsByType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <div className={cx("wrapper")}>
      <SessionsHome title={`${upperCaseFirst(type)} Movies, TV Shows`}>
        <>
          <FilterBar type={key} value={type} />
          <ListMovies items={filmsByType} pagnition={true} />
        </>
      </SessionsHome>
    </div>
  );
};

export default SearchDetail;
