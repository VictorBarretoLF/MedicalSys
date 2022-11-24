import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PatientsConfigModal from "../components/PatientsConfigModal";

const ManagePatients = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="h-100">
      <header className="py-2 px-4 d-flex justify-content-sm-end">
        <Button variant="success" onClick={() => setModalShow(true)}>
          Adicionar Paciente
        </Button>

        <PatientsConfigModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </header>
    </div>
  );
};

export default ManagePatients;
