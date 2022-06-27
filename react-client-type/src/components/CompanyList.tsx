
import Table from 'react-bootstrap/Table'

function CompanyList() {
  return (
    <>
      <h1>All Companies We Work With</h1>
      {/* <Table>
        <thead className="thead-dark">
          <tr>
            <th>Company Name</th>
            <th>Company Website</th>
            <th>Favicon</th>
            <th>Transportation Mode</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {.map( => (
            <tr key={.id}>
              <td>{.name}</td>
              <td>{.url}</td>
              <td>{.favicon}</td>
              <td>{.mode}</td>
              <td>
                <div className="float-right mr-2">
                  <Link className="btn btn-primary btn-sm mr-2" to={`}`}>
                    <i className="bi bi-pencil-square"></i> Edit
                  </Link>
                  {auth.user && auth.user.hasRole('ROLE_ADMIN') && (
                    <button className="btn btn-danger btn-sm" onClick={() => handleDeletePanel(.id)}>
                      <i className="bi bi-trash"></i> Delete
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </>
  );
}

export default CompanyList;