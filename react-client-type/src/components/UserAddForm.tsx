import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams, Link, Navigate } from 'react-router-dom';


import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import AuthContext from '../AuthContext';
import Errors from './Errors';

type USER_ACCOUNT_DEFAULT = {
  appUserId: any,
  email: string,
  firstName: string,
  lastName: string,
  address: string,
  phone: string,
  dob: any
}

function UserAddForm() {
  const [userAccount, setUserAccount] = useState<USER_ACCOUNT_DEFAULT>({
    appUserId: 0,
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    dob: ""
  })
  const [errors, setErrors] = useState([]);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const { id } = useParams();

  let account = false;
  //TODO fix authenticate bug

  useEffect(() => {
    console.log(`${auth}`);
    if(auth === undefined || auth.user === null){
      // navigate("/"); // 403 Error
      return;
    }
    
    const init = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${auth.user.token}`
      },
    };

    if (id) {
      fetch(`http://localhost:8080/api/useraccount/user`, init)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .then(data => {
          console.log(`${data['appUserId']}`);
          if (data['appUserId']) {
            account = true;
            setUserAccount(data);
          }else{

          }
        })
    }
  }, [id]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(auth === undefined || auth.user === null){
      // navigate("/"); // 403 Error
      return;
    }

    if(account){
      //PUT
      const init = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.user.token}`
        },
        body: JSON.stringify(userAccount)
      };

      fetch(`http://localhost:8080/api/useraccount/${auth.user.appUserId}`, init)
      .then(response => {
        if (response.status === 204 || response.status === 400) {
          console.log(response);
          return response.json();
        } else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => {
        console.log(data)
        if (data) {
          console.log(data);
          setErrors(data);
        } else {
          navigate('/');
        }
      })
      .catch(console.log);

    }else{
      //POST
      const init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.user.token}`
        },
        body: JSON.stringify(userAccount)
      };

      fetch('http://localhost:8080/api/useraccount', init)
      .then(response => {
        if (response.status === 204 || response.status === 400) {
          console.log(response);
          return response.json();
        } else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => {
        console.log(data)
        if (data) {
          console.log(data);
          setErrors(data);
        } else {
          navigate('/');
        }
      })
      .catch(console.log);
      
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserAccount({ ...userAccount, [event.target.name]: event.target.value });
  };


  return (
    <>
      {((userAccount['appUserId'] === 0) && (<h1 className="text-center mb-5">Sign Up!</h1>))}
      {((userAccount['appUserId'] > 0) && (<h1 className="text-center mb-5">Edit Info!</h1>))}
      <Container>
        <Errors errors={errors} />
        <Card className="rounded-0 col-md-8 mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formFirstName">
              <Form.Label column sm={2}>First Name</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter First Name" name="firstName" value={userAccount['firstName']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formLastName">
              <Form.Label column sm={2}>Last Name</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter Last Name" name="lastName" value={userAccount['lastName']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formEmail">
              <Form.Label column sm={2}>Email</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter Email" name="email" value={userAccount['email']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formAddress">
              <Form.Label column sm={2}>Address</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="1234 Main St., Any Town, MN 12345" name="address" value={userAccount['address']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formPhone">
              <Form.Label column sm={2}>Phone #</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="(555)555-5555" name="phone" value={userAccount['phone']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 ms-3" controlId="formDob">
              <Form.Label column sm={2}>Date of Birth</Form.Label>
              <Col sm={5}>
                <Form.Control type="date" name="dob" value={userAccount['dob']} onChange={handleChange} />
              </Col>
            </Form.Group>
            {/* TODO add conditional rendering for create/update user */}
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ offset: 9 }}>
                {((userAccount['appUserId'] === 0) && (<Button type="submit">Create User</Button>))}
                {((userAccount['appUserId'] > 0) && (<Button type="submit">Edit User</Button>))}
              </Col>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default UserAddForm;