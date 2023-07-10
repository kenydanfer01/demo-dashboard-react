import { SectionWizard } from "./SectionWizard";
import { useState } from "react";
import WizarEmpleado from "./WizarEmpleado";

export const Wizard = () => {
  let sectionName = ["Section 1", "Section 2"];
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <>
      <div className="container-fluid pt-0">
        <div className="d-flex flex-column flex-sm-row justify-content-between my-2">
          <button
            className={`btn btn-primary btn-md border ${
              activeButton === 1 ? "btn-primary" : "btn-light"
            } flex-fill me-2 mb-2 mb-sm-0`}
            onClick={() => handleButtonClick(1)}
          >
            Información Personal
          </button>
          <button
            className={`btn btn-primary btn-md border ${
              activeButton === 2 ? "btn-primary" : "btn-light"
            } flex-fill me-2 mb-2 mb-sm-0`}
            onClick={() => handleButtonClick(2)}
          >
            Informacion Empleado
          </button>
        </div>
        <div className="row">
          <div className="col-12">
            {activeButton === 1 && (
              <>
                <SectionWizard sectionName={(sectionName = 1)} />
              </>
            )}
            {activeButton === 2 && (
              <>
                <WizarEmpleado />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
