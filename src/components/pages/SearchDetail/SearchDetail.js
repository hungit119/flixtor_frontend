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
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import upperCaseFirst from "../../../utils/UpperCaseFirst";
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

const SearchDetail = () => {
  const [optionsGenre, setOptionsGenre] = useState([]);
  const [optionsType, setOptionsType] = useState([]);
  const [optionsCountry, setOptionsCountry] = useState([]);
  const [optionsYear, setOptionsYear] = useState([]);
  const [optionsQuantity, setOptionsQuantity] = useState([]);
  const [optionsSort, setOptionsSort] = useState("Default");

  let params = useParams();
  let { key, type } = params;
  useEffect(() => {
    if (key === "genre") {
      setOptionsGenre([type]);
      setOptionsCountry([]);
    } else {
      setOptionsCountry([type]);
      setOptionsGenre([]);
    }
  }, [key, type]);

  const handleSubmitFilter = (e) => {
    const options = {
      genre: optionsGenre,
      type: optionsType,
      country: optionsCountry,
      year: optionsYear,
      quantity: optionsQuantity,
      sort: optionsSort,
    };
    console.log(options);
  };

  return (
    <div className={cx("wrapper")}>
      <SessionsHome title={"Filter Movies"}>
        <>
          <ul className={cx("list-filter")}>
            <li className={cx("list-filter-item")}>
              <TippyHeadLess
                position="bottom-start"
                menuTippy={
                  <MenuDropDownSearch
                    menus={genreMenu}
                    size={"large"}
                    grid={3}
                    title={"genre"}
                    setOptions={setOptionsGenre}
                  />
                }
              >
                <button className={cx("item")}>
                  <FontAwesomeIcon icon={faFolderOpen} />
                  <span>Genre</span>
                  <span className={cx("value")}>
                    {optionsGenre.length <= 0 && key === "genre"
                      ? type
                      : optionsGenre.length === 1
                      ? optionsGenre[0]
                      : optionsGenre.length > 1
                      ? `${optionsGenre.length} selected`
                      : "All"}
                  </span>
                </button>
              </TippyHeadLess>
            </li>
            <li className={cx("list-filter-item")}>
              <TippyHeadLess
                position="bottom-start"
                menuTippy={
                  <MenuDropDownSearch
                    menus={typeMenu}
                    size={"small"}
                    grid={12}
                    title={"type"}
                    setOptions={setOptionsType}
                  />
                }
              >
                <button className={cx("item")}>
                  <FontAwesomeIcon icon={faClone} />
                  <span>Type</span>
                  <span className={cx("value")}>
                    {optionsType.length <= 0
                      ? "All"
                      : optionsType.length === 1
                      ? optionsType[0]
                      : `${optionsType.length} selected`}
                  </span>
                </button>
              </TippyHeadLess>
            </li>
            <li className={cx("list-filter-item")}>
              <TippyHeadLess
                position="bottom-start"
                menuTippy={
                  <MenuDropDownSearch
                    menus={countryMenu}
                    size={"large"}
                    grid={3}
                    title={"country"}
                    setOptions={setOptionsCountry}
                  />
                }
              >
                <button className={cx("item")}>
                  <FontAwesomeIcon icon={faEarth} />
                  <span>Country</span>
                  <span className={cx("value")}>
                    {optionsCountry.length <= 0 && key === "country"
                      ? type
                      : optionsCountry.length === 1
                      ? optionsCountry[0]
                      : optionsCountry.length > 1
                      ? `${optionsCountry.length} selected`
                      : "All"}
                  </span>
                </button>
              </TippyHeadLess>
            </li>
            <li className={cx("list-filter-item")}>
              <TippyHeadLess
                position="bottom-start"
                menuTippy={
                  <MenuDropDownSearch
                    menus={yearMenu}
                    size={"medium"}
                    grid={4}
                    title={"year"}
                    setOptions={setOptionsYear}
                  />
                }
              >
                <button className={cx("item")}>
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <span>Year</span>
                  <span className={cx("value")}>
                    {optionsYear.length <= 0
                      ? "All"
                      : optionsYear.length === 1
                      ? optionsYear[0]
                      : `${optionsYear.length} selected`}
                  </span>
                </button>
              </TippyHeadLess>
            </li>
            <li className={cx("list-filter-item")}>
              <TippyHeadLess
                position="bottom-start"
                menuTippy={
                  <MenuDropDownSearch
                    menus={quantityMenu}
                    size={"small"}
                    grid={12}
                    title={"quantity"}
                    setOptions={setOptionsQuantity}
                  />
                }
              >
                <button className={cx("item")}>
                  <FontAwesomeIcon icon={faCube} />
                  <span>Quantity</span>
                  <span className={cx("value")}>
                    {optionsQuantity.length <= 0
                      ? "All"
                      : optionsQuantity.length === 1
                      ? optionsQuantity[0]
                      : `${optionsQuantity.length} selected`}
                  </span>
                </button>
              </TippyHeadLess>
            </li>
            <li className={cx("list-filter-item")}>
              <TippyHeadLess
                position="bottom-start"
                menuTippy={
                  <MenuDropDownSearch
                    menus={sortMenu}
                    size={"small"}
                    grid={12}
                    title={"sort"}
                    type="radio"
                    setOptions={setOptionsSort}
                  />
                }
              >
                <button className={cx("item")}>
                  <FontAwesomeIcon icon={faSort} />
                  <span>Sort</span>
                  <span className={cx("value")}>
                    {optionsSort.length === 0 || optionsSort === "Default"
                      ? "Default"
                      : upperCaseFirst(optionsSort)}
                  </span>
                </button>
              </TippyHeadLess>
            </li>
            <li className={cx("btn-filter")} onClick={handleSubmitFilter}>
              <FontAwesomeIcon icon={faFilter} />
              <span>Filter</span>
            </li>
          </ul>
          {/* <ListMovies items={movies} /> */}
        </>
      </SessionsHome>
    </div>
  );
};

export default SearchDetail;
