import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import {
  faCircle,
  faCircleCheck,
  faCircleExclamation,
  faCircleHalfStroke,
  faComment,
  faExclamation,
  faHeart,
  faMinus,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Detail.module.scss";
import ButtonGroupShare from "../../ButtonGroupShare";
import ServerButton from "../../ServerButton";
import SessionsHome from "../../SessionsHome";
import ListMovies from "../../ListMovies/ListMovies";
import { useDispatch, useSelector } from "react-redux";
import { setFilm, setFilmSuggests } from "../../../redux/actions/filmAction";
import { filmSelector, filmSuggestsSelector } from "../../../redux/selectors";

const cx = className.bind(styles);

const Detail = ({ type }) => {
  const [rating, setrating] = useState(4);
  const [more, setMore] = useState(true);
  const dispatch = useDispatch();
  const film = useSelector(filmSelector);
  const filmSuggests = useSelector(filmSuggestsSelector);
  const params = useParams();

  const handleLessBtnClick = () => {
    setMore(!more);
  };
  const handleMoreBtnClick = () => {
    setMore(!more);
  };

  const getFilm = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/film/${params.id}`
      );
      if (response.data.success) {
        dispatch(setFilm(response.data.film));
      }
    } catch (errors) {
      console.log(errors.message);
    }
  };
  const getFilmsSuggest = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/films/suggest/${params.id}?limit=9`
      );
      if (response.data.success) {
        dispatch(setFilmSuggests(response.data.filmSuggests));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFilm();
    getFilmsSuggest();
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
          <span className={cx("header-title")}>{film.title}</span>
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
          src={`https://www.youtube-nocookie.com/embed/${film.trailerURL}`}
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
                <img
                  className={cx("detail-posters-image")}
                  src={`${film.poster}`}
                  alt="poster"
                ></img>
              </div>
              <div className={cx("detail-body")}>
                <div className={cx("content")}>
                  <div className={cx("header-detail")}>
                    <h4 className={cx("title")}>{film.title}</h4>
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
                  </div>
                  <div className={cx("meta")}>
                    <span className={cx("quantity")}>{film.quantity}</span>
                    <span className={cx("imdb")}>
                      <FontAwesomeIcon
                        className={cx("icon-star")}
                        icon={faStar}
                      />
                      <span>{film.imdb}</span>
                    </span>
                    <span className={cx("time-text")}>
                      {film.times === 1 ? "na" : film.times} min
                    </span>
                  </div>
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
                              film.countries.split(",").map((item, index) => (
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
                              <Link to={`/search/genre/${film.genres.trim()}`}>
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
                              film.productions.split(",").map((item, index) => (
                                <Link
                                  key={index}
                                  to={`/films/search/production/${item.trim()}`}
                                >
                                  {item},
                                </Link>
                              ))
                            ) : (
                              <Link
                                to={`/films/search/production/${film.productions.trim()}`}
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
                                  to={`/films/search/cast/${item.trim()}`}
                                >
                                  {item},
                                </Link>
                              ))
                            ) : (
                              <Link
                                to={`/films/search/cast/${film.casts.trim()}`}
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
                </div>
              </div>
            </div>
            <div className={cx("comments")}>Comments</div>
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

export default Detail;
