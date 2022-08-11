import React, { useState } from "react";
import className from "classnames/bind";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
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
import ButtonGroupShare from "../ButtonGroupShare";
import ServerButton from "../ServerButton";
import SessionsHome from "../SessionsHome";
import ListMovies from "../ListMovies/ListMovies";

const cx = className.bind(styles);
const tvseries = [
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
  },
];

const Detail = ({ type }) => {
  const [rating, setrating] = useState(0);
  const params = useParams();
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <span>Home</span> / <span>{type}</span> /{" "}
        <span>Thor: Love and Thunder</span>
      </div>
      <div
        className={cx("watch")}
        style={{
          backgroundImage: `url("https://static.bunnycdn.ru/i/cache/images/5/5a/5a55900d896a5f4e63f11ed100701a4a.jpg")`,
        }}
      >
        <div className={cx("overlay")}></div>
        <iframe
          className={cx("iframe")}
          widtd="1470"
          height="720"
          src="https://www.youtube.com/embed/UBgPypHGAqE"
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
                  src={
                    "https://static.bunnycdn.ru/i/cache/images/e/e1/e1a4619505b3a8740eafbedc899d2cff.jpg-w380"
                  }
                  alt="poster"
                ></img>
              </div>
              <div className={cx("detail-body")}>
                <div className={cx("content")}>
                  <div className={cx("header-detail")}>
                    <h4 className={cx("title")}>Thor : Love and Thunder</h4>
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
                    <span className={cx("quantity")}>TS</span>
                    <span className={cx("imdb")}>
                      <FontAwesomeIcon
                        className={cx("icon-star")}
                        icon={faStar}
                      />
                      <span>6.70</span>
                    </span>
                    <span className={cx("time-text")}>118 min</span>
                  </div>
                  <div className={cx("description")}>
                    <span className={cx("description-text", "less")}>
                      Thor's retirement is interrupted by a galactic killer
                      known as Gorr The God Butcher, who seeks The extinction of
                      The gods. To combat The tdreat, tdor enlists The help of
                      King Valkyrie, Korg and ex-girlfriend Jane Foster, who -
                      to tdor's surprise - inexplicably wields his magical
                      hammer, Mjolnir, as The Mighty tdor. TogeTher, They embark
                      upon a harrowing cosmic adventure to uncover The mystery
                      of The God Butcher's vengeance and stop him before it's
                      too late.
                    </span>
                    {/* <span className={cx("btn-expand")}>
                    <FontAwesomeIcon icon={faMinus} />
                    <span>less</span>
                  </span> */}
                    <span className={cx("btn-expand")}>
                      <FontAwesomeIcon icon={faPlus} />
                      <span>more</span>
                    </span>
                  </div>
                  <div className={cx("info")}>
                    <table>
                      <tbody>
                        <tr>
                          <th>Country:</th>
                          <td>
                            <Link to={"#"}>United States</Link>,
                            <Link to={"#"}>Australia</Link>
                          </td>
                        </tr>
                        <tr>
                          <th>Genre:</th>
                          <td>
                            <Link to={"#"}>Comedy</Link>,
                            <Link to={"#"}>Adventure</Link>,
                            <Link to={"#"}>Action</Link>
                          </td>
                        </tr>
                        <tr>
                          <th>Release:</th>
                          <td>2022-07-08</td>
                        </tr>
                        <tr>
                          <th>Director:</th>
                          <td>Taika Waititi</td>
                        </tr>
                        <tr>
                          <th>Production:</th>
                          <td>
                            <Link to={"#"}>Marvel Studios</Link>,
                            <Link to={"#"}>Walt Disney Pictures</Link>,
                            <Link to={"#"}>Fox Studios Australia</Link>
                          </td>
                        </tr>
                        <tr>
                          <th>Cast:</th>
                          <td>
                            <Link to={"#"}>Christian Bale</Link>,
                            <Link to={"#"}>Chris Hemsworth</Link>,
                            <Link to={"#"}>Natalie Portman</Link>
                          </td>
                        </tr>
                        <tr>
                          <th>Tags:</th>
                          <td>
                            watch thor: love and thunder free, watch thor: love
                            and thunder hd, thor: love and thunder online, where
                            to watch thor: love and thunder, thor: love and
                            thunder free online, thor, love and thunder
                          </td>
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
              <ListMovies items={tvseries} col={"col-cus-4"} />
            </SessionsHome>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Detail;
