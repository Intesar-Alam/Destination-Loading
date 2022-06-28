
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function UserForm() {
  return (
    <>
      {/* Conditional rendering edit, add (delete) */}
      <h1 className="text-center">Sign Up/Edit</h1>
      <Container>
        <Card className="rounded-0 col-md-8 mx-auto">
          <Form>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formFirstName">
              <Form.Label column sm={2} htmlFor="firstName">First Name</Form.Label>
              <Col sm={9}>
                <Form.Control id="firstName" type="text" placeholder="Enter First Name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formLastName">
              <Form.Label column sm={2} htmlFor="lastName">Last Name</Form.Label>
              <Col sm={9}>
                <Form.Control id="lastName" type="text" placeholder="Enter Last Name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formEmail">
              <Form.Label column sm={2} htmlFor="email">Email</Form.Label>
              <Col sm={9}>
                <Form.Control id="email" type="text" placeholder="Enter Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formAddress">
              <Form.Label column sm={2} htmlFor="address">Address</Form.Label>
              <Col sm={9}>
                <Form.Control id="address" type="text" placeholder="1234 Main St., Any Town, MN 12345" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formPhone">
              <Form.Label column sm={2} htmlFor="phone">Phone #</Form.Label>
              <Col sm={9}>
                <Form.Control id="phone" type="text" placeholder="(555)555-5555" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 ms-3" controlId="formDob">
              <Form.Label column sm={2} htmlFor="dob">Date of Birth</Form.Label>
              <Col sm={5}>
                <Form.Control id="dob" type="date" />
              </Col>
            </Form.Group>
            {/* TODO add conditional rendering for create/edit(update) user */}
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ offset: 9 }}>
                <Button type="submit">Create User</Button>
              </Col>
            </Form.Group>
            {/* //TODO add conditional rendering for this button Admin only */}
            <Form.Group as={Row}>
              <Col sm={{ offset: 9 }}>
                <Button type="submit" className="mb-2">Delete User</Button>
              </Col>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default UserForm;