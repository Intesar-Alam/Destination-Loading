import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/container';

import JumboImage from '../images/travelers.jpg';
import AuthContext from '../AuthContext';


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

  const auth = useContext(AuthContext);

  const navigate = useNavigate();



  useEffect(() => {
    if (auth === undefined || auth.user === null) {
      navigate('/');
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
        } else {
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
        } else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => {
        console.log(data);
        setReservations(data)
      })
      .catch(console.log);
  }, [auth]);






  // TODO add picture array to randomize images for card backgrounds


  // const pictureArray = [image1, image2, image3, image4];

  // function randomPicture() {
  //   return pictureArray[Math.floor(Math.random() * pictureArray.length)];
  // }

  return (
    <>
      <h6 className="text-end me-3 mt-2">Welcome, {user['firstName']}!
        <Link className="btn btn-outline-secondary btn-sm ms-2" to={`/userupdateform/${user['appUserId']}`}>
          <i className="bi bi-pencil"></i>
        </Link>
      </h6>
      <h1 className="text-center mb-5">Current Reservations</h1>

      <Container>
        <Link to="/reservationaddform" className="btn btn-primary mb-3">Add Reservation</Link>
        <Row md={12}>
        {/* <Row md={4}> */}
        {/* {reservations.map(reservation => (
            <Col key={reservation['reservationId']}>
              <Link to={`/singleuserreservation/${reservation['reservationId']}`} >
                <Card className="bg-dark text-dark text-center mb-5 d-flex align-items-center" style={{ width: '18rem' }}>
                  <Card.Img src={JumboImage} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title style={{ fontSize: "3rem", backgroundColor: 'rgba(255, 255, 255, 0.65)' }}>{reservation['reservationTitle']}</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
          ))} */}
        {reservations.map(reservation => (
          <Link to={`/singleuserreservation/${reservation['reservationId']}`} >
            <Card className="mb-3">
              <Row>
                <Col className="col-md-4">
                  <Card.Img src={JumboImage} alt="Generic travel image" />
                </Col>
                <Col className="col-md-8">
                  <Card.Body>
                    <Card.Text>
                      {reservation['reservationDate']}
                    </Card.Text>
                    <Card.Title>{reservation['reservationTitle']}</Card.Title>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Link>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default UserReservationList;