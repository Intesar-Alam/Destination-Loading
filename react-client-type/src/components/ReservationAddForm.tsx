import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import AuthContext from '../AuthContext';
import Errors from './Errors';

// TODO add authorization for user to add reservations, pass along user id to set it for form from user reservation list

type RESERVATION_DEFAULT = {
  reservationId: string | undefined,
  appUserId: string | undefined,
  companyId: string,
  reservationDate: string,
  reservationCode: string,
  reservationTitle: string
};

function ReservationAddForm() {
  const [reservation, setReservation] = useState<RESERVATION_DEFAULT>({
    reservationId: "",
    appUserId: "",
    companyId: "",
    reservationDate: "",
    reservationCode: "",
    reservationTitle: "",
  });

  const [companies, setCompanies] = useState([]);

  const [errors, setErrors] = useState<string[]>([]);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const { id } = useParams();

  // useEffect(() => {
  //   if (id) {
  //     fetch(`http://localhost:8080/api/reservation/${id}`)
  //       .then(response => {
  //         if (response.status === 200) {
  //           return response.json();
  //         } else {
  //           return Promise.reject(`Unexpected status code: ${response.status}`);
  //         }
  //       })
  //       .then(data => setReservation(data))
  //   }
  // }, [id]);

  useEffect(() => {
      fetch(`http://localhost:8080/api/company/`)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .then(data => setCompanies(data))
  }, []);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {

    setReservation({ ...reservation, [event.target.name]: event.target.value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {

    setReservation({ ...reservation, [event.target.name]: event.target.value });
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addReservation();
  };

  const addReservation = () => {
    console.log(reservation);
    if (auth === undefined || auth.user === null){
      window.alert('You must be logged in to access this feature')
      navigate('/login');
      return;
    }
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.user.token}`
      },
      body: JSON.stringify(reservation)
    };

    fetch('http://localhost:8080/api/reservation', init)
      .then(response => {
        if (response.status === 201 || response.status === 400) {
          console.log(response);
          return response.json();
        } else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => {
        console.log(data)
        if (data['reservationId']) {
          // TODO add userID to path
          navigate(`/userreservationlist/${reservation['appUserId']}`);
        } else {
          console.log(data)
          setErrors(data);
        }
      })
      .catch(console.log);
  };

  return (
    <>
      <h1 className="text-center mb-5">Add Reservation</h1>
      <Container>
        <Errors errors={errors} />
        <Card className="rounded-0 col-md-8 mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formReservationTitle">
              <Form.Label column sm={2}>Trip Title</Form.Label>
              {/* max 40 characters */}
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter trip title or short description" name="reservationTitle" value={reservation['reservationTitle']} onChange={handleChange} />
                <Form.Text muted>
                  Maximum 40 characters.
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 ms-3" controlId="formReservationDate">
              <Form.Label column sm={2}>Trip Date</Form.Label>
              <Col sm={5}>
                <Form.Control type="date" name="reservationDate" value={reservation['reservationDate']} onChange={handleChange} />
                <Form.Text muted>
                  Select trip start date.
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formReservationCode">
              <Form.Label column sm={2}>Reservation Code</Form.Label>
              <Col sm={9}>
                  <Form.Control type="text" placeholder="Enter Reservation Code" name="reservationCode" value={reservation['reservationCode']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formCompanySelector">
              <Form.Label column sm={2}>Company</Form.Label>
              <Col sm={9}>
                <Form.Select aria-label="Select Company" name="companyId" value={reservation['companyId']} onChange={handleSelectChange}>
                  {companies.map(company => (
                    <option key={company['companyId']} value={company['companyId']}>{company['companyName']}</option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ offset: 8 }}>
                <Button type="submit">Create Reservation</Button>
              </Col>
            </Form.Group>
            {/* TODO add userId to reservationlist! */}
            <Form.Group as={Row}>
              <Col sm={{ offset: 8 }}>
              <Link className="btn btn-primary" to={`/userreservationlist/${reservation['appUserId']}`}>Cancel</Link>
              </Col>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default ReservationAddForm;