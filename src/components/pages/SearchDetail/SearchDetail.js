import {
  faCalendarDays,
  faClone,
  faCube,
  faEarth,
  faFilter,
  faFolderOpen,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { setFilmsFilter } from "../../../redux/actions/filmsAction";
import { filmsFilterSelector } from "../../../redux/selectors";
import upperCaseFirst from "../../../utils/UpperCaseFirst";
import FilterBar from "../../FilterBar";
import ListMovies from "../../ListMovies/ListMovies";
import MenuDropDownSearch from "../../MenuDropDownSearch";
import SessionsHome from "../../SessionsHome";
import TippyHeadLess from "../../TippyHeadLess";
import styles from "./SearchDetail.module.scss";

const cx = classNames.bind(styles);

const genreMenu = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Costume",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Game-Show",
  "History",
  "Horror",
  "Kungfu",
  "Music",
  "Mystery",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Sport",
  "Thriller",
  "TV Show",
  "War",
  "Western",
  "Include all selected",
];
const typeMenu = ["Movie", "TV-Series"];
const countryMenu = [
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Canada",
  "China",
  "Czech Republic",
  "Denmark",
  "Finland",
  "France",
  "Germany",
  "Hong Kong",
  "Hungary",
  "India",
  "International",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Philippines",
  "Poland",
  "Romania",
  "Russia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "United Kingdom",
  "United States",
];
const yearMenu = [
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
  "2009",
  "2008",
  "2007",
  "2006",
  "2005",
  "2004",
  "2003",
  "2002",
  "2000s",
  "1990s",
  "1980s",
  "1970s",
  "1960s",
  "1950s",
  "1940s",
  "1930s",
  "1920s",
  "1910s",
  "1900s",
];
const quantityMenu = ["HD", "HDRip", "SD", "TS", "CAM"];
const sortMenu = [
  "Default",
  "Recently Added",
  "Most Watched",
  "Name",
  "IMDb",
  "Release Date",
  "Site Rating",
];
const optionsFilter = [
  {
    menu: genreMenu,
    size: "large",
    icon: faFolderOpen,
    title: "Genre",
    value: "All",
  },
  {
    menu: typeMenu,
    size: "small",
    icon: faFolderOpen,
    title: "Type",
    value: "All",
    grid: 12,
  },
  {
    menu: countryMenu,
    size: "large",
    icon: faEarth,
    title: "Country",
    value: "All",
  },
  {
    menu: yearMenu,
    size: "medium",
    icon: faCalendarDays,
    title: "Year",
    value: "All",
  },
  {
    menu: quantityMenu,
    size: "small",
    icon: faCube,
    title: "Quantity",
    value: "All",
    grid: 12,
  },
  {
    menu: sortMenu,
    size: "small",
    icon: faFilter,
    title: "Sort",
    value: "All",
    grid: 12,
  },
];

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
      if (response.data.success) {
        dispatch(setFilmsFilter(response.data.filmsByType));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getFilmsByType();
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
