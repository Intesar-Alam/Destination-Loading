import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/container';

function UserReservationList() {
  const [reservations, setReservations] = useState([]);

  const navigate = useNavigate();

  // const pictureArray = [image1, image2, image3, image4];

  // function randomPicture() {
  //   return pictureArray[Math.floor(Math.random() * pictureArray.length)];
  // }

  return (
    <>
      <h2 className="mb-2">Current Reservations</h2>
      <button>Add Reservation</button>

      {/* <Container>
        <Row md={3}>
          {solarPanels.map(solarPanel => (
            <Col>
              <Link to={`/solarpanels/edit/${solarPanel.id}`} >
                <Card className="bg-dark text-dark text-center mb-5 d-flex align-items-center" style={{ width: '18rem' }} key={solarPanel.id}>
                  <Card.Img src={randomPicture()} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title as="h1" style={{ fontSize: "4rem", backgroundColor: 'rgba(255, 255, 255, 0.65)' }}>{solarPanel.section}</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container> */}
    </>
  );
}

export default UserReservationList;