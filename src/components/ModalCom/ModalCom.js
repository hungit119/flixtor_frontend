import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilmRemoved,
  setFilmRestore,
  setFilmSortDel,
} from "../../redux/actions/filmsAction";
import {
  filmIdRemoveSelector,
  filmIdRestoreSelector,
  filmIdSelector,
} from "../../redux/selectors";
import ResponseApiHandle from "../../utils/ResponseApiHandle";
import PropTypes from "prop-types";
import { apiUrl } from "../../constants";
const ModalCom = ({ show, setShowModal, type = "sortDel" }) => {
  const dispatch = useDispatch();
  const id = useSelector(
    type === "sortDel"
      ? filmIdSelector
      : type === "restore"
      ? filmIdRestoreSelector
      : filmIdRemoveSelector
  );
  const handleClose = () => setShowModal(false);
  const handleClickDelete = async () => {
    try {
      const response = await axios.post(`${apiUrl}/film/sortDelete`, { id });
      ResponseApiHandle(response, (resData) => {
        dispatch(setFilmSortDel(resData.id));
        setShowModal(false);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleClickRestore = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/film/sortDelete?restore=true`,
        { id }
      );
      ResponseApiHandle(response, (resData) => {
        dispatch(setFilmRestore(resData.id));
        setShowModal(false);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleClickRemove = async () => {
    try {
      const response = await axios.post(`${apiUrl}/film/remove`, { id });
      ResponseApiHandle(response, (resData) => {
        dispatch(setFilmRemoved(resData.id));
        setShowModal(false);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to{" "}
          {type === "sortDel"
            ? "delete"
            : type === "restore"
            ? "restore"
            : "remove"}{" "}
          the movie with id : {id}
        </Modal.Body>
        <Modal.Footer>
          <Button size="lg" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {type === "sortDel" ? (
            <Button size="lg" variant="danger" onClick={handleClickDelete}>
              Delete
            </Button>
          ) : type === "restore" ? (
            <Button size="lg" variant="success" onClick={handleClickRestore}>
              Restore
            </Button>
          ) : (
            <Button size="lg" variant="danger" onClick={handleClickRemove}>
              Remove
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalCom.propTypes = {
  show: PropTypes.bool,
  setShowModal: PropTypes.func,
  type: PropTypes.string,
};

export default ModalCom;
