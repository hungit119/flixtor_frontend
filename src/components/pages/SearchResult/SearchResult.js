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
  searchInputValueSelector,
  searchResultFullSelector,
  searchResultSelector,
} from "../../../redux/selectors";
import {
  setSearchResults,
  setSearchResultsFull,
} from "../../../redux/actions/searchAction";
import { useLocation } from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
const cx = classNames.bind(styles);
const SearchResult = () => {
  const dispatch = useDispatch();
  const searchInputValue = useQuery().get("keyword");
  const searchResultsFull = useSelector(searchResultFullSelector);
  const searchFilms = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/films/search?keyword=${searchInputValue}`
      );
      if (response.data.success) {
        dispatch(setSearchResultsFull(response.data.searchResult));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    searchFilms();
  }, [searchInputValue]);
  return (
    <div className={cx("wrapper")}>
      <SessionsHome title={`Result for : ${searchInputValue}`}>
        <FilterBar />
        <ListMovies items={searchResultsFull} pagnition={true} />
      </SessionsHome>
    </div>
  );
};

export default SearchResult;
