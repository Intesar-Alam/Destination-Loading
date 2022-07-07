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
      <Navbar className="menuBar">
        <Container>
          <Navbar.Brand className="brand">DL...<i className="bi bi-compass"></i></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="me-auto">
            <NavDropdown className="menuTitle" title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/learnmore">Learn More</NavDropdown.Item>
              <NavDropdown.Item href="/userreservationlist">View Reservations</NavDropdown.Item>
              <NavDropdown.Item href="/learnmore">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {auth && auth.user && auth.user.hasRole('ROLE_ADMIN') && (
            <Button className="menuButton me-4" href="/adminpage">Admin</Button>
          )}
          {auth && auth.user && auth.user.hasRole('ROLE_REP') && (
            <Button className="menuButton me-4" href={`/companypage/${auth?.user?.companyId}`}>Company Page</Button>
          )}
          {(auth === undefined || auth.user === null) && (
            <>
              <Link className="signUpLink me-3" to="/newuserlogin">Sign-up</Link>
              <Button className="menuButton btn" href="/login">Login</Button>
            </>
          )}
          {auth && auth.user && (
            <Link className="menuButton btn" to="/" onClick={() => auth.logout()}>Logout</Link>
          )}

        </Container>
      </Navbar>
    </>
  );
}

export default MenuBar;