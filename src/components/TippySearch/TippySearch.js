import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./TippySearch.module.scss";
import Tippy from "@tippyjs/react/headless";
import { useDispatch, useSelector } from "react-redux";
import { searchResultSelector } from "../../redux/selectors";
import {
  setSearchInputValue,
  setSearchResults,
} from "../../redux/actions/searchAction";
import { useSpring, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const cx = classNames.bind(styles);

const TippySearch = ({ children, SearchResultElemnt }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const searchResults = useSelector(searchResultSelector);
  const springConfig = { damping: 15, stiffness: 300 };
  const initialScale = 0.5;
  const opacity = useSpring(0, springConfig);
  const scale = useSpring(initialScale, springConfig);

  const onMount = () => {
    scale.set(1);
    opacity.set(1);
  };
  const onHide = ({ unmount }) => {
    const cleanUp = scale.onChange((value) => {
      if (value <= initialScale) {
        cleanUp();
        unmount();
      }
    });
    scale.set(initialScale);
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
        <motion.div style={{ scale, opacity }} tabIndex={-1} {...attrs}>
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

export default TippySearch;
