import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import styles from "./Pagenition.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faLeftLong,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = className.bind(styles);

const Pagenition = ({ root }) => {
  const listNumber = [
    {
      number: 1,
      active: true,
    },
    {
      number: 2,
      active: false,
    },
    {
      number: 3,
      active: false,
    },
    {
      number: 4,
      active: false,
    },
    {
      number: 5,
      active: false,
    },
  ];
  const [listNumbers, setListNumbers] = useState(listNumber);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("prev")}>
        <FontAwesomeIcon icon={faAnglesLeft} />
      </div>
      <div className={cx("head")}>
        <FontAwesomeIcon icon={faLeftLong} />
      </div>
      <div className={cx("list-numbers")}>
        {listNumbers.map((item, index) => (
          <Link
            to={item.number === 1 ? `/${root}` : `/${root}?page=${item.number}`}
            key={index}
          >
            <div
              className={cx("list-number", item.active ? "active" : "")}
              onClick={() => {
                setListNumbers((prev) =>
                  prev.map((itemNumber) =>
                    itemNumber.number === item.number
                      ? { ...itemNumber, active: true }
                      : { ...itemNumber, active: false }
                  )
                );
              }}
            >
              {item.number}
            </div>
          </Link>
        ))}
      </div>
      <div className={cx("last")}>
        <FontAwesomeIcon icon={faRightLong} />
      </div>
      <div className={cx("next")}>
        <FontAwesomeIcon icon={faAnglesRight} />
      </div>
    </div>
  );
};

export default Pagenition;
