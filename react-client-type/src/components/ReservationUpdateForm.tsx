import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';

import AuthContext from '../AuthContext';
import Errors from './Errors';


// TODO add user authorization, need to be logged in to update a reservation
type Reservation = {
  reservationId: string | undefined,
  appUserId: string,
  companyId: string,
  reservationDate: string,
  reservationCode: string,
  reservationTitle: string,
  companyName?: string,
  url?: string
};

function ReservationUpdateForm() {
  const [reservation, setReservation] = useState<Reservation>({
    reservationId: "",
    appUserId: "",
    companyId: "",
    reservationDate: "",
    reservationCode: "",
    reservationTitle: "",
    companyName: "",
    url: "",
  });

  const [companies, setCompanies] = useState([]);

  const [errors, setErrors] = useState<string[]>([]);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (auth === undefined || auth.user === null) {
        navigate('/login');
        window.alert('You must be logged in to access this page')
        return;
    }
    const init = {
      headers: {
        'Authorization': `Bearer ${auth.user.token}`
      },
    };
    if (id) {
      fetch(`http://localhost:8080/api/reservation/${id}`, init)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else if (response.status === 403) {
            navigate('/forbidden');
            return;
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .then(data => setReservation(data))
    }
  }, [id]);

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

    updateReservation();
  };

const updateReservation = () => {
  reservation['reservationId'] = id;
  if (auth === undefined || auth.user === null) {
    navigate('/login');
    return ;
  }
  const init = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.user.token}`
    },
    body: JSON.stringify(reservation)
  };

  fetch(`http://localhost:8080/api/reservation/${id}`, init)
  .then(response => {
    if (response.status === 204) {
      return null;
    } else if (response.status === 403) {
      navigate('/forbidden');
      return; 
    } else if (response.status === 400) {
      return response.json();
    } else {
      return Promise.reject(`Unexpected status code: ${response.status}`);
    }
  })
  .then(data => {
    console.log(data);
    if (!data) {
      navigate(`/userreservationlist`);
    } else {
      setErrors(data);
    }
  })
  .catch(console.log);
};

  return (
    <>
      <h1 className="text-center my-5">Update Reservation</h1>
      <Container>
        <Errors errors={errors} />
        <Card className="rounded-0 col-md-8 mx-auto">
          <Form className="form" onSubmit={handleSubmit}>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formReservationTitle">
              <Form.Label  className="formLabel" column sm={2}>Trip Title</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter trip title or short description" name="reservationTitle" value={reservation['reservationTitle']} onChange={handleChange} />
                <Form.Text  className="formLabel" muted>
                  Maximum 40 characters.
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 ms-3" controlId="formReservationDate">
              <Form.Label  className="formLabel" column sm={2}>Trip Date</Form.Label>
              <Col sm={5}>
                <Form.Control type="date" name="reservationDate" value={reservation['reservationDate']} onChange={handleChange} />
                <Form.Text className="formLabel" muted>
                  Select trip start date.
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formReservationCode">
              <Form.Label className="formLabel" column sm={2}>Reservation Code</Form.Label>
              <Col sm={9}>
                  <Form.Control type="text" placeholder="Enter Reservation Code" name="reservationCode" value={reservation['reservationCode']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formCompanySelector">
              <Form.Label className="formLabel" column sm={2}>Company</Form.Label>
              <Col sm={9}>
                <Form.Select aria-label="Select Company" name="companyId" value={reservation['companyId']} onChange={handleSelectChange}>
                  {companies.map(company => (
                    <option key={company['comanyId']} value={company['companyId']}>{company['companyName']}</option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ offset: 7 }}>
                <Button type="submit" className="pageButton me-3">Update Reservation</Button>
                <Link className="cancelButton btn" to={`/userreservationlist`}>Cancel</Link>
              </Col>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default ReservationUpdateForm;