import classNames from "classnames/bind";
import React from "react";
import styles from "./Message.module.scss";
import PropTypes from "prop-types";
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

Message.propTypes = {
  text: PropTypes.string,
  show: PropTypes.bool,
  variant: PropTypes.string,
};

export default Message;
