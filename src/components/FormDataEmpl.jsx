export const FormDataEmpl = () => {
    return (
        <>
            <div className="container bg-light ">
                <div className="col-md-12 col-lg-12 border border-2 border-secondary rounded-3 my-4">
                    <div className="row m-4">
                        {/* Seccion 1 */}
                        <h3>Datos del trabajador</h3>
                        <div className="col-lg-6">
                            <label className="form-label">Estado</label>
                            <div className="col mb-3">
                                <div className="input-group w-100">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01"></label>
                                    <select className="form-select" id="inputGroupSelect01">
                                        <option>Elegir</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Fecha de Ingreso:</label>
                                <input type="date" className="form-control w-100" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Motivo de Ingreso:</label>
                                <input type="text" className="form-control w-100" placeholder="Seleccione Motivo" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <label className="form-label">Fecha de Cese:</label>
                                <input type="date" className="form-control w-100" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Motivo de Cese:</label>
                                <div className="input-group mb-3 w-100">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01"></label>
                                    <select className="form-select" id="inputGroupSelect01">
                                        <option>Elige</option>
                                        <option >One</option>
                                        <option >Two</option>
                                        <option >Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Tipo de Trabajador</label>
                                <input type="text" className="form-control w-100" placeholder="Seleccione tipo" />
                            </div>
                        </div>

                    </div>
                    {/* Seccion 2 */}
                    <div className="row m-4">
                        <h3>Pensión</h3>
                        <div className="col-lg-6">
                            <label className="form-label">Régimen</label>
                            <input type="text" className="form-control w-100 mb-4" placeholder="Selecciona Motivo" />
                            <label className="form-label">AFP</label>
                            <input type="text" className="form-control w-100 mb-4" placeholder="Selecciona tipo" />
                        </div>
                    </div>
                    {/* Seccion 3 */}
                    <div className="row m-4">
                        <h3>Datos Organizacionales</h3>
                        <div className="col-lg-6">
                            <label className="form-label">Planilla</label>
                            <div className="input-group mb-3 w-100">
                                <label className="input-group-text" htmlFor="inputGroupSelect01"></label>
                                <select className="form-select" id="inputGroupSelect01">
                                    <option >Elige</option>
                                    <option >One</option>
                                    <option >Two</option>
                                    <option >Three</option>
                                </select>
                            </div>
                            <div className="">
                                <label className="form-label">Area Laboral</label>
                                <input type="text" className="form-control w-100" placeholder="Ingrese área" />
                            </div>
                            <div className="">
                                <label className="form-label mt-3">Cargo</label>
                                <input type="text" className="form-control w-100" placeholder="############" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label">Plan EPS</label>
                            <div className="input-group mb-3 w-100">
                                <label className="input-group-text" htmlFor="inputGroupSelect01"></label>
                                <select className="form-select" id="inputGroupSelect01">
                                    <option >Elige</option>
                                    <option >One</option>
                                    <option >Two</option>
                                    <option >Three</option>
                                </select>
                            </div>

                            <label className="form-label">Ex Renta 4ta</label>
                            <div className="input-group mb-3 w-100">
                                <label className="input-group-text" htmlFor="inputGroupSelect01"></label>
                                <select className="form-select" id="inputGroupSelect01">
                                    <option >Elige</option>
                                    <option >One</option>
                                    <option >Two</option>
                                    <option >Three</option>
                                </select>
                            </div>

                            <label className="form-label">Grupo de Pago</label>
                            <input type="text" className="form-control w-100" placeholder="Ingresar Código" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}