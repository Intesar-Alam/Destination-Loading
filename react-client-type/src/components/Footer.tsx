

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <>
      <Navbar fixed="bottom">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="">About Us</Nav.Link>
            <Nav.Link href="">Contact</Nav.Link>
          </Nav>
          <Button>Help</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;