import { useState } from "react";
import { FormDataEmpl } from "../components/FormDataEmpl";
import { FormDataPerson } from "../components/FormDataPerson";
import FormPerfil from "../components/FormPerfil";
import { FormDataOtros } from "../components/FormDataOtros";

function CreateEmployed() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div className="container-fluid border rounded m-2 p-2">
      <FormPerfil />
        <div className="container-fluid pt-0">
            <div className="d-flex justify-content-between my-2">
              <button
                className={`btn btn-success btn-md border ${
                  activeButton === 1 ? "btn-success" : "btn-light"
                } flex-fill me-2`}
                onClick={() => handleButtonClick(1)}
              >
                Nacimiento Y Domicilio
              </button>
              <button
                className={`btn btn-success btn-md border ${
                  activeButton === 2 ? "btn-success" : "btn-light"
                } flex-fill me-2`}
                onClick={() => handleButtonClick(2)}
              >
                Datos de Contacto
              </button>
              <button
                className={`btn btn-success btn-md border ${
                  activeButton === 3 ? "btn-success" : "btn-light"
                } flex-fill`}
                onClick={() => handleButtonClick(3)}
              >
                Otros datos
              </button>
            </div>
            {activeButton === 1 && <FormDataPerson />}
            {activeButton === 2 && <FormDataEmpl />}
            {activeButton === 3 && <FormDataOtros />}
        </div>
      </div>

  );
}

export default CreateEmployed;
