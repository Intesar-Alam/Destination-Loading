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
type USER_DEFAULT = {
  appUserId: string | undefined,
  email: string,
  firstName: string,
  lastName: string,
  address: string,
  phone: string,
  dob: string,
};

function UserUpdateForm() {
  const [user, setUser] = useState<USER_DEFAULT>({
    appUserId: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    dob: "",
  });
  const [users, setUsers] = useState([]);

  const [errors, setErrors] = useState([]);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/api/useraccount/${id}`)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .then(data => setUser(data))
    }
  }, [id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {

    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateUser();
  };

  const updateUser = () => {
    user['appUserId'] = id;
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
      body: JSON.stringify(user)
    };

    fetch(`http://localhost:8080/api/useraccount/${id}`, init)
      .then(response => {
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
          navigate(`/userreservationlist/${user['appUserId']}`);
        } else {
          setErrors(data);
        }
      })
      .catch(console.log);
  };

  // TODO handleDelete for admin
  const handleDeleteUser = (appUserId: string | undefined) => {

    if (window.confirm(
      `    Deletion is permanent.
    Are you sure you want to proceded?
    Delete user named ${user['firstName']}${user['lastName']}?`)) {
      const init = {
        method: 'DELETE',
        // headers: {
        //   'Authorization': `Bearer ${auth.user.token}`
        // },
      };

      fetch(`http://localhost:8080/api/useraccount/${appUserId}`, init)
        .then(response => {
          if (response.status === 204) {
            const newUser = users.filter(user => user['appUserId'] !== appUserId);
            setUsers(newUser);
            navigate('/userlist');
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .catch(console.log);
    }
  };

  return (
    <>
      <h1 className="text-center">Update Your Information</h1>
      <Container>
        <Errors errors={errors} />
        <Card className="rounded-0 col-md-8 mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formFirstName">
              <Form.Label column sm={2}>First Name</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter First Name" name="firstName" value={user['firstName']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formLastName">
              <Form.Label column sm={2}>Last Name</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter Last Name" name="lastName" value={user['lastName']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formEmail">
              <Form.Label column sm={2}>Email</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter Email" name="email" value={user['email']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formAddress">
              <Form.Label column sm={2}>Address</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="1234 Main St., Any Town, MN 12345" name="address" value={user['address']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formPhone">
              <Form.Label column sm={2}>Phone #</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="(555)555-5555" name="phone" value={user['phone']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 ms-3" controlId="formDob">
              <Form.Label column sm={2}>Date of Birth</Form.Label>
              <Col sm={5}>
                <Form.Control type="date" name="dob" value={user['dob']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ offset: 8 }}>
                <Button type="submit" className="me-3">Update User</Button>
                <Link className="btn btn-primary" to={`/userreservationlist/${user['appUserId']}`}>Cancel</Link>
              </Col>
            </Form.Group>
            {auth && auth.user && auth.user.hasRole('ROLE_ADMIN') && (
              <Form.Group as={Row}>
                <Col sm={{ offset: 9 }}>
                  <Button type="submit" className="mb-2" onClick={() => handleDeleteUser(user['appUserId'])}>Delete User</Button>
                </Col>
              </Form.Group>
            )}
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default UserUpdateForm;