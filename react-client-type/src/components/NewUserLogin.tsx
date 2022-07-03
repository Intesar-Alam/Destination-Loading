
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function NewUserLogin() {

  // TODO implement security/authController
  return (
    <>
      {/* Add conditional logic for existing vs new user - if new send to user form on submit */}
      <h1 className="text-center mb-3 mt-5">Welcome! We're Glad You're Here!</h1>
      <h2 className="text-center mb-5">Create a New Account!</h2>
      <Container>
        <Card className="rounded-0 col-md-8 mx-auto">
          <Form>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formUsername">
              <Form.Label column sm={2} htmlFor="username">Username</Form.Label>
              <Col sm={9}>
                <Form.Control id="username" type="text" placeholder="Username" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formPassword">
              <Form.Label column sm={2} htmlFor="password">Password</Form.Label>
              <Col sm={9}>
                <Form.Control id="password" type="text" placeholder="Password" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ offset: 8 }}>
                <Button type="submit">Create Account</Button>
              </Col>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default NewUserLogin;