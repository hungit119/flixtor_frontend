import className from "classnames/bind";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./MenuDropDownSearch.module.scss";
import PropTypes from "prop-types";
const cx = className.bind(styles);

const MenuDropDownSearch = ({
  menus,
  size = "large",
  grid = 3,
  type = "checkbox",
  title,
  setOptions,
}) => {
  const [optionValue, setOptionValue] = useState([]);
  const handleChangeCheckBox = (e) => {
    if (e.target.checked) {
      if (type === "radio") {
        setOptionValue(e.target.value);
      } else {
        setOptionValue([...optionValue, e.target.value]);
      }
    } else {
      setOptionValue(optionValue.filter((option) => option !== e.target.value));
    }
  };
  const handleMouseLeave = (e) => {
    setOptions(optionValue);
  };
  return (
    <div className={cx("wrapper", size)} onMouseLeave={handleMouseLeave}>
      <Container fluid className={cx("menu-container")}>
        <Row className={cx("menu-row")}>
          {menus.map((item, index) => {
            return (
              <Col lg={grid} md={grid} key={index} className={cx("menu-col")}>
                <input
                  type={type}
                  className={cx("inputValue")}
                  id={item}
                  value={item.toLowerCase()}
                  name={type === "radio" ? "sortType" : item.toLowerCase()}
                  onChange={handleChangeCheckBox}
                />
                <label className={cx("menu-label")} htmlFor={item}>
                  {item}
                </label>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

MenuDropDownSearch.propTypes = {
  menus: PropTypes.array.isRequired,
  size: PropTypes.string,
  grid: PropTypes.number,
  type: PropTypes.string,
  title: PropTypes.string,
  setOptions: PropTypes.func,
};

export default MenuDropDownSearch;
