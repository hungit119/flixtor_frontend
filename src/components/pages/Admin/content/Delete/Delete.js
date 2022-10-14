import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilmIdRemove,
  setFilmIdRestore,
} from "../../../../../redux/actions/filmAction";
import { setFilmTrash } from "../../../../../redux/actions/filmsAction";
import { filmsTrashSelector } from "../../../../../redux/selectors";
import ResponseApiHandle from "../../../../../utils/ResponseApiHandle";
import ModalCom from "../../../../ModalCom/ModalCom";
import styles from "./Delete.module.scss";

const cx = classNames.bind(styles);

const Delete = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("restore");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setcurrentPage] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const filmsList = useSelector(filmsTrashSelector);

  const getFilmOnTrash = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/films?sortDel=true"
      );
      ResponseApiHandle(response, (resData) => {
        dispatch(setFilmTrash(resData.films));
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getFilmOnTrash();
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
  const handleRestoreClick = (id) => {
    dispatch(setFilmIdRestore(id));
    setType("restore");
    setShowModal(true);
  };
  const handleDeleteClick = (id) => {
    dispatch(setFilmIdRemove(id));
    setType("remove");
    setShowModal(true);
  };

  return (
    <>
      <ModalCom show={showModal} setShowModal={setShowModal} type={type} />
      <div className={cx("wrapper")}>
        <h2>Trash</h2>
        <div className={cx("content")}>
          <Table bordered>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th colSpan={2} className={cx("text-center")}>
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
                    <Button
                      size="lg"
                      variant="success"
                      onClick={() => {
                        handleRestoreClick(page.id);
                      }}
                    >
                      Restore
                    </Button>
                  </td>
                  <td className={cx("text-center")}>
                    <Button
                      size="lg"
                      variant="danger"
                      onClick={() => {
                        handleDeleteClick(page.id);
                      }}
                    >
                      Remove
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

export default Delete;
