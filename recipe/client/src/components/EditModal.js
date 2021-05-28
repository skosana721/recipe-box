import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
function EditModal({ ingredients }) {
  const [modal, setModal] = useState(false);
  const [newIngredients, setNewIngredients] = useState(ingredients);
  const dispatch = useDispatch();
  const toggle = () => setModal(!modal);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        <h3>Edit</h3>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => setNewIngredients(e.target.value)}
              value={newIngredients}
            />
            <Button type="submit">Submit</Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditModal;
