import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import usePatientContext from "../hooks/usePatientContext";

const DeletePatientModal = ({ show, onHide, patientData, patientIndex }) => {
  const { deletePatient } = usePatientContext();

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          deletePatient(patientData, patientIndex);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Deletar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>
            Tem certreza que deseja apagar:{" "}
            <span className="text-decoration-underline">
              {patientData.name}
            </span>?
          </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancelar
          </Button>
          <Button variant="danger" type="submit">
            Deletar
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default DeletePatientModal;
