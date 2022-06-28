import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import JumboImage from '../images/travelers.jpg';

function Home() {
  return (
    <>
      <h6 className="text-end me-3 mt-2">Welcome, Joe!</h6>
      <h1 className="text-center mt-5">Welcome to Destination Loading...</h1>
      <Card className="text-white rounded-0 col-md-10 mx-auto my-5">
        <Card.Img src={JumboImage} alt="Card image" className="rounded-0" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Button className="float-right">Click Here!</Button>
        </Card.ImgOverlay>
      </Card>

      <Container className="d-flex">
        <Row md={3} className="mx-auto mb-5">
          <Link style={{ textDecoration: 'none' }} to="/userreservationlist">
            <Card bg="primary" style={{ width: '18rem', height: '6rem' }} className="me-5">
              <Card.Body>
                <Card.Title as="h2" className="text-white text-center my-2">User Login</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/learnmore">
            <Card bg="secondary" style={{ width: '18rem', height: '6rem' }} className="me-5">
              <Card.Body>
                <Card.Title as="h2" className="text-white text-center my-2">Learn More</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/contact">
            <Card bg="warning" style={{ width: '18rem', height: '6rem' }}>
              <Card.Body>
                <Card.Title as="h2" className="text-white text-center my-2">Company Login</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Row>
      </Container>

      <Container>
        <h3>Plan Your Trip</h3>
        <Row md={3} className="mx-auto">
          <Col>
            <Card style={{ width: '23rem' }} className="mx-2">
              <Card.Img variant="top" src={JumboImage} />
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
            <Card style={{ width: '23rem' }} className="mx-2">
              <Card.Img variant="top" src={JumboImage} />
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
            <Card style={{ width: '23rem' }} className="mx-2">
              <Card.Img variant="top" src={JumboImage} />
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