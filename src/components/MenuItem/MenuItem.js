import classNames from "classnames/bind";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./MenuItem.module.scss";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);
const MenuItem = ({ root, items }) => {
  return (
    <div className={cx("wrapper")}>
      <Container>
        <Row>
          {items.map((item, index) => (
            <Col lg={4} md={4} className={cx("menu-item")} key={index}>
              <a href={`/search/${root}/${item}`}>{item}</a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

MenuItem.propTypes = {
  root: PropTypes.string,
  items: PropTypes.array.isRequired,
};

export default MenuItem;
