import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
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
    icon?: string,
    url?: string
  }
};


// TODO add authorization, must be logged in to view
function SingleUserReservation() {
  // const [reservations, setReservations] = useState([]);
  const [reservation, setReservation] = useState<Reservation | null>(null);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (auth === undefined || auth.user === null) {
      window.alert('You must be logged in to access this feature');
      navigate('/');
      return;
    }
    const init = {
      headers: {
        'Authorization': `Bearer ${auth.user.token}`
      },
    };
    fetch(`http://localhost:8080/api/reservation/${id}`, init)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => {
        setReservation(data);
      })
      .catch(console.log);

  }, [auth, id]);

  if (reservation === null) {
    return null;
  }

  const handleDeleteReservation = (reservationId: string | undefined) => {
    if (auth === undefined || auth.user === null) {
      navigate('/login');
      return;
    }
    if (window.confirm(
      `    Deletion is permanent.
    Are you sure you want to proceded?
    Delete reservation for ${reservation.reservationTitle}`)) {
      const init = {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${auth.user.token}`
        },
      };

      fetch(`http://localhost:8080/api/reservation/${reservationId}`, init)
        .then(response => {
          if (response.status === 204) {
            navigate(`/userreservationlist`);
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .catch(console.log);
    }
  };

  const copyJump = (reservationCode: string) => {
    if (reservation.company.url === undefined) {
      return;
    }
    window.navigator.clipboard.writeText(reservationCode).then(() => {
      window.open(reservation.company.url);
    });
  };

  return (
    <>
      <h1 className="text-center">Your Reservation</h1>
      <Container>
        <h3 style={{ textDecoration: "underline" }}>Reservation Specifics</h3>
        <Table size="sm">
          <thead>
            <tr>
              <th>Trip Title</th>
              <th>Date</th>
              <th>Transport Company</th>
              <th>Company Website</th>
              <th>Reservation Number</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr key={reservation.reservationId}>
              <td>{reservation.reservationTitle}</td>
              <td>{reservation.reservationDate}</td>
              <td>{reservation.company.companyName}</td>
              <td><img src={reservation.company.icon} style={{ width: '32px' }} />&nbsp;<a href={reservation.company.url} target="blank">{reservation.company.url}</a></td>
              <td>{reservation.reservationCode}</td>
              <td><Button className="text-white" onClick={() => copyJump(reservation.reservationCode)}>Copy and Jump to page</Button></td>
            </tr>
          </tbody>
        </Table>
        <Link to={`/reservationupdateform/${reservation.reservationId}`} className="btn btn-primary me-3">Edit Reservation</Link>
        <Button className="btn btn-danger me-3" onClick={() => handleDeleteReservation(reservation.reservationId)}>Delete Reservation</Button>
        <Link to={`/userreservationlist/`} className="btn btn-success me-3"><i className="bi bi-arrow-left-short"></i>Back</Link>
      </Container>
    </>
  );
}

export default SingleUserReservation;