import classNames from "classnames/bind";
import React from "react";
import { Row } from "react-bootstrap";
import WatchListItem from "../WatchListItem";
import styles from "./WatchList.module.scss";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);
const WatchList = ({ data = [] }) => {
  return (
    <div className={cx("wrapper")}>
      <Row>
        {data.map((item, index) => (
          <WatchListItem data={item} key={index} />
        ))}
      </Row>
    </div>
  );
};

WatchList.propTypes = {
  data: PropTypes.array,
};

export default WatchList;
