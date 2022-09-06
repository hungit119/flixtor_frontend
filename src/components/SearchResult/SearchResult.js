import React from "react";
import classNames from "classnames/bind";
import styles from "./SearchResult.module.scss";
import { Link } from "react-router-dom";
import SearchResultItem from "./SearchResultItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import {
  searchInputValueSelector,
  searchResultSelector,
} from "../../redux/selectors";

const cx = classNames.bind(styles);

const SearchResult = ({ width = "891px" }) => {
  const keyword = useSelector(searchInputValueSelector);
  const searchResults = useSelector(searchResultSelector);
  return (
    <div className={cx("wrapper")} style={{ width }}>
      <div className={cx("list-search-result")}>
        {searchResults.map((result) => (
          <SearchResultItem data={result} key={result.id} />
        ))}
        <Link to={`/search?keyword=${keyword}`} className={cx("more")}>
          View all result <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
    </div>
  );
};

export default SearchResult;
