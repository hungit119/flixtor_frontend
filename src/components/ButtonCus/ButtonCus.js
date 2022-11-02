import className from "classnames/bind";
import React from "react";
import { Button } from "react-bootstrap";
import styles from "./ButtonCus.module.scss";
import PropTypes from "prop-types";
const cx = className.bind(styles);

const ButtonCus = ({ children, classname, style, onClick }) => {
  return (
    <>
      <style type="text/css">
        {`
              .btn-flat {
                background-color: #17a2b8;
                color: white;
              }

              .btn-xxl {
                padding: 11px 23px;
                font-size: 1.575rem;
              }
              .btn-flat:hover, .btn-flat:focus, .btn-flat:active, .btn-flat.active, .open>.dropdown-toggle.btn-flat {
                color: #fff;
                background-color: #138496;
              }
            `}
      </style>
      <Button
        variant="flat"
        size="xxl"
        className={classname}
        style={style}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
};

ButtonCus.propTypes = {
  children: PropTypes.node.isRequired,
  classname: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonCus;
