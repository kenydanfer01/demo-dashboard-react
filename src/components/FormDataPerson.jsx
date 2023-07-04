export const FormDataPerson = () => {
  return (
    <div className="container-fluid border rounded bg-light p-0">
      <div className="bg-light p-4 border rounded">
        <form>
          <h4 className="text-start my-4">Datos de Nacimiento</h4>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Fecha de Nacimiento</label>
                <input
                  type="date"
                  className="form-control"
                  id="fechaNacimiento"
                  name="fechaNacimiento"
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Sexo</label>
                <select className="form-select" id="sexo" name="sexo">
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
              </div>
            </div>
          </div>

          <h4 className="text-start my-4">Domicilio y Referencia</h4>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Nacionalidad</label>
                <select
                  className="form-select"
                  id="nacionalidad"
                  name="nacionalidad"
                >
                  <option value="">Seleccione</option>
                  <option value="nacionalidad1">Peruano</option>
                  <option value="nacionalidad2">Venezolano</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Departamento</label>
                <select
                  className="form-select"
                  id="departamento"
                  name="departamento"
                >
                  <option value="">Seleccione</option>
                  <option value="">Lima</option>
                  <option value="">Arequipa</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Provincia</label>
                <select className="form-select" id="provincia" name="provincia">
                  <option value="">Seleccione</option>
                  <option value="">Lima Metropolitano</option>
                  <option value="">Cañete</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Distrito</label>
                <select className="form-select" id="distrito" name="distrito">
                  <option value="">Seleccione</option>
                  <option value="">San Juan de Lurigancho</option>
                  <option value="">Lince</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Domicilio</label>
                <input
                  type="text"
                  className="form-control"
                  id="domicilio"
                  name="domicilio"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
