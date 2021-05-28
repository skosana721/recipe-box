import React, { useState } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
function EditModal() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Button color="danger">
        <h3>Edit</h3>
      </Button>
      <Modal>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>Hello World</ModalBody>
        <ModalFooter>
          <Button color="primary">Do Something</Button>{" "}
          <Button color="secondary">Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditModal;
