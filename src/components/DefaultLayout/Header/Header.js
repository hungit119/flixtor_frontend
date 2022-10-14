import {
  faArrowRight,
  faSearch,
  faSortDown,
  faUserCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import classNames from "classnames/bind";
import React, { useEffect, useRef, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN_NAME,
  apiUrl,
  menuItemCountry,
  menuItemsGenre,
} from "../../../constants";
import useDebounce from "../../../hooks/useDebounce";
import { setUserInfo } from "../../../redux/actions/authAction";
import {
  setSearchInputValue,
  setSearchResults,
} from "../../../redux/actions/searchAction";
import {
  searchInputValueSelector,
  searchResultSelector,
  userInfoUsernameSelector,
} from "../../../redux/selectors";
import ResponseApiHandle from "../../../utils/ResponseApiHandle";
import setAuthToken from "../../../utils/setAuthToken";
import Auth from "../../Auth";
import MenuItem from "../../MenuItem";
import MenuUserInfor from "../../MenuUserInfor/MenuUserInfor";
import SearchResult from "../../SearchResult";
import TippyHeadLess from "../../TippyHeadLess";
import TippySearch from "../../TippySearch";
import TippyWrapper from "../../TippyWrapper";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

const Header = () => {
  // State component
  const [modalShow, setmodalShow] = useState(false);
  const [login, setLogin] = useState(false);
  const [auth, setAuth] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Global state component
  const searchInputValue = useSelector(searchInputValueSelector);
  const debounced = useDebounce(searchInputValue, 500);
  const searchResult = useSelector(searchResultSelector);
  const username = useSelector(userInfoUsernameSelector);

  let href = window.location.href;
  let inputSearchHeaderRef = useRef(null);

  const hide = () => setmodalShow(false);
  const show = () => {
    setAuth("login");
    setmodalShow(true);
  };
  // Handle input
  const handleChangeInputValue = (e) => {
    dispatch(setSearchInputValue(e.target.value));
  };

  const handleSearchClick = () => {
    if (searchResult.length === 0) {
      inputSearchHeaderRef.current.focus();
    } else {
      return navigate(`/search?keyword=${searchInputValue}`);
    }
  };
  const handleSetAuthType = (type) => {
    setAuth(type);
  };

  const loadUser = async () => {
    try {
      if (localStorage[ACCESS_TOKEN_NAME]) {
        setAuthToken(localStorage[ACCESS_TOKEN_NAME]);
      }
      const response = await axios.get(`${apiUrl}/auth`);
      ResponseApiHandle(
        response,
        (resData) => {
          dispatch(setUserInfo(resData.userInfo));
          setmodalShow(false);
          setLogin(true);
        },
        (errorData) => {
          dispatch(setUserInfo({}));
          setLogin(false);
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  const getFilmsSearch = async (url) => {
    try {
      const response = await axios.get(url);
      ResponseApiHandle(response, (resData) => {
        dispatch(setSearchResults(resData.searchResult));
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getFilmsSearch(
      `http://localhost:8000/api/films/search?keyword=${debounced}&limit=${
        debounced === "" ? "0" : "5"
      }`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  return (
    <>
      {modalShow ? (
        <div>
          <div className={cx("modal-content")}>
            <Auth type={auth} handleSetAuthType={handleSetAuthType} />
            <span className={cx("modal-cancel-wrapper")} onClick={hide}>
              <FontAwesomeIcon
                className={cx("modal-cancel-icon")}
                icon={faXmark}
              />
            </span>
          </div>
          <div className={cx("modal-login-cus")} onClick={hide}></div>
        </div>
      ) : (
        <></>
      )}
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
                    <Link to={"/home/movies"}>HOME</Link>
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
                  <TippySearch
                    SearchResultElemnt={<SearchResult width="395px" />}
                  >
                    <input
                      ref={inputSearchHeaderRef}
                      type="text"
                      className={cx("search-input")}
                      placeholder="Enter your keywords header..."
                      autoComplete="off"
                      value={searchInputValue}
                      onChange={handleChangeInputValue}
                    />
                  </TippySearch>
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
                      <span className={cx("infor-user-username")}>
                        {username}
                      </span>
                      <FontAwesomeIcon
                        className={cx("sortDown-icon")}
                        icon={faSortDown}
                      />
                    </button>
                  </TippyHeadLess>
                ) : (
                  <div className={cx("user-info-container")} onClick={show}>
                    <span>
                      <FontAwesomeIcon
                        className={cx("user-icon")}
                        icon={faUserCircle}
                      />
                    </span>
                    <span className={cx("user-login")}>Login/Register</span>
                  </div>
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
            <TippySearch SearchResultElemnt={<SearchResult />}>
              <input
                className={cx("header-search-input")}
                type="text"
                placeholder="Enter your keywords..."
                ref={inputSearchHeaderRef}
                value={searchInputValue}
                onChange={handleChangeInputValue}
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
              <div
                className={cx("header-arrow-btn")}
                onClick={handleSearchClick}
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={cx("arrow-icon-header-home")}
                />
              </div>
            </TippySearch>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
