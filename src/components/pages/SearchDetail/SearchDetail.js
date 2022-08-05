import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SearchDetail.module.scss";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);
const SearchDetail = () => {
  let params = useParams();
  let { key, type } = params;
  return (
    <div>
      {key} + {type}
    </div>
  );
};

export default SearchDetail;
