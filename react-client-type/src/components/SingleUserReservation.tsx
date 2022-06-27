
import Button from 'react-bootstrap/Button';

function SingleUserReservation() {
  return (
    <>
    <h1>Your Reservation</h1>
      <h2>Single Reservation</h2>
      <table>
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
          <td>L548OP448TU3</td>
          <button>Copy</button>
        </tr>
      </table>
        <Button>Edit Reservation</Button>
        <Button>Delete Reservation</Button>
    </>
  );
}

export default SingleUserReservation;