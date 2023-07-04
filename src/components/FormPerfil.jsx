const FormPerfil = () => {
  return (
    <div className="bg-light">
      <div className="container-fluid border rounded">
        <div className="row p-2">
          <div className="col-md-3 px-4">
            <div className="form-group pb-2 ">
              <label htmlFor="tipoDocumento">Tipo de documento</label>
              <input
                type="text"
                className="form-control form-control-sm p-2"
                id="tipoDocumento"
              />
            </div>
            <div className="form-group pb-2 ">
              <label htmlFor="nombres">Nombres</label>
              <input
                type="text"
                className="form-control form-control-sm p-2"
                id="nombres"
              />
            </div>
          </div>
          <div className="col-md-3 px-4">
            <div className="form-group pb-2 ">
              <label htmlFor="paisEmision">País de emisión</label>
              <input
                type="text"
                className="form-control form-control-sm p-2"
                id="paisEmision"
              />
            </div>
            <div className="form-group pb-2 ">
              <label htmlFor="apellidoPaterno">Ap. Paterno</label>
              <input
                type="text"
                className="form-control form-control-sm p-2"
                id="apellidoPaterno"
              />
            </div>
          </div>
          <div className="col-md-3 px-4">
            <div className="form-group pb-2 ">
              <label htmlFor="numeroDocumento">N° de documento</label>
              <input
                type="text"
                className="form-control form-control-sm p-2"
                id="numeroDocumento"
              />
            </div>
            <div className="form-group pb-2 ">
              <label htmlFor="apellidoMaterno">Ap. Materno</label>
              <input
                type="text"
                className="form-control form-control-sm p-2"
                id="apellidoMaterno"
              />
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
            <div className="rounded">
              <img
                src="../src/assets/images/perfil2.jpg"
                alt="Imagen"
                className="img-fluid img-thumbnail"
                style={{ maxWidth: "100px" }}
              />
            </div>
            <button type="button" className="btn btn-sm btn-primary mt-1">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPerfil;
