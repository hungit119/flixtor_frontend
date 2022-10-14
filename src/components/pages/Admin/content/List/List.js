import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import className from "classnames/bind";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setFilmIdDelete } from "../../../../../redux/actions/filmAction";
import { setFilmsListAdmin } from "../../../../../redux/actions/filmsAction";
import { filmsSelector } from "../../../../../redux/selectors";
import ResponseApiHandle from "../../../../../utils/ResponseApiHandle";
import ModalCom from "../../../../ModalCom/ModalCom";
import styles from "./List.module.scss";
const cx = className.bind(styles);
const List = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setcurrentPage] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const dispatch = useDispatch();
  const filmsList = useSelector(filmsSelector);
  const getFullFilms = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/films");
      ResponseApiHandle(response, (resData) => {
        dispatch(setFilmsListAdmin(resData.films));
      });
    } catch (errors) {
      console.log(errors.message);
    }
  };

  useEffect(() => {
    getFullFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setPageCount(Math.ceil(filmsList.length / itemsPerPage));
    setcurrentPage(filmsList.slice(itemOffset, endOffset));
  }, [itemOffset, itemsPerPage, filmsList]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filmsList.length;
    setItemOffset(newOffset);
  };
  const handleClickDelete = (id) => {
    dispatch(setFilmIdDelete(id));
    setShowModal(true);
  };
  return (
    <>
      <ModalCom show={showModal} setShowModal={setShowModal} />
      <div className={cx("wrapper")}>
        <h2>List Film</h2>
        <div className={cx("content")}>
          <Table bordered>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th colSpan={3} className={cx("text-center")}>
                  Setting
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPage.map((page, index) => (
                <tr key={index} className={cx("film")}>
                  <td>{page.id}</td>
                  <td>{page.title}</td>
                  <td className={cx("text-center")}>
                    <Link to={`/admin/film/${page.id}`}>
                      <Button size="lg" variant="primary">
                        Detail
                      </Button>
                    </Link>
                  </td>
                  <td className={cx("text-center")}>
                    <Link to={`/admin/film/update/${page.id}`}>
                      <Button size="lg" variant="success">
                        Update
                      </Button>
                    </Link>
                  </td>
                  <td className={cx("text-center")}>
                    <Button
                      size="lg"
                      variant="danger"
                      onClick={() => {
                        handleClickDelete(page.id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
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
    </>
  );
};

export default List;
