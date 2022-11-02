import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import React from "react";
import MenuDropDownSearch from "../MenuDropDownSearch";
import TippyHeadLess from "../TippyHeadLess";
import styles from "./FilterItem.module.scss";
import PropTypes from "prop-types";
const cx = className.bind(styles);

const FilterItem = ({ item }) => {
  return (
    <li className={cx("list-filter-item")}>
      <TippyHeadLess
        position="bottom-start"
        menuTippy={
          <MenuDropDownSearch
            menus={item.menu}
            size={item.size}
            grid={item.grid}
            title={item.title.toLowerCase()}
          />
        }
      >
        <button className={cx("item")}>
          <FontAwesomeIcon icon={item.icon} />
          <span>{item.title}</span>
          <span className={cx("value")}>{item.value}</span>
        </button>
      </TippyHeadLess>
    </li>
  );
};

FilterItem.propTypes = {
  item: PropTypes.object,
};
export default FilterItem;
