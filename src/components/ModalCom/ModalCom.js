import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setFilmSortDel } from "../../redux/actions/filmsAction";
import { filmIdSelector } from "../../redux/selectors";
const ModalCom = ({ show, setShowModal }) => {
  const dispatch = useDispatch();
  const id = useSelector(filmIdSelector);
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
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the movie with id : {id}
        </Modal.Body>
        <Modal.Footer>
          <Button size="lg" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button size="lg" variant="danger" onClick={handleClickDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCom;
