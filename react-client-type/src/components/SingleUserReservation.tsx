
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function SingleUserReservation() {
  return (
    <>
      <h1 className="text-center">Your Reservation</h1>
      <h3 style={{ textDecoration: "underline" }}>Reservation Specifics</h3>
      <Table size="sm">
        <tr>
          <th>Trip Title</th>
          <td>Hawaii Here We Come!</td>
        </tr>
        <tr>
          <th>Date</th>
          <td>10/22/2023</td>
        </tr>
        <tr>
          <th>Transport Company</th>
          <td>Delta</td>
        </tr>
        <tr>
          <th>Company Website</th>
          <td>http://www.delta.com</td>
        </tr>
        <tr>
          <th>Reservation Number</th>
          <td>L548OP448TU3<Button className="text-dark">Copy</Button></td>
        </tr>
      </Table>
      <Button>Edit Reservation</Button>
      <Button>Delete Reservation</Button>
    </>
  );
}

export default SingleUserReservation;