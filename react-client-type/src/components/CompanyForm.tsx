
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function CompanyForm() {
  return (
    <>
      {/* Conditional rendering edit, add (delete) */}
      <h1 className="text-center">Sign Up/Edit</h1>

      <Container>
        <Card className="rounded-0 col-md-8 mx-auto">
          <Form>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formCompanyName">
              <Form.Label column sm={2} htmlFor="companyName">Company Name</Form.Label>
              <Col sm={9}>
                <Form.Control id="companyName" type="text" placeholder="Enter Company Name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formCompanyUrl">
              <Form.Label column sm={2} htmlFor="companyUrl">Company URL/Website</Form.Label>
              <Col sm={9}>
                <Form.Control id="companyUrl" type="text" placeholder="Enter Company URL" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formIcon">
              <Form.Label column sm={2} htmlFor="icon">Company Icon</Form.Label>
              <Col sm={9}>
                <Form.Control id="icon" type="text" placeholder="icon" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formTransportationMode">
              <Form.Label column sm={2} htmlFor="transportationMode">Transport Mode</Form.Label>
              <Col sm={9}>
                <Form.Select id="transportationMode" aria-label="Select Transportation Mode">
                  <option>Select One</option>
                  <option value="1">AIR</option>
                  <option value="2">RAIL</option>
                  <option value="3">GROUND</option>
                  <option value="4">WATER</option>
                </Form.Select>
              </Col>
            </Form.Group>
            {/* TODO add conditional rendering for create/edit(update) user */}
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ offset: 9 }}>
                <Button type="submit">Create Company</Button>
              </Col>
            </Form.Group>
            {/* //TODO add conditional rendering for this button Admin only */}
            <Form.Group as={Row}>
              <Col sm={{ offset: 9 }}>
                <Button type="submit" className="mb-2">Delete Company</Button>
              </Col>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default CompanyForm;