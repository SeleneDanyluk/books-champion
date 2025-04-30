import { Button, Modal } from "react-bootstrap"

const DeleteModal = ({ show, entity, headerText, onHide, onDelete }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{headerText}</Modal.Title>
            </Modal.Header>
            <Modal.Body>¿Está seguro que desea eliminar <span className="fw-bold">{entity}</span>?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={onDelete}>
                    Si, deseo eliminarlo
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal