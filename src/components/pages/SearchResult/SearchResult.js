import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SearchResult.module.scss";
import SessionsLayout from "../../Layouts/SessionsLayout";
import FilterBar from "../../FilterBar";
import SessionsHome from "../../SessionsHome";
import axios from "axios";
import ListMovies from "../../ListMovies/ListMovies";
import { useDispatch, useSelector } from "react-redux";
import {
  filmsFilterSelector,
  searchInputValueSelector,
  searchResultFullSelector,
  searchResultSelector,
} from "../../../redux/selectors";
import {
  setSearchResults,
  setSearchResultsFull,
} from "../../../redux/actions/searchAction";
import { useLocation, useParams } from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
import { apiUrl } from "../../../constants";
import { setFilmsFilter } from "../../../redux/actions/filmsAction";
const cx = classNames.bind(styles);
const SearchResult = ({ feature }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const searchInputValue = useQuery().get("keyword");
  const searchResultsFull = useSelector(searchResultFullSelector);
  const filmsFilterByType = useSelector(filmsFilterSelector);
  const searchFilms = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/films/search?keyword=${searchInputValue}`
      );
      if (response.data.success) {
        dispatch(setSearchResultsFull(response.data.searchResult));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const getFilmsByType = async (type, value) => {
    try {
      const response = await axios.get(
        `${apiUrl}/films/byType?key=${type}&type=${value}`
      );
      if (response.data.success) {
        dispatch(setFilmsFilter(response.data.filmsByType));
      }
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

export default SearchResult;
