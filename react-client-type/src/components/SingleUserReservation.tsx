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
  reservationIcon?: string,
  companyName?: string,
  url?: string
};


// TODO add authorization, must be logged in to view
function SingleUserReservation() {
  const [reservations, setReservations] = useState([]);
  const [reservation, setReservation] = useState<Reservation>({
    reservationId: "",
    appUserId: "",
    companyId: "",
    reservationDate: "",
    reservationCode: "",
    reservationTitle: "",
    reservationIcon: "",
    companyName: "",
    url: "",
  });

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
      fetch('http://localhost:8080/api/reservation/user', init)
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

  }, [auth]);

  function getCompanyData(data: Reservation[]) {
    for (const reservation of data) { 
      fetch(`http://localhost:8080/api/company/${reservation.companyId}`)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .then(company => {
          setReservation({
            reservationId: reservation.reservationId,
            appUserId: reservation.appUserId,
            companyId: reservation.companyId,
            reservationDate: reservation.reservationDate,
            reservationCode: reservation.reservationCode,
            reservationTitle: reservation.reservationTitle,
            reservationIcon: company.icon,
            companyName: company.companyName,
            url: company.url
          })
        })
        .catch(console.log)
      }
  };

  // TODO handleDelete!
  const handleDeleteReservation = (reservationId: string | undefined) => {
    if (auth === undefined || auth.user === null) {
      navigate('/login');
      return;
    }
    if (window.confirm(
      `    Deletion is permanent.
    Are you sure you want to proceded?
    Delete reservation for ${reservation['reservationTitle']}?`)) {
      const init = {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${auth.user.token}`
        },
      };

      fetch(`http://localhost:8080/api/reservation/${reservationId}`, init)
        .then(response => {
          if (response.status === 204) {
            const newReservations = reservations.filter(reservation => reservation['reservationId'] !== reservationId);
            setReservations(newReservations);
            navigate(`/userreservationlist`);
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .catch(console.log);
    }
  };

  const copyReservation = (reservationCode: string) => {
    navigator.clipboard.writeText(reservationCode);
  };

  const copyJump = (reservationCode: string) => {
    if(reservation['url'] === undefined){
      return;
    }
    navigator.clipboard.writeText(reservationCode);
    window.open(reservation['url']);
    // window.location.href = reservation['url'];
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
            <tr key={reservation['reservationId']}>
              <td>{reservation['reservationTitle']}</td>
              <td>{reservation['reservationDate']}</td>
              <td>{reservation['companyName']}</td>
              <td><img src={reservation['reservationIcon']} style={{ width: '32px'}} />&nbsp;<a href={reservation['url']} target="blank">{reservation['url']}</a></td>
              <td>{reservation['reservationCode']}&nbsp;<Button className="text-white" onClick={() => copyReservation(reservation['reservationCode'])}>Copy</Button></td>
              <td><Button className="text-white" onClick={() => copyJump(reservation['reservationCode'])}>Copy & Jump to page</Button></td>
            </tr>
          </tbody>
        </Table>
        <Link to={`/reservationupdateform/${reservation['reservationId']}`} className="btn btn-primary me-3">Edit Reservation</Link>
        <Button className="btn btn-danger me-3" onClick={() => handleDeleteReservation(reservation['reservationId'])}>Delete Reservation</Button>
        <Link to={`/userreservationlist/`} className="btn btn-success me-3"><i className="bi bi-arrow-left-short"></i>Back</Link>
      </Container>
    </>
  );
}

export default SingleUserReservation;