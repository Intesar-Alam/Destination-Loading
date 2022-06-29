import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import JumboImage from '../images/travelers.jpg';

function AdminPage() {
  return (
    <>
      <h6 className="text-end me-3 mt-2">Welcome, Joe!</h6>
      <h1 className="text-center my-5">Administrative Actions</h1>
      <Container>
        <Row md={3} className="mx-auto mb-5">
          <Col>
            <Link style={{ textDecoration: 'none' }} to="/companylist">
              <Card bg="primary" style={{ width: '18rem', height: '6rem' }} className="me-5">
                <Card.Body>
                  <Card.Title as="h2" className="text-white text-center my-2">View Companies</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link style={{ textDecoration: 'none' }} to="/userlist">
              <Card bg="warning" style={{ width: '18rem', height: '6rem' }} className="me-5">
                <Card.Body>
                  <Card.Title as="h2" className="text-white text-center my-2">View Users</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link style={{ textDecoration: 'none' }} to="/reservationlist">
              <Card bg="secondary" style={{ width: '18rem', height: '6rem' }} className="me-5">
                <Card.Body>
                  <Card.Title as="h2" className="text-white text-center">View Reservations</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
        </Container>
        <Container>
        <Row md={3} className="mx-auto mb-5">
          <Col>
            <Link style={{ textDecoration: 'none' }} to="/companyform">
              <Card bg="primary" style={{ width: '18rem', height: '6rem' }} className="me-5">
                <Card.Body>
                  <Card.Title as="h2" className="text-white text-center my-2">Add Company</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link style={{ textDecoration: 'none' }} to="/userform">
              <Card bg="warning" style={{ width: '18rem', height: '6rem' }} className="me-5">
                <Card.Body>
                  <Card.Title as="h2" className="text-white text-center my-2">Update User</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link style={{ textDecoration: 'none' }} to="/">
              <Card bg="secondary" style={{ width: '18rem', height: '6rem' }} className="me-5">
                <Card.Body>
                  <Card.Title as="h2" className="text-white text-center my-2">Site Analytics</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>


    </>
  );
}

export default AdminPage;