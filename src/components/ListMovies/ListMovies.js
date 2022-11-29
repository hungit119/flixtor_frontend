import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { isLoadingFilmsSelector } from "../../redux/selectors";
import styles from "./ListMovies.module.scss";
import MovieItem from "./MovieItem";
import MovieItemSkeleton from "./MovieItemSkeleton";
const cx = className.bind(styles);

const ListMovies = ({ items, col, pagnition = false }) => {
  const [currentPage, setcurrentPage] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 32;

  // global state
  const isLoadingFilms = useSelector(isLoadingFilmsSelector);

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
        {isLoadingFilms ? (
          <>
            {[...Array(16).keys()].map((item, index) => (
              <MovieItemSkeleton col={col} key={index} />
            ))}
          </>
        ) : (
          currentPage.map((item, index) => (
            <MovieItem key={index} item={item} col={col} />
          ))
        )}
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

ListMovies.propTypes = {
  items: PropTypes.array.isRequired,
  col: PropTypes.string,
  pagnition: PropTypes.bool,
};

export default ListMovies;
