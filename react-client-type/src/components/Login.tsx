
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function Login() {
  return (
    <>
      <h1 className="text-center">Login</h1>
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
                <Button type="submit">Login</Button>
                <Form.Text className="ms-3">
                  <a href="/userform">Sign-up</a>
                </Form.Text>
              </Col>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default Login;