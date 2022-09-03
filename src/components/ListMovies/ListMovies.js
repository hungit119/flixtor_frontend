import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./ListMovies.module.scss";
import MovieItem from "./MovieItem";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
const cx = className.bind(styles);

const ListMovies = ({ items, col, pagnition = false }) => {
  const [currentPage, setcurrentPage] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 32;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setPageCount(Math.ceil(items.length / itemsPerPage));
    setcurrentPage(items.slice(itemOffset, endOffset));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <Container fluid className={cx("wrapper")}>
      <Row>
        {currentPage.map((item, index) => (
          <MovieItem key={index} item={item} col={col} />
        ))}
      </Row>
      {pagnition ? (
        <div>
          <ReactPaginate
            breakLabel="..."
            nextLabel={
              <FontAwesomeIcon className={cx("caret")} icon={faCaretRight} />
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={
              <FontAwesomeIcon className={cx("caret")} icon={faCaretLeft} />
            }
            containerClassName={cx("paginate-container")}
            pageClassName={cx("paginate-page")}
            pageLinkClassName={cx("paginate-link")}
            previousLinkClassName={cx("paginate-control")}
            nextLinkClassName={cx("paginate-control")}
            activeLinkClassName={cx("paginate-active-link")}
            renderOnZeroPageCount={null}
          />
        </div>
      ) : (
        <> </>
      )}
    </Container>
  );
};

export default ListMovies;
