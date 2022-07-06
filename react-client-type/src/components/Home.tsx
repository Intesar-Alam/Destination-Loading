import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

import AuthContext from '../AuthContext';
import AdminMenuBar from './AdminMenuBar';

import Jumbotron1 from '../images/jumbotron1.jpg';
import Jumbotron2 from '../images/jumbotron2.png';
import Jumbotron3 from '../images/jumbotron3.jpg';
import Plan1 from '../images/plan1.jpg';
import Plan2 from '../images/plan2.jpg';
import Plan3 from '../images/plan3.jpg';
import TravelVlog from '../images/travelers.jpg';
// TODO styling
// TODO add pages to bottom cards
function Home() {
  const auth = useContext(AuthContext);
  return (
    <>

      {auth && auth.user && auth.user.hasRole('ROLE_ADMIN') && (
        <AdminMenuBar />
      )}



      <h1 className="text-center mt-5">Welcome to Destination Loading...</h1>
      <Container>
        <Carousel className="mb-5">
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={Jumbotron1} alt="Beach alogn the water" />
            <Carousel.Caption className="carouselCaption">
              <h3><img src="https://www.expedia.com/favicon.ico" className="iconImg" /> Expedia</h3>
              <p>Check out our partner: Expedia Deal of the Day can save you money.</p>
              <a href='https://www.expedia.com/deals' target='_blank'><Button className="pageButton float-right">View Deals!</Button></a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={Jumbotron2}
              alt="Man at an airport"
            />
            <Carousel.Caption className="carouselCaption">
              <h3><img src="https://ssl.gstatic.com/travel-trips-fe/travel_logo_32.png" className="iconImg" /> Google</h3>
              <p>They gave us money to sell your data!</p>
              <a href='https://www.google.com/travel/flights' target='_blank'><Button className="pageButton float-right">View Deals!</Button></a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={Jumbotron3}
              alt="Amtrak observation car"
            />
            <Carousel.Caption className="carouselCaption">
              <h3><img src="https://www.amtrak.com/etc/designs/dotcom-assets/images/favicon.ico" className="iconImg" /> Amtrak</h3>
              <p>Travel across the country and while seeing everything in between.</p>
              <a href='https://www.amtrak.com/promotions/deals.html' target='_blank'><Button className="pageButton float-right">View Deals!</Button></a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="d-flex">
        <Row md={3} className="mx-auto mb-5">
          <Col>
            <Link className="cardLink" to="/userreservationlist">
              <Card className="primaryColor me-5">
                <Card.Body>
                  <Card.Title className="buttonTitle text-center my-2">Reservations!</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link className="cardLink" to="/learnmore">
              <Card className="tertiaryColor me-5">
                <Card.Body>
                  <Card.Title className="buttonTitle text-center my-2">Learn More</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link className="cardLink" to={`/companypage/${auth?.user?.companyId}`}>
              <Card className="secondaryColor me-5">
                <Card.Body>
                  <Card.Title className="buttonTitle text-center my-2">Company Page</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          {((auth?.user?.hasRole("ROLE_REP")) && (
            <Col>
              <Link style={{ textDecoration: 'none' }} to={`/companypage/${auth?.user?.companyId}`}>
                <Card bg="warning" style={{ width: '18rem', height: '6rem' }} className="me-5">
                  <Card.Body>
                    <Card.Title as="h2" className="text-white text-center my-2">Company Page</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <h3>Plan Your Trip</h3>
        <Row md={3} className="mx-auto">
          <Col>
            <Card style={{ width: '22rem' }} className="mx-2">
              <Card.Img variant="top" src={Plan1} alt="NYC skyline" />
              <Card.Body>
                <Card.Title><img src="https://www.nycgo.com/favicon.ico?v=2" style={{ width: '18px' }} /> NYC Official Guide </Card.Title>
                <Card.Text>
                  This is the complete guide to all of NYC. Find the best hotels, resturants, experiences, discounts, and more here!
                </Card.Text>
                <Button variant="primary" href="https://www.nycgo.com/">Check out NYC</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '22rem' }} className="mx-2">
              <Card.Img variant="top" src={Plan2} alt="First class airplane seat" />
              <Card.Body>
                <Card.Title><img src="https://thepointsguy.com/wp-content/themes/tpg-2016/favicon-new.ico?v=3" style={{ width: '18px' }} /> The Points Guy </Card.Title>
                <Card.Text>
                  Learn more about the best way to rack up travel points as well as more tips and tricks to make your travel easier.
                </Card.Text>
                <Button variant="primary" href="https://thepointsguy.com/">Check out NYC</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '22rem' }} className="mx-2">
              <Card.Img variant="top" src={Plan3} alt="Satellite view from space" />
              <Card.Body>
                <Card.Title><img src="https://s.inspirockcdn.com/images/meta/favicon.ico" style={{ width: '18px' }} /> Visit The USA </Card.Title>
                <Card.Text>
                  Get customized itineries for any destination in the country, reduce the stress of figuring things out on your own
                </Card.Text>
                <Button variant="primary" href="https://trip-planner.visittheusa.com/">Check out NYC</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


    </>
  );
}

export default Home;