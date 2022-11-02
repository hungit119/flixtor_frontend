import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  searchInputValueSelector,
  searchResultSelector,
} from "../../redux/selectors";
import styles from "./SearchResult.module.scss";
import SearchResultItem from "./SearchResultItem";
import PropTypes from "prop-types";

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

SearchResult.propTypes = {
  with: PropTypes.string,
};

export default SearchResult;
