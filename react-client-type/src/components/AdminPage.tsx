import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function AdminPage() {
  // TODO styling
  return (
    <>
      <Container>
        <h1 className="text-center my-5">Administrative Actions</h1>
        <Row md={12} className="mx-auto mb-5">
          <Col>
            <Link className="cardLink" to="/companylist">
              <Card className="primaryColor me-5">
                <Card.Body>
                  <Card.Title className="buttonTitle text-center my-2">View Companies</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link className="cardLink" to="/userlist">
              <Card  className="tertiaryColor me-5">
                <Card.Body>
                  <Card.Title className="buttonTitle text-center my-2">View Users</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link className="cardLink" to="/reservationlist">
              <Card className="secondaryColor me-5">
                <Card.Body>
                  <Card.Title className="buttonTitle text-center">View Reservations</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row md={3} className="mx-auto mb-5">
          <Col>
            <Link className="cardLink" to="/company">
              <Card className="primaryColor me-5">
                <Card.Body>
                  <Card.Title className="buttonTitle text-center my-2">Add Company</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link className="cardLink" to="/underconstruction">
              <Card className="tertiaryColor me-5">
                <Card.Body>
                  <Card.Title className="buttonTitle text-center my-2">Update User</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link className="cardLink" to="/underconstruction">
              <Card className="secondaryColor me-5">
                <Card.Body>
                  <Card.Title className="buttonTitle text-center my-2">Site Analytics</Card.Title>
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