export const FormDataOtros = () => {
  return (
    <>
      <div className="container-fluid border rounded bg-light p-0">
        <div className="col-md-12 col-lg-12 ">
          <div className="row mx-3 mt-3">
            <h5 className="text-start my-3">Otros Datos</h5>
            <div className="col-lg-6">
              <label className="form-label">Profesión:</label>
              <div className="col mb-3">
                <div className="input-group w-100">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">
                    <i className="fa-solid fa-caret-down"></i>
                  </label>
                  <select className="form-select" id="inputGroupSelect01">
                    <option value=""></option>
                    <option>Soltero(a)</option>
                    <option>Casado(a)</option>
                    <option>Viudo(a)</option>
                    <option>Divorciado(a)</option>
                    <option>Separado(a)</option>
                    <option>Conviviente(a)</option>
                  </select>
                </div>
              </div>
              <label className="form-label">Estado Civil:</label>
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
              <label className="form-label">Brevete:</label>
              <div className="col mb-3">
                <div className="input-group w-100">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">
                    <i className="fa-solid fa-caret-down"></i>
                  </label>
                  <select className="form-select" id="inputGroupSelect01">
                    <option>Elegir</option>
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <label className="form-label">Numero Brevete:</label>
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
              <label className="form-label">Grupo Sanguíneo:</label>
              <div className="col mb-3">
                <div className="input-group w-100">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">
                    <i className="fa-solid fa-caret-down"></i>
                  </label>
                  <select className="form-select" id="inputGroupSelect01">
                    <option value="">Seleccione grupo</option>
                    <option>O-</option>
                    <option>A</option>
                    <option>B</option>
                    <option>AB</option>
                    <option>O</option>
                    <option>A+</option>
                    <option>B+</option>
                    <option>O+</option>
                  </select>
                </div>
              </div>
              <label className="form-label">Fecha de Matrimonio:</label>
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
              <label className="form-label">Fallecido:</label>
              <div className="col mb-3">
                <div className="input-group w-100">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">
                    <i className="fa-solid fa-caret-down"></i>
                  </label>
                  <select className="form-select" id="inputGroupSelect01">
                    <option>Elegir</option>
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
