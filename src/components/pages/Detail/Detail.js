import {
  faCircleCheck,
  faCircleExclamation,
  faCircleHalfStroke,
  faComment,
  faHeart,
  faMinus,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import className from "classnames/bind";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { v4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { setFilm, setFilmSuggests } from "../../../redux/actions/filmAction";
import {
  commentsSelector,
  filmSelector,
  filmSuggestsSelector,
  isAuthenticatedSelector,
  isLoadingFilmsSelector,
  userIDSelector,
} from "../../../redux/selectors";
import ResponseApiHandle from "../../../utils/ResponseApiHandle";
import ButtonGroupShare from "../../ButtonGroupShare";
import ListMovies from "../../ListMovies/ListMovies";
import ServerButton from "../../ServerButton";
import SessionsHome from "../../SessionsHome";
import styles from "./Detail.module.scss";
import PropTypes from "prop-types";
import { setIsLoadingFilms } from "../../../redux/actions/controlAction";
import Skeleton from "react-loading-skeleton";
import ButtonCus from "../../ButtonCus/ButtonCus";
import Comment from "../../Comment";
import { apiUrl } from "../../../constants";
import {
  setCommentsOfFilm,
  setNewRecentComment,
} from "../../../redux/actions/commentAction";

const cx = className.bind(styles);

const Detail = ({ type }) => {
  const [rating, setrating] = useState(4);
  const [more, setMore] = useState(true);
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const film = useSelector(filmSelector);
  const filmSuggests = useSelector(filmSuggestsSelector);
  const comments = useSelector(commentsSelector);
  const params = useParams();
  const isLoading = useSelector(isLoadingFilmsSelector);
  const user_id = useSelector(userIDSelector);
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  useLayoutEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  const handleLessBtnClick = () => {
    setMore(!more);
  };
  const handleMoreBtnClick = () => {
    setMore(!more);
  };
  const handleChangeInput = (e) => {
    setMsg(e.target.value);
  };
  const handleClickComment = async () => {
    try {
      if (!isAuthenticated || msg === "") return;
      const comment = {
        id: v4(),
        film_id: film.id,
        user_id,
        msg: {
          id: v4(),
          text: msg,
        },
      };
      const response = await axios.post(`${apiUrl}/comment`, {
        comment,
      });
      ResponseApiHandle(response, (resData) => {
        dispatch(setNewRecentComment(resData.comment));
        setMsg("");
      });
    } catch (error) {
      throw error;
    }
  };

  const getFilm = async () => {
    try {
      dispatch(setIsLoadingFilms(true));
      const response = await axios.get(`${apiUrl}/film/${params.id}`);
      ResponseApiHandle(response, (resData) => {
        dispatch(setFilm(resData.film));
        setIsLoadingFilms(false);
      });
    } catch (errors) {
      console.log(errors.message);
    }
  };
  const getFilmsSuggest = async () => {
    try {
      dispatch(setIsLoadingFilms(true));
      const response = await axios.get(
        `${apiUrl}/films/suggest/${params.id}?limit=9`
      );
      ResponseApiHandle(response, (resData) => {
        dispatch(setFilmSuggests(resData.filmSuggests));
        dispatch(setIsLoadingFilms(false));
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const getComment = async () => {
    try {
      const response = await axios.get(`${apiUrl}/comment?filmId=${params.id}`);
      ResponseApiHandle(response, (resData) => {
        dispatch(setCommentsOfFilm(resData.comments));
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFilm();
    getFilmsSuggest();
    getComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Link to={"/"}>
          <span className={cx("header-title")}>Home</span>
        </Link>{" "}
        /{" "}
        <Link to={`/${type.toLowerCase()}`}>
          <span className={cx("header-title")}>{type}</span>
        </Link>{" "}
        /{" "}
        <Link to={`/${type.toLowerCase()}/${film.film_id}`}>
          <span className={cx("header-title")}>
            {isLoading ? <Skeleton width={"300px"} /> : film.title}
          </span>
        </Link>
      </div>
      <div
        className={cx("watch")}
        style={{
          backgroundImage: `url("${film.thumnail}")`,
        }}
      >
        <div className={cx("overlay")}></div>
        <iframe
          className={cx("iframe")}
          widtd="1470"
          height="720"
          src={`https://www.youtube-nocookie.com/embed/${film.trailerurl}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <div className={cx("actions")}>
          <span className={cx("action-left")}>
            <ul className={cx("options")}>
              <li className={cx("option")}>
                <span className={cx("option-icon")}>
                  {/* <FontAwesomeIcon icon={faCircle} /> */}
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span>Auto play</span>
              </li>
              <li className={cx("option")}>
                <span className={cx("option-icon")}>
                  {/* <FontAwesomeIcon icon={faCircle} /> */}
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span>Auto next</span>
              </li>
              <li className={cx("option")}>
                <span className={cx("option-icon")}>
                  <FontAwesomeIcon icon={faCircleHalfStroke} />
                </span>
                <span>Toggle light</span>
              </li>
              <li className={cx("option")}>
                <span className={cx("option-icon")}>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <span>Add to list</span>
              </li>
              <li className={cx("option")}>
                <span className={cx("option-icon")}>
                  <FontAwesomeIcon icon={faComment} />
                </span>
                <span>Comment</span>
              </li>
              <li className={cx("option")}>
                <span className={cx("option-icon")}>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                </span>
                <span>Report Issue</span>
              </li>
            </ul>
          </span>
          <span className={cx("action-right")}>
            <ButtonGroupShare />
          </span>
        </div>
        <div className={cx("servers")}>
          <div className={cx("servers-title")}>
            If current server doesn't work please try oTher servers below.
          </div>
          <div className={cx("servers-content")}>
            <ServerButton title={"Vidstream"} active={true} />
            <ServerButton title={"MyCloud"} />
          </div>
        </div>
        <Row className={cx("content")}>
          <Col lg={8}>
            <div className={cx("detail")}>
              <div className={cx("detail-posters")}>
                {isLoading ? (
                  <Skeleton width={"194px"} height={"281px"} />
                ) : (
                  <img
                    className={cx("detail-posters-image")}
                    src={`${film.poster}`}
                    alt="poster"
                  ></img>
                )}
              </div>
              <div className={cx("detail-body")}>
                <div className={cx("content")}>
                  <div className={cx("header-detail")}>
                    <h4 className={cx("title")}>
                      {isLoading ? <Skeleton width={"570px"} /> : film.title}
                    </h4>
                    {isLoading ? (
                      <Skeleton width={"100px"} height={"40px"} />
                    ) : (
                      <span className={cx("rating")}>
                        {[...Array(5)].map((star, index) => {
                          index += 1;
                          return (
                            <span
                              key={index}
                              onMouseEnter={() => {
                                setrating(index);
                              }}
                            >
                              <FontAwesomeIcon
                                className={cx(
                                  "star",
                                  index <= rating ? "star-active" : ""
                                )}
                                icon={faStar}
                              />
                            </span>
                          );
                        })}
                      </span>
                    )}
                  </div>
                  <div className={cx("meta")}>
                    {isLoading ? (
                      <Skeleton width={"50px"} />
                    ) : (
                      <span className={cx("quantity")}>{film.quantity}</span>
                    )}
                    <span className={cx("imdb")}>
                      {isLoading ? (
                        <Skeleton width={"50px"} />
                      ) : (
                        <>
                          <FontAwesomeIcon
                            className={cx("icon-star")}
                            icon={faStar}
                          />
                          <span>{film.imdb}</span>
                        </>
                      )}
                    </span>
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      <span className={cx("time-text")}>
                        {film.times === 1 ? "na" : film.times} min
                      </span>
                    )}
                  </div>
                  {isLoading ? (
                    <Skeleton width={"100%"} height={"300px"} />
                  ) : (
                    <>
                      <div className={cx("description")}>
                        <span
                          className={cx("description-text", more ? "less" : "")}
                        >
                          {film.description}
                        </span>
                        {more ? (
                          <span
                            className={cx("btn-expand")}
                            onClick={handleMoreBtnClick}
                          >
                            <FontAwesomeIcon
                              className={cx("icon-des")}
                              icon={faPlus}
                            />
                            <span>more</span>
                          </span>
                        ) : (
                          <span
                            className={cx("btn-less")}
                            onClick={handleLessBtnClick}
                          >
                            <FontAwesomeIcon
                              className={cx("icon-des")}
                              icon={faMinus}
                            />
                            <span>less</span>
                          </span>
                        )}
                      </div>
                      <div className={cx("info")}>
                        <table>
                          <tbody>
                            <tr>
                              <th>Country:</th>
                              <td>
                                {film.countries.includes(",") ? (
                                  film.countries
                                    .split(",")
                                    .map((item, index) => (
                                      <Link
                                        key={index}
                                        to={`/search/country/${item.trim()}`}
                                      >
                                        {item},
                                      </Link>
                                    ))
                                ) : (
                                  <Link
                                    to={`/search/country/${film.countries.trim()}`}
                                  >
                                    {film.countries}
                                  </Link>
                                )}
                              </td>
                            </tr>
                            <tr>
                              <th>Genre:</th>
                              <td>
                                {film.genres.includes(",") ? (
                                  film.genres.split(",").map((item, index) => (
                                    <Link
                                      key={index}
                                      to={`/search/genre/${item.trim()}`}
                                    >
                                      {item},
                                    </Link>
                                  ))
                                ) : (
                                  <Link
                                    to={`/search/genre/${film.genres.trim()}`}
                                  >
                                    {film.genres}
                                  </Link>
                                )}
                              </td>
                            </tr>
                            <tr>
                              <th>Release:</th>
                              <td>{film.releases}</td>
                            </tr>
                            <tr>
                              <th>Director:</th>
                              <td>
                                {film.director === "" ? "N/A" : film.director}
                              </td>
                            </tr>
                            <tr>
                              <th>Production:</th>
                              <td>
                                {film.productions.includes(",") ? (
                                  film.productions
                                    .split(",")
                                    .map((item, index) => (
                                      <Link
                                        key={index}
                                        to={`/search/production/${item.trim()}`}
                                      >
                                        {item},
                                      </Link>
                                    ))
                                ) : (
                                  <Link
                                    to={`/search/production/${film.productions.trim()}`}
                                  >
                                    {film.productions === ""
                                      ? "N/A"
                                      : film.productions}
                                  </Link>
                                )}
                              </td>
                            </tr>
                            <tr>
                              <th>Cast:</th>
                              <td>
                                {film.casts.includes(",") ? (
                                  film.casts.split(",").map((item, index) => (
                                    <Link
                                      key={index}
                                      to={`/search/cast/${item.trim()}`}
                                    >
                                      {item},
                                    </Link>
                                  ))
                                ) : (
                                  <Link
                                    to={`/search/cast/${film.casts.trim()}`}
                                  >
                                    {film.casts}
                                  </Link>
                                )}
                              </td>
                            </tr>
                            <tr>
                              <th>Tags:</th>
                              <td>{film.tags}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className={cx("comments-wrapper")}>
              <div className={cx("comment-header")}>Comment</div>
              <div className={cx("create-comments")}>
                <div className={cx("header-create-comments")}>
                  <div className={cx("total-comments")}>571 Comments</div>
                  <div className={cx("login-btn")}>Login</div>
                </div>
                <div className={cx("body-create-comments")}>
                  <img
                    src="https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-thumbnail.png"
                    width={"50px"}
                    alt={"userImage"}
                    className={cx("avatar")}
                  />
                  <div className={cx("write-comment")}>
                    <InputGroup>
                      <Form.Control
                        style={{ fontSize: "1.8rem" }}
                        as={"textarea"}
                        placeholder="Enter you comment"
                        name={"message"}
                        value={msg}
                        onChange={handleChangeInput}
                      />
                    </InputGroup>
                    <button
                      className={cx(
                        "btn-comment",
                        !isAuthenticated || msg === "" ? "disable" : ""
                      )}
                      onClick={handleClickComment}
                    >
                      Comment
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("show-comment")}>
                <div className={cx("show-comment-header")}>Sort by Newest</div>
                <div className={cx("show-comment-body")}>
                  {comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className={cx("suggess")}>
            <SessionsHome title={"You may also like"}>
              <ListMovies items={filmSuggests} col={"col-cus-4"} />
            </SessionsHome>
          </Col>
        </Row>
      </div>
    </div>
  );
};

Detail.propTypes = {
  type: PropTypes.string,
};

export default Detail;
