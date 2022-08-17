import {
  faChartLine,
  faList,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ButtonGroupShare from "../../ButtonGroupShare";
import ListMovies from "../../ListMovies/ListMovies";
import SessionsHome from "../../SessionsHome";
import styles from "./Home.module.scss";
const cx = className.bind(styles);

const tabs = [
  {
    title: "Movies",
    icon: <FontAwesomeIcon icon={faPlayCircle} />,
    href: "movies",
  },
  {
    title: "TV-Shows",
    icon: <FontAwesomeIcon icon={faList} />,
    href: "tv-shows",
  },
  {
    title: "Trending",
    icon: <FontAwesomeIcon icon={faChartLine} />,
    href: "trending",
  },
];
const movies = [
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "nope",
    img: "https://static.bunnycdn.ru/i/cache/images/e/e6/e6a3414ee60ea718eef48d3aeee2f71c.jpg",
    meta: "2022",
    time: "130",
    type: "Movie",
    quantity: "HD",
  },
];
const tvseries = [
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
  {
    title: "The Boys",
    img: "https://static.bunnycdn.ru/i/cache/images/2/2e/2ed91db3c61a9317d9fc39e843ed4674.jpg",
    meta: "SS 1",
    time: "EP 10",
    type: "TV",
    quantity: "HD",
  },
];
const trending = [
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
  {
    title: "Minions: The Rise of Gru",
    img: "https://static.bunnycdn.ru/i/cache/images/f/f3/f30547e9001c0b470b0d2c3f6c5ec265.jpg",
    meta: "2022",
    time: "87",
    type: "Movie",
    quantity: "HD",
  },
];

const HomePage = () => {
  let params = useParams();
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content-header")}>
        <h1 className={cx("content-header-title")}>
          flixtor.video - Watch the Latest Movies and TV Shows for Free with No
          registration!
        </h1>
        <span className={cx("content-header-description")}>
          flixtor.video - flixtors, flixtor, flixtor movies, flixtor online
          movies, movies flixtor
        </span>
        <span className={cx("content-header-description")}>
          Watch your movies, tv shows online free in flixtor.video - no tracking
          - no ads - no virus.
        </span>
        <span className={cx("content-header-btn-shares")}>
          <ButtonGroupShare />
        </span>
      </div>
      <SessionsHome title={"Recommended"} tabs={tabs}>
        {params.param.match("movies") && <ListMovies items={movies} />}
        {params.param.match("tv-shows") && <ListMovies items={tvseries} />}
        {params.param.match("trending") && <ListMovies items={trending} />}
      </SessionsHome>
      <SessionsHome title={"Lastest Movies"} viewall={true} href="movies">
        <ListMovies items={movies} />
      </SessionsHome>
      <SessionsHome title={"Lastest TV Series"} viewall={true} href="tv-series">
        <ListMovies items={tvseries} />
      </SessionsHome>
    </div>
  );
};

export default HomePage;
