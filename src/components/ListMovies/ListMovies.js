import React from "react";
import className from "classnames/bind";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./ListMovies.module.scss";
import MovieItem from "./MovieItem";
const cx = className.bind(styles);

const ListMovies = ({ items, col }) => {
  return (
    <Container fluid className={cx("wrapper")}>
      <Row>
        {items.map((item, index) => (
          <MovieItem key={index} item={item} col={col} />
        ))}
      </Row>
    </Container>
  );
};

export default ListMovies;
