import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal({ show, setShow}) {
  return (
    <Modal
    show={show}
    onHide={setShow(false)}
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={setShow(false)} variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default DeleteModal;