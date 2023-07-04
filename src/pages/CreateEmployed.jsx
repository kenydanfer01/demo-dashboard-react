import { FormDataEmpl } from "../components/FormDataEmpl";
import FormPerfil from "../components/FormPerfil";

function CreateEmployed() {
  return (
    <div className="container-fluid border rounded m-2 p-2">
      <FormPerfil />
      <FormDataEmpl />
    </div>
  );
}

export default CreateEmployed;
