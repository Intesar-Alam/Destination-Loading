import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ReservationList() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/test/reservation')
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => setReservations(data))
      .catch(console.log);
  }, []);


  return (
    <>
      <h1>All Reservations</h1>
      <Container>

        <Table>
          <thead className="thead-dark">
            <tr>
              <th>Reservation ID</th>
              <th>Customer ID</th>
              <th>Company ID</th>
              <th>Reservation Date</th>
              <th>Reservation Code</th>
              <th>Reservation Name</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map(reservation => (
              <tr key={reservation['reservationId']}>
                <td>{reservation['reservationId']}</td>
                <td>{reservation['appUserId']}</td>
                <td>{reservation['companyId']}</td>
                <td>{reservation['reservationDate']}</td>
                <td>{reservation['reservationCode']}</td>
                <td>{reservation['reservationTitle']}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      {/* <Table>
        <thead className="thead-dark">
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Date of Birth</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {.map( => (
            <tr key={.id}>
              <td>{.id}</td>
              <td>{.firstName} {.lastName}</td>
              <td>{.email}</td>
              <td>{.address}</td>
              <td>{.phone}</td>
              <td>{.dob}</td>
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
      <Button>Edit Customer</Button>
    </>
  );
}

export default ReservationList;