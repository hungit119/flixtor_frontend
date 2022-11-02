import React from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const ModalAdmin = ({ title, body, show, setShowModal, handle, id }) => {
  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => setShowModal(false)}
        >
          Close
        </Button>
        <Button
          size="lg"
          variant="danger"
          onClick={() => {
            handle(id);
            setShowModal(false);
          }}
        >
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalAdmin.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  handle: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ModalAdmin;
