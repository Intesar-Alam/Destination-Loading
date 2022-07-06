import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/container';

import JumboImage from '../images/travelers.jpg';
import AuthContext from '../AuthContext';

import CompanyImage from './CompanyImage';
import Company from './CompanyImage';


// TODO styling
type USER_DEFAULT = {
  appUserId: string | undefined,
  email: string,
  firstName: string,
  lastName: string,
  address: string,
  phone: string,
  dob: string,
};

type Reservation = {
  reservationId: string | undefined,
  appUserId: string,
  companyId: string,
  reservationDate: string,
  reservationCode: string,
  reservationTitle: string,
  company: typeof Company
};

function UserReservationList() {
  const [user, setUser] = useState<USER_DEFAULT>({
    appUserId: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    dob: "",
  });

  const [reservations, setReservations] = useState<Reservation[] | null>(null);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();



  useEffect(() => {
    if (auth === undefined || auth.user === null) {
      navigate('/login');
      return;
    }
    const authorization = {
      headers: {
        'Authorization': `Bearer ${auth.user.token}`
      }
    }
    fetch('http://localhost:8080/api/useraccount/user', authorization)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 403) {
          navigate('/login');
          return;
        }
         else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => setUser(data))
      .catch(console.log);
  }, [auth]);

  useEffect(() => {
    if (auth === undefined || auth.user === null) {
      navigate('/login');
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
        } else if (response.status === 403) {
          navigate('/forbidden');
          return;
        }
         else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => {
        console.log(data);
        setReservations(data)
      })
      .catch(console.log);
  }, [auth]);

  //TEMP
  if (reservations === null) {
    return (
      <>
        <h6 className="text-end me-3 mt-2">Welcome, {user['firstName']}!
          <Link className="btn btn-outline-secondary btn-sm ms-2" to={`/userupdateform/${user['appUserId']}`}>
            <i className="bi bi-pencil"></i>
          </Link>
        </h6>
        <h1 className="text-center mb-5">Looks like you don't have any reservations yet, add reservations to get started!</h1>

        <Container>
          <Link to="/reservationaddform" className="btn btn-primary mb-3">Add Reservation</Link>
        </Container>
      </>
    );
  }

  const dateConverter = (date: string) => {
    const dateArr = date.split('-');
    return dateArr[1] + "/" + dateArr[2] + "/" + dateArr[0];
  };

  return (
    <>
      <h6 className="text-end me-3 mt-2">Welcome, {user['firstName']}!
        <Link className="btn btn-outline-secondary btn-sm ms-2" to={`/userupdateform/${user['appUserId']}`}>
          <i className="bi bi-pencil"></i>
        </Link>
      </h6>
      <h1 className="text-center my-5">Current Reservations</h1>

      <Container>
        <Link to="/reservationaddform" className="pageButton btn mb-3">Add Reservation</Link>
        <Row>
          {reservations.map(reservation => (
            <Col key={reservation['reservationId']} className="col-md-4">
              <Link className="smCardLink" to={`/singleuserreservation/${reservation['reservationId']}`} >
                <Card className="cardSize text-center mb-5 d-flex">
                <CompanyImage {... reservation.company}/>
                    <Card.Title className="smCardTitle">{reservation['reservationTitle']}</Card.Title>
                    <Card.Text className="smCardText">
                      {dateConverter(reservation.reservationDate)}
                    </Card.Text>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default UserReservationList;