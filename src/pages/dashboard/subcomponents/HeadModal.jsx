import user_data from "../../../components/data/profile.json";
import {
  MdAlternateEmail,
  MdPerson2,
  MdLocationPin,
  MdLocalPhone,
} from "react-icons/md";
import { LuEdit } from "react-icons/lu";

export const HeadModal = () => {
  return (
    <>
      <div className="p-0">
        <div className="row p-0 d-flex align-items-center ">
          <div className="col d-md-none">
            <button className="btn btn-secondary">
              <LuEdit />
            </button>
          </div>
          <div className="col-8 col-md-11 text-center mx-auto">
            <h1 className=" ">Perfil de Empleado</h1>
          </div>
          <div className="col text-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="text-center">
              <img
                src={user_data.foto}
                className="img-fluid"
                alt="Foto de perfil"
              />
            </div>
            <h5 className="m-0 text-center">DNI:{user_data.documento.dni}</h5>
          </div>
          <div className="col-md-8 col-12">
            <div className=" row d-flex align-items-center ">
              <h3 className="col-md-7 col-10">{user_data.nombre}</h3>
              <h3 className="col-md-2 col-2">{user_data.nacionalidad}</h3>
              <div className="col-md-3 col-12 d-none d-md-block">
                <button className="btn btn-secondary  ">Editar</button>
              </div>
            </div>
            <div className="row">
              <h5 className="col-12 mb-2">
                <MdPerson2 /> {user_data.cargo}
              </h5>
              <h5 className="col-12 mb-2">
                <MdLocationPin /> {user_data.datos_contacto.residencia}
              </h5>
              <h5 className="col-12 mb-2">
                <MdAlternateEmail /> {user_data.datos_contacto.email}
              </h5>
              <h5 className="col-12 mb-0">
                <MdLocalPhone /> {user_data.datos_contacto.telefono}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
