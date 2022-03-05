import React from "react";
import { Modal, Button } from "react-bootstrap";
import Filters from "./Filters";

const FilterModal = ({ show, handleClose }) => {
  return (
    <Modal
      size="lg"
      style={{fontFamily: "Lato, sans-serif"}}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Filters</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{padding:"0.5rem", display:"flex", flexDirection:"column"}}
      >
        <Filters />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Apply Filters
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
