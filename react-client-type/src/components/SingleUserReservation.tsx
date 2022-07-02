import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

type RESERVATION_DEFAULT = {
  reservationId: string | undefined,
  appUserId: string,
  companyId: string,
  reservationDate: string,
  reservationCode: string,
  reservationTitle: string,
  companyName: string,
  url: string
};



function SingleUserReservation() {
  const [reservations, setReservations] = useState([]);
  const [reservation, setReservation] = useState<RESERVATION_DEFAULT>({
    reservationId: "",
    appUserId: "",
    companyId: "",
    reservationDate: "",
    reservationCode: "",
    reservationTitle: "",
    companyName: "",
    url: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/api/reservation/${id}`)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .then(data => {
          getCompanyData(data)
        })
        .catch(console.log);
    }
  }, [id]);

  function getCompanyData(data: any) {
    fetch(`http://localhost:8080/api/company/${data.companyId}`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data2 => {
        setReservation({
          reservationId: data.reservationId,
          appUserId: data.appUserId,
          companyId: data.companyId,
          reservationDate: data.reservationDate,
          reservationCode: data.reservationCode,
          reservationTitle: data.reservationTitle,
          companyName: data2.companyName,
          url: data2.url
        })
      })
      .catch(console.log)
  };

  // TODO handleDelete!
  const handleDeleteReservation = (reservationId: string | undefined) => {

    if (window.confirm(
      `    Deletion is permanent.
    Are you sure you want to proceded?
    Delete reservation for ${reservation['reservationTitle']}?`)) {
      const init = {
        method: 'DELETE',
        // headers: {
        //   'Authorization': `Bearer ${auth.user.token}`
        // },
      };

      fetch(`http://localhost:8080/api/reservation/${reservationId}`, init)
        .then(response => {
          if (response.status === 204) {
            const newReservations = reservations.filter(reservation => reservation['reservationId'] !== reservationId);
            setReservations(newReservations);
            navigate(`/userreservationlist/${reservation['appUserId']}`);
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .catch(console.log);
    }
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
            </tr>
          </thead>
          <tbody>
            <tr key={reservation['reservationId']}>
              <td>{reservation['reservationTitle']}</td>
              <td>{reservation['reservationDate']}</td>
              <td>{reservation['companyName']}</td>
              <td><a href={reservation['url']}>{reservation['url']}</a></td>
              <td>{reservation['reservationCode']}<Button className="text-white">Copy</Button></td>
            </tr>
          </tbody>
        </Table>
        <Link to={`/reservationupdateform/${reservation['reservationId']}`} className="btn btn-primary me-3">Edit Reservation</Link>
        <Button variant="danger" onClick={() => handleDeleteReservation(reservation['reservationId'])}>Delete Reservation</Button>
      </Container>
    </>
  );
}

export default SingleUserReservation;