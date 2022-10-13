import React from "react";
import classNames from "classnames/bind";
import styles from "./Message.module.scss";
const cx = classNames.bind(styles);

const Message = ({ text, show, variant }) => {
  return (
    <>
      {show && (
        <div
          className={cx(
            "wrapper",
            variant === "error" ? "error-message" : "success-message"
          )}
        >
          {text}
        </div>
      )}
    </>
  );
};

export default Message;
