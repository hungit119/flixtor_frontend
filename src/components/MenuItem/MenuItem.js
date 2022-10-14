import classNames from "classnames/bind";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./MenuItem.module.scss";

const cx = classNames.bind(styles);
const MenuItem = ({ root, items }) => {
  return (
    <div className={cx("wrapper")}>
      <Container>
        <Row>
          {items.map((item, index) => (
            <Col lg={4} md={4} className={cx("menu-item")} key={index}>
              <a href={`/search/${root}/${item.toLowerCase()}`}>{item}</a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MenuItem;
