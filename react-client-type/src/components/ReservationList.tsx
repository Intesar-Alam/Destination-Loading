import { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

import AdminMenuBar from './AdminMenuBar';

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
    <AdminMenuBar />
      <h1 className="text-center mb-5">All Reservations</h1>
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
      
    </>
  );
}

export default ReservationList;