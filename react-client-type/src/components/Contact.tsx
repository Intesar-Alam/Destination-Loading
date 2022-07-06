import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function Contact() {
  return (
    <>
      <h1 className="text-center mt-5">Contact Us</h1>
      <h3 className="text-center mb-5">Give us a shout out or ask a question!</h3>
      <Container>
        <Card className="rounded-0 col-md-8 mx-auto">
          <Form className="form">
            <Form.Group as={Row} className="my-2 ms-3" controlId="formName">
              <Form.Label className="formLabel" column sm={2}>Name</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter Full Name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formEmail">
              <Form.Label className="formLabel" column sm={2}>Email</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formSubject">
              <Form.Label className="formLabel" column sm={2}>Subject</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter Subject" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formDetails">
              <Form.Label className="formLabel" column sm={2}>Details</Form.Label>
              <Col sm={9}>
                <Form.Control as="textarea" rows={5} placeholder="Let us know how we can help." />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ offset: 9 }}>
                <Link to="/contactsubmitconfirm" type="submit" className="pageButton btn mb-2">Send</Link>
              </Col>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default Contact;