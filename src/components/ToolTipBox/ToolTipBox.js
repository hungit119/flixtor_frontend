import React from "react";
import className from "classnames/bind";
import styles from "./ToolTipBox.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
const cx = className.bind(styles);

const ToolTipBox = ({ href }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>The Boys</div>
      <div className={cx("meta")}>
        <span className={cx("imdb")}>
          <FontAwesomeIcon className={cx("icon")} icon={faStar} /> 7.5
        </span>
        <span>2022</span>
        <span>126 min</span>
        <span className={cx("quantity")}>CAM</span>
      </div>
      <div className={cx("description")}>
        Thor's retirement is interrupted by a galactic killer known as Gorr the
        God Butcher, who seeks the extinction of the gods. To combat the threat,
        Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane
        Foster, who - to Thor's surprise - inexplicably wields his magical
        hammer, Mjolnir, as the Mighty Thor. Together, they embark upon a
        harrowing cosmic adventure to uncover the mystery of the God Butcher's
        vengeance and stop him before it's too late.
      </div>
      <div className={cx("origin")}>
        <div>
          <span>Country : </span>
          <span>
            <Link to={"/country/united-state"}>United States</Link>
          </span>
          ,
          <span>
            <Link to={"/country/japan"}>Japan</Link>
          </span>
        </div>
        <div>
          <span>Genre : </span>
          <span>
            <Link to={"/genre/comedy"}>Comedy</Link>
          </span>
          ,
          <span>
            <Link to={"/genre/adventure"}>Adventure</Link>
          </span>
          ,
          <span>
            <Link to={"/genre/action"}>Action</Link>
          </span>
        </div>
      </div>
      <div className={cx("actions")}>
        <span className={cx("watch")}>
          <Link to={href ? href : "#"}>
            <FontAwesomeIcon icon={faPlay} /> Watch now
          </Link>
        </span>
        <span className={cx("bookmark")}>
          <Link to={"#"}>
            <FontAwesomeIcon icon={faHeart} className={cx("icon-heart")} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ToolTipBox;
