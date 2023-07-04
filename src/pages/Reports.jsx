
function Reports() {
  return (
    <>
      <div className="container">
  <div className="row">
    <div className="col-md-4">
      <div className="mb-3">
        <label htmlFor="fechaInput" className="form-label">Fecha</label>
        <input type="date" className="form-control form-control-sm" id="fechaInput"/>
      </div>
    </div>
    <div className="col-md-4">
      <div className="mb-3">
        <label htmlFor="desplegableInput" className="form-label">Desplegable</label>
        <select className="form-select form-select-sm" id="desplegableInput">
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
        </select>
      </div>
    </div>
    <div className="col-md-4">
      <div className="mb-3">
        <label htmlFor="textoInput" className="form-label">Texto</label>
        <input type="text" className="form-control form-control-sm" id="textoInput111"/>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Reports;
