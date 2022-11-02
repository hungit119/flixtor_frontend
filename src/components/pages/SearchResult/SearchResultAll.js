import axios from "axios";
import classNames from "classnames/bind";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../../constants";
import useQuery from "../../../hooks/useQuery";
import { setFilmsFilter } from "../../../redux/actions/filmsAction";
import { setSearchResultsFull } from "../../../redux/actions/searchAction";
import {
  filmsFilterSelector,
  searchResultFullSelector,
} from "../../../redux/selectors";
import ResponseApiHandle from "../../../utils/ResponseApiHandle";
import FilterBar from "../../FilterBar";
import ListMovies from "../../ListMovies/ListMovies";
import SessionsHome from "../../SessionsHome";
import styles from "./SearchResultAll.module.scss";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);
const SearchResultAll = ({ feature }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const searchInputValue = useQuery().get("keyword");
  const searchResultsFull = useSelector(searchResultFullSelector);
  const filmsFilterByType = useSelector(filmsFilterSelector);
  const searchFilms = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/films/search?keyword=${searchInputValue}`
      );
      ResponseApiHandle(response, (resData) => {
        dispatch(setSearchResultsFull(resData.searchResult));
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const getFilmsByType = async (type, value) => {
    try {
      const response = await axios.get(
        `${apiUrl}/films/byType?key=${type}&type=${value}`
      );
      ResponseApiHandle(response, (resData) => {
        dispatch(setFilmsFilter(resData.filmsByType));
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (feature === "searchByType") {
      getFilmsByType(params.key, params.type);
    } else {
      searchFilms();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInputValue]);
  return (
    <div className={cx("wrapper")}>
      <SessionsHome
        title={`Result for : ${
          feature === "searchByType" ? params.type : searchInputValue
        }`}
      >
        <FilterBar />
        <ListMovies
          items={
            feature === "searchByType" ? filmsFilterByType : searchResultsFull
          }
          pagnition={true}
        />
      </SessionsHome>
    </div>
  );
};

SearchResultAll.propTypes = {
  feature: PropTypes.string,
};

export default SearchResultAll;
