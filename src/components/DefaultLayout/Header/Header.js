import React, { useRef, useState } from "react";
import classNames from "classnames/bind";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHeart,
  faSearch,
  faSignOut,
  faSortDown,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import TippyHeadLess from "../../TippyHeadLess";
import MenuUserInfor from "../../MenuUserInfor/MenuUserInfor";
import TippyWrapper from "../../TippyWrapper";
import MenuItem from "../../MenuItem";
const cx = classNames.bind(styles);

const menuItemsGenre = [
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
  "TV-Show",
  "War",
  "Western",
];
const menuItemCountry = [
  "  Argentina",
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
const Header = () => {
  const [login, setLogin] = useState(true);
  const [resultSearch, setResultSearch] = useState([]);
  let href = window.location.href;
  let inputSearchHeaderRef = useRef(null);
  const handleSearchClick = () => {
    inputSearchHeaderRef.current.focus();
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("flefix")}>
          <Col
            lg={href.match("home") ? 10 : 7}
            className={cx("flefix-content")}
          >
            <Row className={cx("logo-wrapper")}>
              <Col lg={3} className={cx(href.match("home") ? "mr-120" : "")}>
                <Link className={cx("logo")} to="/">
                  <Image
                    src="https://s1.bunnycdn.ru/assets/sites/flixtor/logo.png"
                    alt="logo"
                    width={30}
                    height={30}
                    className={cx("logo-image")}
                  />
                  <h2 className={cx("logo-title")}>FlixTor.video</h2>
                </Link>
              </Col>
              <Col lg={href.match("home") ? 6 : 8} className={cx("nav-menu")}>
                <Row className={cx("nav-menu-list")}>
                  <Col className={cx("nav-menu-item")}>
                    <Link to={"/home"}>HOME</Link>
                  </Col>
                  <Col className={cx("nav-menu-item")}>
                    <TippyWrapper
                      content={
                        <MenuItem root={"genre"} items={menuItemsGenre} />
                      }
                      position="bottom-start"
                    >
                      <span>GENRE</span>
                    </TippyWrapper>
                  </Col>
                  <Col className={cx("nav-menu-item")}>
                    <TippyWrapper
                      content={
                        <MenuItem root={"country"} items={menuItemCountry} />
                      }
                      position="bottom-start"
                    >
                      <span>COUNTRY</span>
                    </TippyWrapper>
                  </Col>
                  <Col className={cx("nav-menu-item")}>
                    <Link to={"/movies"}>MOVIES</Link>
                  </Col>
                  <Col className={cx("nav-menu-item")}>
                    <Link to={"/tv-series"}>TV SHOWS</Link>
                  </Col>
                  <Col className={cx("nav-menu-item")}>
                    <Link to={"/top-imdb"}>TOP IMDB</Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={href.match("home") ? 2 : 5} className={cx("left")}>
            <Row className={cx("left-content")}>
              {href.match("home") ? (
                <></>
              ) : (
                <Col lg={8} className={cx("search-wrapper")}>
                  <input
                    ref={inputSearchHeaderRef}
                    type="text"
                    className={cx("search-input")}
                    placeholder="Enter your keywords..."
                    autoComplete="off"
                  />
                  <span
                    className={cx("search-icon-wrapper")}
                    onClick={handleSearchClick}
                  >
                    <FontAwesomeIcon
                      className={cx("search-icon")}
                      icon={faSearch}
                    />
                  </span>
                </Col>
              )}
              <Col lg={3} className={cx("user-info")}>
                {login ? (
                  <TippyHeadLess menuTippy={<MenuUserInfor />}>
                    <button className={cx("dropdown-user-info")}>
                      <span>{"hungtdmotadev"}</span>
                      <FontAwesomeIcon
                        className={cx("sortDown-icon")}
                        icon={faSortDown}
                      />
                    </button>
                  </TippyHeadLess>
                ) : (
                  <>
                    <span>
                      <FontAwesomeIcon
                        className={cx("user-icon")}
                        icon={faUserCircle}
                      />
                    </span>
                    <span className={cx("user-login")}>Login/Register</span>
                  </>
                )}
              </Col>
            </Row>
          </Col>
        </div>
      </div>
      {href.match("home") ? (
        <div className={cx("container-home-header")}>
          <div className={cx("heading-container-header")}>
            Find Movies, TV Shows and more
          </div>
          <div className={cx("container-header-search")}>
            <input
              className={cx("header-search-input")}
              type="text"
              placeholder="Enter your keywords..."
              ref={inputSearchHeaderRef}
            ></input>
            <span
              className={cx("header-search-btn")}
              onClick={handleSearchClick}
            >
              <FontAwesomeIcon
                icon={faSearch}
                className={cx("search-icon-header-home")}
              />
            </span>
            <div className={cx("header-arrow-btn")} onClick={handleSearchClick}>
              <FontAwesomeIcon
                icon={faArrowRight}
                className={cx("arrow-icon-header-home")}
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
