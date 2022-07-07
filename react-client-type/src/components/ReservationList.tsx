import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

import AuthContext from '../AuthContext';

type Reservation = {
  reservationId: string | undefined,
  appUserId: string,
  companyId: string,
  reservationDate: string,
  reservationCode: string,
  reservationTitle: string,
  company: {
    companyName?: string,
  }
  userAccount: {
    firstName?: string,
    lastName?: string
  }
};

function ReservationList() {
  const [reservations, setReservations] = useState<Reservation[] | null>(null);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth === undefined || auth.user === null) {
      navigate('/login');
      return;
    }
    const init = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${auth.user.token}`
      },
    };
    fetch('http://localhost:8080/api/reservation', init)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        else if (response.status === 403) {
          navigate('/forbidden');
          return;
        }
        else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => setReservations(data))
      .catch(console.log);
  }, [auth]);

  if (reservations === null || reservations === undefined || reservations.length === 0) {
    return null;
  }

  const length = reservations.length;

  return (
    <>
      <h1 className="text-center mb-5">All Reservations</h1>
      <Container>
        <Table className="table">
          <thead className="thead">
            <tr>
              <th>Reservation ID</th>
              <th>Customer Name</th>
              <th>Company Name</th>
              <th>Reservation Date</th>
              <th>Reservation Code</th>
              <th>Reservation Name</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {reservations.map(reservation => (
              <tr key={reservation['reservationId']}>
                <td>{reservation['reservationId']}</td>
                <td>{reservation?.userAccount['firstName']} {reservation?.userAccount['lastName']}</td>
                <td>{reservation?.company['companyName']}</td>
                <td>{reservation['reservationDate']}</td>
                <td>{reservation['reservationCode']}</td>
                <td>{reservation['reservationTitle']}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="tfoot">
            <tr>
              <td colSpan={6}>Total Number of Reservations: {length}</td>
            </tr>
          </tfoot>
        </Table>
      </Container>
      
    </>
  );
}

export default ReservationList;