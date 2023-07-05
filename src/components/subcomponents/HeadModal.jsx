import user_data from "../data/profile.json";
import {
  MdAlternateEmail,
  MdPerson2,
  MdLocationPin,
  MdLocalPhone,
} from "react-icons/md";

export const HeadModal = () => {
  return (
    <>
      <div className="modal-header">
        <h1 className="modal-title">Perfil de Empleado</h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12 p-0">
            <div className="foto d-flex overflow-hidden">
              <img
                src={user_data.foto}
                alt="Foto de perfil"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="numero text-center">
              <h5 className="m-0">DNI: {user_data.documento.dni}</h5>
            </div>
          </div>

          <div className="col-md-9 col-12 ">
            <div className="row">
              <div className="col-md-7 col-10 ">
                < h4 className="mr-3">{user_data.nombre}</ h4>
              </div>
              <div className="col-md-2 col-2 ">
                < h4 className="mr-3">{user_data.nacionalidad}</ h4>
              </div>
              <div className="col-md-3 col-12">
                <button className="btn btn-secondary">Editar</button>
              </div>
            </div>
            <div className="row ">
              <div className="">
                <h5>
                  <MdPerson2 /> {user_data.cargo}
                </h5>
              </div>
              <div className=" ">
                <h5>
                  <MdLocationPin /> {user_data.datos_contacto.residencia}
                </h5>
              </div>
              <div className=" ">
                <h5>
                  <MdAlternateEmail /> {user_data.datos_contacto.email}
                </h5>
              </div>
              <div className=" ">
                <h5>
                  <MdLocalPhone /> {user_data.datos_contacto.telefono}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row w-50 p-3">
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <div className="flex-shrink-0">
                        <img src={user_data.foto} alt="Foto de perfil" />
                        <h5 className='text-center'>{user_data.documento.dni}</h5>
                    </div>
                </div>
                <div className="col-8 px-3">
                    <div className="d-flex justify-content-between">
                        < h4 className='mr-3'>{user_data.nombre}</ h4>
                        < h4 className='mr-3'>{user_data.nacionalidad}</ h4>
                        <button className='btn btn-secondary'>Editar</button>
                    </div>
                    <h5><MdPerson2 /> {user_data.cargo}</h5>
                    <h5><MdLocationPin /> {user_data.datos_contacto.residencia}</h5>
                    <h5><MdAlternateEmail /> {user_data.datos_contacto.email}</h5>
                    <h5><MdLocalPhone /> {user_data.datos_contacto.telefono}</h5>
                </div>
            </div> */}
    </>
  );
};
