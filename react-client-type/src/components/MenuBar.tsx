import { useContext } from 'react';
import { Link } from 'react-router-dom';
 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import AuthContext from '../AuthContext';

// TODO auth stuff
// TODO styling
function MenuBar() {
  const auth = useContext(AuthContext);

  return (
    <>
      <Navbar bg="success">
        <Container>
          <Navbar.Brand>DL...<i className="bi bi-compass"></i></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="me-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/learnmore">Learn More</NavDropdown.Item>
              <NavDropdown.Item href="/userreservationlist">View Reservations</NavDropdown.Item>
              <NavDropdown.Item href="/learnmore">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          {(auth === undefined || auth.user === null) && (
            <>
              <Navbar.Text className="me-2"><a href="/newuserlogin">Sign-up</a></Navbar.Text>
              <Button href="/login">Login</Button>
            </>
          )}
          {auth && auth.user && (
            // <Button onClick={() => auth.logout()}>Logout</Button>
            <Link className="btn btn-primary" to="/" onClick={() => auth.logout()}>Logout</Link>
          )}
          {auth && auth.user && auth.user.hasRole('ADMIN') &&(
            <Button>Admin</Button>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default MenuBar;