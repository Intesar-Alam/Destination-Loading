
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function MenuBar() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>DL...<i className="bi bi-compass"></i></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="me-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/learnmore">Learn More</NavDropdown.Item>
              <NavDropdown.Item href="/userreservationlist">View Reservations</NavDropdown.Item>
              <NavDropdown.Item href="/aboutus">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Text className="me-2"><a href="/">Sing-up</a></Navbar.Text>
          <Button>Login</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default MenuBar;