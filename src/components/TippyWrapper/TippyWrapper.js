import React from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from "./TippyWrapper.module.scss";
const cx = classNames.bind(styles);

const TippyWrapper = ({ children, content, position }) => {
  return (
    <Tippy
      interactive
      placement={position}
      render={(attrs) => (
        <div tabIndex={-1} {...attrs}>
          {content}
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default TippyWrapper;
