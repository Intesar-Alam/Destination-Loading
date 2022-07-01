import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';

function ReservationUpdateForm() {
  return (
    <>
      {/* Conditional rendering edit, add (delete) */}
      <h1 className="text-center">Add/Edit Reservations</h1>
      <Container>
        <Card className="rounded-0 col-md-8 mx-auto">
          <Form>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formReservationTitle">
              <Form.Label column sm={2}>Trip Title</Form.Label>
              {/* max 40 characters */}
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter trip title or short description" />
                <Form.Text muted>
                  Maximum 40 characters.
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 ms-3" controlId="formReservationDate">
              <Form.Label column sm={2}>Trip Date</Form.Label>
              <Col sm={5}>
                <Form.Control type="date" />
                <Form.Text muted>
                  Select trip start date.
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formReservationCode">
              <Form.Label column sm={2}>Reservation Code</Form.Label>
              <Col sm={9}>
                <InputGroup>
                <Form.Control type="text" placeholder="Enter Reservation Code" />
                <Button variant="outline-secondary">Copy</Button>
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formCompanySelector">
              <Form.Label column sm={2}>Company</Form.Label>
              <Col sm={9}>
                <Form.Select aria-label="Select Company">
                  <option>Select One</option>
                  {/* Map over company data to populate dropdown list */}
                  <option>CompanyNamesHere</option>
                </Form.Select>
              </Col>
            </Form.Group>
            {/* TODO add conditional rendering for create/edit(update) user */}
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ offset: 8 }}>
                <Button type="submit">Create Reservation</Button>
              </Col>
            </Form.Group>
            {/* //TODO add conditional rendering for this button edit screen only */}
            <Form.Group as={Row}>
              <Col sm={{ offset: 8 }}>
                <Button type="submit" className="mb-2">Delete Reservation</Button>
              </Col>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default ReservationUpdateForm;