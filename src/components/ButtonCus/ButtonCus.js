import React from "react";
import className from "classnames/bind";
import styles from "./ButtonCus.module.scss";
import { Button } from "react-bootstrap";
const cx = className.bind(styles);

const ButtonCus = ({ children, classname, style }) => {
  const classnames = cx("btn-flat", {
    [classname]: classname,
  });
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
      <Button variant="flat" size="xxl" className={classname} style={style}>
        {children}
      </Button>
    </>
  );
};

export default ButtonCus;
