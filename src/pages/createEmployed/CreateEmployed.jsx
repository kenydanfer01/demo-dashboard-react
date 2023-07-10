import { useState } from "react";
import { FormDataEmpl } from "./FormDataEmpl";
import { FormDataPerson } from "./FormDataPerson";
import FormPerfil from "./FormPerfil";
import { FormDataOtros } from "./FormDataOtros";
import { FormContact } from "./FormContact";

function CreateEmployed() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div className="container-fluid border rounded m-2 p-2">
      <FormPerfil />
      <div className="container-fluid pt-0">
        <div className="d-flex flex-column flex-sm-row justify-content-between my-2">
          <button
            className={`btn btn-success btn-md border ${
              activeButton === 1 ? "btn-success" : "btn-light"
            } flex-fill me-2 mb-2 mb-sm-0`}
            onClick={() => handleButtonClick(1)}
          >
            Nacimiento Y Domicilio
          </button>
          <button
            className={`btn btn-success btn-md border ${
              activeButton === 2 ? "btn-success" : "btn-light"
            } flex-fill me-2 mb-2 mb-sm-0`}
            onClick={() => handleButtonClick(2)}
          >
            Datos de Contacto
          </button>
          <button
            className={`btn btn-success btn-md border ${
              activeButton === 3 ? "btn-success" : "btn-light"
            } flex-fill me-2 mb-2 mb-sm-0`}
            onClick={() => handleButtonClick(3)}
          >
            Datos Laborales
          </button>
          <button
            className={`btn btn-success btn-md border ${
              activeButton === 4 ? "btn-success" : "btn-light"
            } flex-fill me-2 mb-2 mb-sm-0`}
            onClick={() => handleButtonClick(4)}
          >
            Otros datos
          </button>
        </div>
        <div className="row">
          <div className="col-12">
            {activeButton === 1 && <FormDataPerson />}
            {activeButton === 2 && <FormContact />}
            {activeButton === 3 && <FormDataEmpl />}
            {activeButton === 4 && <FormDataOtros />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployed;
