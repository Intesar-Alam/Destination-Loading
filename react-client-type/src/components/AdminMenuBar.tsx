
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

// TODO styling
function AdminMenuBar() {
  return (
    <>
      <Navbar bg="warning">
        <Container>
          <Nav className="me-auto">
            <NavDropdown title="AdminMenu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/adminpage">Admin Home</NavDropdown.Item>
              <NavDropdown.Item href="/siteanalytics">Site Analytics</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminMenuBar;