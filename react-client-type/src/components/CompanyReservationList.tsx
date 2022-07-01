import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

function CompanyReservationList() {
  return (
    <>
      <h1>All Reservations for CompanyNameHere</h1>

      <Table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Reservation Title</th>
            <th>Date</th>
            <th>Reservation Code</th>
          </tr>
        </thead>
        {/* Add mapping here to populate table data */}
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total Number of Reservations: (count)</td>
          </tr>
        </tfoot>
      </Table>

      {/* <Link to={`/companypage/${company['companyId']}`}><i className="bi bi-arrow-left-short"></i>Back</Link> */}

    </>
  );
}

export default CompanyReservationList;