export const FormDataEmpl = () => {
  return (
    <>
      <div className="container-fluid border rounded bg-light p-0">
        <div className="col-md-12 col-lg-12 ">
          <div className="row mx-3 mt-3">
            <h5 className="text-start my-3">Datos del trabajador</h5>
            <div className="col-lg-6">
              <label className="form-label">Estado</label>
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
              <label className="form-label">Fecha de Ingreso:</label>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-regular fa-calendar-days"></i>
                </span>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <label className="form-label">Motivo de Ingreso:</label>
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
            <div className="col-lg-6">
              <label className="form-label">Fecha de Cese:</label>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-regular fa-calendar-days"></i>
                </span>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <label className="form-label">Motivo de Cese</label>
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
              <label className="form-label">Tipo de Trabajador:</label>
              <div className="input-group flex-nowrap mb-3 ">
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
          <div className="row mx-3 mt-3">
            <h5 className="text-start my-3">Pensión</h5>
            <div className="col-lg-6">
              <label className="form-label">Régimen:</label>
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
            <div className="col-lg-6">
              <label className="form-label">AFP:</label>
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
          <div className="row mx-3 mt-3">
            <h5 className="text-start my-3">Datos Organizacionales</h5>
            <div className="col-lg-6">
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
              <label className="form-label">Área laboral:</label>
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
              <label className="form-label">Cargo:</label>
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
            <div className="col-lg-6">
              <label className="form-label">Plan EPS:</label>
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
              <label className="form-label">Ex Renta 4ta:</label>
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
              <label className="form-label">Grupo de Pago:</label>
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
