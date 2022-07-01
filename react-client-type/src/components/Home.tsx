import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

import Jumbotron1 from '../images/jumbotron1.jpg';
import Jumbotron2 from '../images/jumbotron2.png';
import Jumbotron3 from '../images/jumbotron3.jpg';
import TravelVlog from '../images/travelers.jpg';

function Home() {
  return (
    <>
      
      <h1 className="text-center mt-5">Welcome to Destination Loading...</h1>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={Jumbotron1}
            alt="Beach alogn the water"
          />
          <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.35)'}}>
            <h3><img src="https://www.expedia.com/favicon.ico" style={{ width: '32px' }}/>&nbsp;Expedia</h3>
            <p>Check out our partner: Expedia Deal of the day can save you money.</p>
            <a href='https://www.expedia.com/deals' target='blank'><Button className="float-right">View Deals!</Button></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={Jumbotron2}
            alt="Man at an airport"
          />
          <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.35)'}}>
            <h3><img src="https://ssl.gstatic.com/travel-trips-fe/travel_logo_32.png" style={{ width: '32px' }}/>&nbsp;Google</h3>
            <p>They gave us money to sell your data!</p>
            <a href='https://www.google.com/travel/flights' target='blank'><Button className="float-right">View Deals!</Button></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={Jumbotron3}
            alt="Amtrak observation car"
          />
          <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.35)'}}>
            <h3><img src="https://www.amtrak.com/etc/designs/dotcom-assets/images/favicon.ico" style={{ width: '32px' }}/>&nbsp;Amtrak</h3>
            <p>Travel across the country and see the entire country an everything in between.</p>
            <a href='https://www.amtrak.com/promotions/deals.html' target='blank'><Button className="float-right">View Deals!</Button></a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="d-flex">
        <Row md={3} className="mx-auto mb-5">
          <Col>
            <Link style={{ textDecoration: 'none' }} to="/userreservationlist">
              <Card bg="primary" style={{ width: '18rem', height: '6rem' }} className="me-5">
                <Card.Body>
                  <Card.Title as="h2" className="text-white text-center my-2">User Login</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link style={{ textDecoration: 'none' }} to="/learnmore">
              <Card bg="secondary" style={{ width: '18rem', height: '6rem' }} className="me-5">
                <Card.Body>
                  <Card.Title as="h2" className="text-white text-center my-2">Learn More</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link style={{ textDecoration: 'none' }} to="/contact">
              <Card bg="warning" style={{ width: '18rem', height: '6rem' }} className="me-5">
                <Card.Body>
                  <Card.Title as="h2" className="text-white text-center my-2">Company Login</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container>
        <h3>Plan Your Trip</h3>
        <Row md={3} className="mx-auto">
          <Col>
            <Card style={{ width: '22rem' }} className="mx-2">
              <Card.Img variant="top" src={TravelVlog} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '22rem' }} className="mx-2">
              <Card.Img variant="top" src={TravelVlog} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '22rem' }} className="mx-2">
              <Card.Img variant="top" src={TravelVlog} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


    </>
  );
}

export default Home;