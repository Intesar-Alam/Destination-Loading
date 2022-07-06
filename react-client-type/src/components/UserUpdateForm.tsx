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


// TODO add authorization, must be user or admin to update
type USER_ACCOUNT_DEFAULT = {
  appUserId: string | undefined,
  email: string,
  firstName: string,
  lastName: string,
  address: string,
  phone: string,
  dob: string,
};

function UserUpdateForm() {
  const [userAccount, setUserAccount] = useState<USER_ACCOUNT_DEFAULT>({
    appUserId: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    dob: "",
  });
  const [users, setUsers] = useState([]);

  const [errors, setErrors] = useState<string[]>([]);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    console.log(`${auth}`);
    if (auth === undefined || auth.user === null) {
      window.alert('You must be logged in to access this feature');
      navigate('/');
      return;
    }

    const init = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${auth.user.token}`
      },
    };

    fetch(`http://localhost:8080/api/useraccount/user`, init)
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          return response.json();
        } else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => {
        console.log(`${data['appUserId']}`);
        if (data['appUserId']) {
          setUserAccount(data);
        } else {
          console.log("error");
        }
      })

  }, [auth]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {

    setUserAccount({ ...userAccount, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateUser();
  };

  const updateUser = () => {
    userAccount['appUserId'] = id;
    if (auth === undefined || auth.user === null) {
      window.alert('You must be logged in to access this feature');
      navigate('/login');
      return;
    }
    const init = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.user.token}`
      },
      body: JSON.stringify(userAccount)
    };

    fetch(`http://localhost:8080/api/useraccount/${id}`, init)
      .then(response => {
        console.log(response);
        if (response.status === 204) {
          return null;
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
      <h1 className="text-center my-5">Update Your Information</h1>
      <Container>
        <Errors errors={errors} />
        <Card className="rounded-0 col-md-8 mx-auto">
          <Form className="form" onSubmit={handleSubmit}>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formFirstName">
              <Form.Label className="formLabel" column sm={2}>First Name</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter First Name" name="firstName" value={userAccount['firstName']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formLastName">
              <Form.Label className="formLabel" column sm={2}>Last Name</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter Last Name" name="lastName" value={userAccount['lastName']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formEmail">
              <Form.Label className="formLabel" column sm={2}>Email</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter Email" name="email" value={userAccount['email']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formAddress">
              <Form.Label className="formLabel" column sm={2}>Address</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="1234 Main St., Any Town, MN 12345" name="address" value={userAccount['address']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formPhone">
              <Form.Label className="formLabel" column sm={2}>Phone #</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="(555)555-5555" name="phone" value={userAccount['phone']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 ms-3" controlId="formDob">
              <Form.Label className="formLabel" column sm={2}>Date of Birth</Form.Label>
              <Col sm={5}>
                <Form.Control type="date" name="dob" value={userAccount['dob']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ offset: 7 }}>
                <Button type="submit" className="pageButton me-3">Update User</Button>
                <Link className="cancelButton btn" to={`/userreservationlist`}>Cancel</Link>
              </Col>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default UserUpdateForm;