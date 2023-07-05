//mercedes

export const FormContact = () => {
  return (
    <>
      <div className="container-fluid border rounded bg-light p-0">
        <div className="col-md-12 col-lg-12 ">
          <div className="row mx-3 mt-3">
            <h5 className="text-start my-3">Datos de Contacto</h5>
            <div className="col-lg-6">
              <label className="form-label">Correo Personal:</label>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <label className="form-label">Correo Empresa:</label>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <label className="form-label">Celular:</label>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <label className="form-label">Doc. cuarta Categoría:</label>
              <div className="col mb-3">
                <div className="input-group w-100">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">
                    <i className="fa-solid fa-caret-down"></i>
                  </label>
                  <select className="form-select" id="inputGroupSelect01">
                    <option>Elegir</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                  </select>
                </div>
              </div>
              <label className="form-label">Planilla:</label>
              <div className="col mb-3">
                <div className="input-group w-100">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">
                    <i className="fa-solid fa-caret-down"></i>
                  </label>
                  <select className="form-select" id="inputGroupSelect01">
                    <option>Elegir</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                  </select>
                </div>
              </div>
              <label className="form-label">Código Usuario:</label>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-regular fa-keyboard"> </i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
