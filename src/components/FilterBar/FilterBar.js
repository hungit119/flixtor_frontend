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
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  countryMenu,
  genreMenu,
  quantityMenu,
  sortMenu,
  typeMenu,
  yearMenu,
} from "../../constants";
import { setFilmsFilter } from "../../redux/actions/filmsAction";
import ResponseApiHandle from "../../utils/ResponseApiHandle";
import upperCaseFirst from "../../utils/UpperCaseFirst";
import MenuDropDownSearch from "../MenuDropDownSearch";
import TippyHeadLess from "../TippyHeadLess";
import styles from "./FilterBar.module.scss";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);

const FilterBar = ({ type, value }) => {
  const [optionsGenre, setOptionsGenre] = useState([]);
  const [optionsType, setOptionsType] = useState([]);
  const [optionsCountry, setOptionsCountry] = useState([]);
  const [optionsYear, setOptionsYear] = useState([]);
  const [optionsQuantity, setOptionsQuantity] = useState([]);
  const [optionsSort, setOptionsSort] = useState("Default");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const getFilmsFilter = async (options) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/films/filter",
        {
          filters: {
            ...options,
          },
        }
      );
      ResponseApiHandle(response, (resData) => {
        dispatch(setFilmsFilter(resData.filmsFilter));
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmitFilter = async (e) => {
    const options = {
      genre: optionsGenre,
      type: optionsType,
      country: optionsCountry,
      year: optionsYear,
      quantity: optionsQuantity,
      sort: optionsSort,
    };

    if (params.redirect === "re-route") {
      await getFilmsFilter(options);
    }
    navigate("/films-filter/re-route", { state: options });
  };
  useEffect(() => {
    if (type === "genre") {
      setOptionsGenre([value]);
      setOptionsCountry([]);
    } else {
      setOptionsCountry([value]);
      setOptionsGenre([]);
    }
  }, [type, value]);

  return (
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
              {optionsGenre.length <= 0 && type === "genre"
                ? value
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
              {optionsCountry.length <= 0 && type === "country"
                ? value
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
  );
};

FilterBar.propTypes = {
  type: PropTypes.any,
  value: PropTypes.any,
};

export default FilterBar;
