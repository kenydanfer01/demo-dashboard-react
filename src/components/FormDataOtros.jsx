

export const FormDataOtros = () => {
  return (
    <div className='container-fluid border rounded bg-light p-0'>
      <div className="col-md-12 col-lg-12 bg-light p-0">
        <form className="needs-validation" noValidate="">
          <div className="row mx-3">

            <h5 className="text-start my-5">Otros Datos</h5>
            <div className="col-sm-12 col-md-6 ">

              <div className="form-floating mb-3">
                <select className="form-select" id="profession" required>
                  <option selected>Seleccionar profesion</option>
                  <option value="1">Developer BackEnd</option>
                  <option value="2">Developer FrontEnd</option>
                  <option value="3">Developer FullStack</option>
                </select>
                <label htmlFor="profession" >Profesion</label>
                <div className="invalid-feedback">
                  Please select a profession.
                </div>
              </div>

              <div className="form-floating mb-3">
                <select className="form-select col-md" id="estadocivil" required="">
                  <option value="">Seleccionar estado</option>
                  <option>Soltero(a)</option>
                  <option>Casado(a)</option>
                  <option>Viudo(a)</option>
                  <option>Divorciado(a)</option>
                  <option>Separado(a)</option>
                  <option>Conviviente(a)</option>
                </select>
                <label htmlFor="estadocivil" className="form-label">Estado Civil</label>

                <div className="invalid-feedback">
                  Please select a state.
                </div>
              </div>

              <div className="form-floating mb-3">
                <select className="form-select col-md" id="estadocivil" required="">
                  <option value="">Elegir</option>
                  <option>Si</option>
                  <option>No</option>
                </select>
                <label htmlFor="estadocivil" className="form-label">Brevete</label>
                <div className="invalid-feedback">
                  Please select option.
                </div>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="username" placeholder="N° Brevete" required="" />
                <div className="invalid-feedback">
                  Your number is required.
                </div>
                <label htmlFor="username" className="form-label">Número de Brevete</label>

              </div>

            </div>

            <div className="col-sm-12 col-md-6">

              <div className="form-floating mb-3">
                <select className="form-select col-md" id="gruposanguineo" required="">
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
                <label htmlFor="gruposanguineo" className="form-label">Grupo Sanguíneo</label>

                <div className="invalid-feedback">
                  Please select one.
                </div>
              </div>


              <div className="form-floating mb-3">
                <input type="date" className="form-control" id="fecha" name="fecha" />
                <label htmlFor="fecha" className="form-label">Fecha de Matrimonio:</label>
              </div>


              <div className="form-floating mb-3">
                <select className="form-select col-md" id="estadopersona" required="">
                  <option value="">Elegir</option>
                  <option>Si</option>
                  <option>No</option>
                </select>
                <label htmlFor="country" className="form-label">Fallecido</label>
                <div className="invalid-feedback">
                  Please select option.
                </div>
              </div>

            </div>
          </div>
          <button className="btn btn btn-success btn-md m-5" type="submit">Guardar</button>

        </form>





      </div>

    </div>
  )
}
