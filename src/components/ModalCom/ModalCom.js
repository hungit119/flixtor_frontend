import axios from "axios";
import React, { useState } from "react";
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
      const response = await axios.post(
        `http://localhost:8000/api/film/sortDelete`,
        { id }
      );
      if (response.data.success) {
        dispatch(setFilmSortDel(response.data.id));
        setShowModal(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleClickRestore = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/film/sortDelete?restore=true`,
        { id }
      );
      if (response.data.success) {
        dispatch(setFilmRestore(response.data.id));
        setShowModal(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleClickRemove = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/film/remove",
        { id }
      );
      if (response.data.success) {
        dispatch(setFilmRemoved(response.data.id));
        setShowModal(false);
      }
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

export default ModalCom;
