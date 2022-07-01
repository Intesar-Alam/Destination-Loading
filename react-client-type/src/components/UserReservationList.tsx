import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/container';
import Button from 'react-bootstrap/Button';

import JumboImage from '../images/travelers.jpg';

type USER_DEFAULT = {
  appUserId: string | undefined,
  email: string,
  firstName: string,
  lastName: string,
  address: string,
  phone: string,
  dob: string,
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

  const [reservations, setReservations] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/api/useraccount/${id}`)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .then(data => setUser(data))
        .catch(console.log);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/api/reservation/useraccount/${id}`)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .then(data => setReservations(data))
        .catch(console.log);
    }
  }, [id]);

  // const pictureArray = [image1, image2, image3, image4];

  // function randomPicture() {
  //   return pictureArray[Math.floor(Math.random() * pictureArray.length)];
  // }

  return (
    <>
      <h6 className="text-end me-3 mt-2">Welcome, {user['firstName']}!</h6>
      <h1 className="text-center mb-5">Current Reservations</h1>
      <Button>Add Reservation</Button>

      <Container>
        <Row md={3}>
          {reservations.map(reservation => (
            <Col>
              <Link to={`/singlereservation/${reservation['reservationId']}`} >
                <Card className="bg-dark text-dark text-center mb-5 d-flex align-items-center" style={{ width: '18rem' }} key={reservation['reservationId']}>
                  <Card.Img src={JumboImage} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title as="h1" style={{ fontSize: "4rem", backgroundColor: 'rgba(255, 255, 255, 0.65)' }}>{reservation['reservationTitle']}</Card.Title>
                  </Card.ImgOverlay>
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