import {
  faCaretLeft,
  faCaretRight,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
import { apiUrl } from "../../../../../constants";
import {
  setAllUsers,
  setUserRule,
} from "../../../../../redux/actions/adminAction";
import { setIsLoadingFilms } from "../../../../../redux/actions/controlAction";
import {
  isLoadingFilmsSelector,
  userAdminSelector,
} from "../../../../../redux/selectors";
import ResponseApiHandle from "../../../../../utils/ResponseApiHandle";
import ModalAdmin from "../../components/ModalAdmin";
import styles from "./User.module.scss";
const cx = classNames.bind(styles);

const User = () => {
  const dispatch = useDispatch();
  const [showModal, setshowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [currentPage, setcurrentPage] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const userList = useSelector(userAdminSelector);
  const isLoading = useSelector(isLoadingFilmsSelector);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userList.length;
    setItemOffset(newOffset);
  };

  const handleClickSwitchBtn = (rule, username, id) => {
    if (rule === 1) {
      setModalData({
        id,
        title: "Swicth to Manager",
        body: `Do you want change member ${username} to Manager?`,
        func: handleClickSwitchToManagerButton,
      });
    } else {
      setModalData({
        id,
        title: "Swicth to Member",
        body: `Do you want change manager ${username} to Member?`,
        func: handleClickSwitchToMemberButton,
      });
    }
    setshowModal(true);
  };

  const handleClickSwitchToManagerButton = async (id) => {
    try {
      const response = await axios.post(`${apiUrl}/admin/changeRule`, {
        id,
        rule: 2,
      });
      ResponseApiHandle(response, (resData) => {
        dispatch(setUserRule({ id, rule: 2 }));
      });
    } catch (error) {
      throw error;
    }
  };
  const handleClickSwitchToMemberButton = async (id) => {
    try {
      const response = await axios.post(`${apiUrl}/admin/changeRule`, {
        id,
        rule: 1,
      });
      ResponseApiHandle(response, (resData) => {
        dispatch(setUserRule({ id, rule: 1 }));
      });
    } catch (error) {
      throw error;
    }
  };

  const getFullUsers = async () => {
    try {
      dispatch(setIsLoadingFilms(true));
      const response = await axios.get(`${apiUrl}/admin/users`);
      ResponseApiHandle(response, (resData) => {
        dispatch(setAllUsers(resData.data));
        dispatch(setIsLoadingFilms(false));
      });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getFullUsers();
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setPageCount(Math.ceil(userList.length / itemsPerPage));
    setcurrentPage(userList.slice(itemOffset, endOffset));
  }, [itemOffset, itemsPerPage, userList]);

  return (
    <>
      <ModalAdmin
        show={showModal}
        setShowModal={setshowModal}
        title={modalData.title}
        body={modalData.body}
        handle={modalData.func}
        id={modalData.id}
      />
      <div className={cx("wrapper")}>
        <h2>Users</h2>
        <div className={cx("content")}>
          {isLoading ? (
            <div className={cx("loading-wrapper")}>
              <BeatLoader color="#118395" />
            </div>
          ) : (
            <div className={cx("content-wrapper")}>
              <Table bordered>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Rule</th>
                    <th className={cx("text-center")}>Verify</th>
                    <th className={cx("text-center")}>Setting</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPage.map((page, index) => (
                    <tr key={index} className={cx("user")}>
                      <td>{page.id}</td>
                      <td>{page.username}</td>
                      <td>{page.email}</td>
                      <td>
                        {page.rule === 1 ? (
                          <span className={cx("member-title")}>Member</span>
                        ) : (
                          <span className={cx("manager-title")}>Manager</span>
                        )}
                      </td>
                      <td className={cx("text-center")}>
                        {page.verify === true ? (
                          <FontAwesomeIcon
                            className={cx("verified")}
                            icon={faCircleCheck}
                          />
                        ) : (
                          <FontAwesomeIcon
                            className={cx("un-verified")}
                            icon={faCircleXmark}
                          />
                        )}
                      </td>
                      <td className={cx("text-center")}>
                        {page.rule === 2 ? (
                          <Button
                            size="lg"
                            variant="primary"
                            onClick={() => {
                              handleClickSwitchBtn(
                                page.rule,
                                page.username,
                                page.id
                              );
                            }}
                          >
                            Change to Member
                          </Button>
                        ) : (
                          <Button
                            size="lg"
                            variant="danger"
                            onClick={() => {
                              handleClickSwitchBtn(
                                page.rule,
                                page.username,
                                page.id
                              );
                            }}
                          >
                            Change to Manager
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
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

export default User;
