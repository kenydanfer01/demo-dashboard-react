//mercedes

export const FormContact = () => {
  return (
    <>
      <div className="container-fluid border rounded-3 bg-light mt-5 p-3">
    

        <div className="container row mx-auto justify-content-around ">
          <h5 className="text-start my-4">Datos Contacto</h5>
          <div className="col-auto">
            <div className="mb-3">
              <label className="form-label fw-bold">Correo Personal</label>
              <input
                type="text"
                className="form-control rounded-4"
                placeholder="Ingrese correo"
                name="Correo Personal"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Correo Empresa</label>
              <div className="col-lg-12">
                <input
                  type="text"
                  className="form-control rounded-4"
                  placeholder="Ingrese correo"
                  name="email"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Celular</label>
              <div className="col-lg-12">
                <input type="text" className="form-control rounded-4" placeholder="956236489" name="email" />
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="mb-3">
              <label className="form-label fw-bold">Doc. Cuarta Categoría</label>
              <div class="container">
                <div class="dropdown">
                  <button class="btn btn-gray border-secondary bg-white dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Elegir
                  </button>
                  <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">1</a></li>
                    <li><a class="dropdown-item" href="#">2</a></li>
                    <li><a class="dropdown-item" href="#">3</a></li>
                    <li><a class="dropdown-item" href="#">4</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Planilla</label>
              <select className="form-select" id="planilla" name="planilla">
                <option>Planilla</option>
                <option>Recibo por Honorarios</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Codigo Usuario</label>
              <div className="col-lg-8">
                <input type="password" className="form-control rounded-4" placeholder="Ingrese código" name="pswd" />
              </div>
            </div>
          </div>
        </div>


        

        <style>
          {`
            .form-control::placeholder {
              color: #999999; /* Color plomo */
          `}
        </style>

       
       


       

      </div>

    </>
  );
};
