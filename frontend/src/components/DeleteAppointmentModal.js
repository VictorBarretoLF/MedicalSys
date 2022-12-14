import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import useSchedulingContext from "../hooks/useSchedulingContext";

const DeleteAppointmentModal = ({
  show,
  onHide,
  appointmentData,
  appointmentIndex,
  currentDoctor,
  currentPatient,
}) => {
  const { deleteAppointment } = useSchedulingContext();
  // console.log(currentDoctor)
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
          deleteAppointment(appointmentData, appointmentIndex);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Deletar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>
            Tem certreza que deseja apagar a consulta?{" "}
            <p className="text-decoration-underline">
              Com o médico: {currentDoctor?.username}
            </p>
            <p className="text-decoration-underline">
              E o paciente: {currentPatient?.name}
            </p>
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

export default DeleteAppointmentModal;
