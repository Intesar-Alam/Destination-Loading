import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AuthContext from '../AuthContext';

//Image imports find a better way please
import CompanyImage from './CompanyImage';
import Company from './CompanyImage';

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
    url?: string,
    transportationMode?: string
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

  const copyReservation = (reservationCode: string, event: any) => {
    event.preventDefault();
    window.navigator.clipboard.writeText(reservationCode);
  };

  const copyJump = (reservationCode: string) => {
    if (reservation.company.url === undefined) {
      return;
    }
    window.navigator.clipboard.writeText(reservationCode).then(() => {
      window.open(reservation.company.url);
    });
  };

  const dateConverter = (date: string) => {
    const dateArr = date.split('-');
    return dateArr[1] + "/" + dateArr[2] + "/" + dateArr[0];
  };

  return (
    <>
      {/* <h1 className="text-center my-5">Reservation Details</h1>
      <Container>
        <h3>Reservation Details</h3>
        <Card className="mb-3">
          <Row>
          <Col className="col-lg-3">
              <CompanyImage {...reservation.company} />
            </Col>
            <Col className="col-lg-6">
              <Card.Body>
                <Card.Title>{reservation.reservationTitle}</Card.Title>
                <Card.Text>
                {dateConverter(reservation.reservationDate)}
                </Card.Text>
                <Card.Text>
                  <img src={reservation.company.icon} style={{ width: '32px' }} /> <a href={reservation.company.url} target="_blank">{reservation.company.companyName}</a>
                </Card.Text>
                <Card.Text>
                  <b>Reservation Code</b><br />
                  <a href={''} onClick={(event) => copyReservation(reservation.reservationCode, event)}>{reservation.reservationCode}</a>
                </Card.Text>
                <Card.Text>
                  <Button className="pageButton" onClick={() => copyJump(reservation.reservationCode)}>Copy and Jump to page</Button>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Row>
          <Col className="mb-3">
            <Link to={`/reservationupdateform/${reservation.reservationId}`} className="pageButton btn me-3">Edit Reservation</Link>
            <Button className="deleteButton me-3" onClick={() => handleDeleteReservation(reservation.reservationId)}>Delete Reservation</Button>
          </Col>
        </Row>
        <Link to={`/userreservationlist/`}><i className="bi bi-arrow-left-short"></i>Back</Link>
      </Container> */}
      <h1 className="text-center my-5">Reservation Details</h1>
      <Container>
        <h3>Reservation Specifics</h3>
        <Table className="table" size="sm">
          <thead className="thead">
            <tr>
              <th>Trip</th>
              <th>Date</th>
              <th>Transport Company</th>
              <th>Reservation Number</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody className="tbody">
            <tr>
              <td>{reservation.reservationTitle}</td>
              <td>{reservation.reservationDate}</td>
              <td><img src={reservation.company.icon} style={{ width: '32px' }} /> <a href={reservation.company.url} target="blank">{reservation.company.companyName}</a></td>
              <td>{reservation.reservationCode}</td>
              <td><Button className="pageButton" onClick={() => copyJump(reservation.reservationCode)}>Copy and Jump to page</Button></td>
            </tr>
          </tbody>
        </Table>
        <Row>
          <Col className="mb-3">
            <Link to={`/reservationupdateform/${reservation.reservationId}`} className="pageButton btn me-3">Edit Reservation</Link>
            <Button className="deleteButton me-3" onClick={() => handleDeleteReservation(reservation.reservationId)}>Delete Reservation</Button>
          </Col>
        </Row>
        <Link to={`/userreservationlist/`}><i className="bi bi-arrow-left-short"></i>Back</Link>
      </Container>
    </>
  );
}

export default SingleUserReservation;