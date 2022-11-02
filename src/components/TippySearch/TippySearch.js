import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { motion, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  setSearchInputValue,
  setSearchResults,
} from "../../redux/actions/searchAction";
import { searchResultSelector } from "../../redux/selectors";
import styles from "./TippySearch.module.scss";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);

const TippySearch = ({ children, SearchResultElemnt }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchResults = useSelector(searchResultSelector);
  const springConfig = { damping: 15, stiffness: 300 };
  const opacity = useSpring(0, springConfig);

  const onMount = () => {
    opacity.set(1);
  };
  const onHide = () => {
    opacity.set(0);
  };

  const hide = () => {
    setVisible(false);
    dispatch(setSearchInputValue(""));
  };

  useEffect(() => {
    if (searchResults.length === 0) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [searchResults]);
  useEffect(() => {
    dispatch(setSearchInputValue(""));
    dispatch(setSearchResults([]));
  }, [location]);
  return (
    <Tippy
      visible={visible}
      onClickOutside={hide}
      placement="bottom-start"
      interactive
      render={(attrs) => (
        <motion.div style={{ opacity }} tabIndex={-1} {...attrs}>
          {SearchResultElemnt}
        </motion.div>
      )}
      animation={true}
      onMount={onMount}
      onHide={onHide}
    >
      <span>{children}</span>
    </Tippy>
  );
};

TippySearch.propTypes = {
  children: PropTypes.node.isRequired,
  SearchResultElemnt: PropTypes.node.isRequired,
};

export default TippySearch;
