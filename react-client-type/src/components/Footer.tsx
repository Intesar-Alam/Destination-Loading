import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <>
    <div>
      <Navbar>
        <Container style={{ minHeight: '10rem' }}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link className="footer" href="/learnmore">About Us</Nav.Link>
            <Nav.Link className="footer" href="/contact">Contact</Nav.Link>
          </Nav>
            <Navbar.Text className="footer me-2"><i className="bi bi-twitter"></i> <i className="bi bi-facebook"> <i className="bi bi-instagram"></i></i></Navbar.Text>
            <Link to="/contact" className="pageButton">Help</Link>
        </Container>
      </Navbar>
    </div>
    </>
  );
}

export default Footer;