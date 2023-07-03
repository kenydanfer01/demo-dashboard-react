function Home() {
  return (
    <>
      <div className="dash-content">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td>Doe</td>
                  <td>johndoe@example.com</td>
                  <td>123456789</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>johndoe@example.com</td>
                  <td>123456789</td>
                </tr>
                <tr>
                  <td>Jane</td>
                  <td>Smith</td>
                  <td>janesmith@example.com</td>
                  <td>987654321</td>
                  <td>Jane</td>
                  <td>Smith</td>
                  <td>janesmith@example.com</td>
                  <td>987654321</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
