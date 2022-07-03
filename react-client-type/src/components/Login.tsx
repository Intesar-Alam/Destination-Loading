import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import AuthContext from '../AuthContext';
import Errors from './Errors';

type USERNAME_DEFAULT = {
  username: string
};

type PASSWORD_DEFAULT = {
  password: string
};

function Login() {
  const [username, setUsername] = useState<USERNAME_DEFAULT>({
    username: "",
  });
  const [password, setPassword] = useState<PASSWORD_DEFAULT>({
    password: "",
  });
  const [errors, setErrors] = useState([]);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const authAttempt = {
      username,
      password
    };

    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(authAttempt)
    };

    fetch('http://localhost:8080/api/authenticate', init)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 403) {
          return null;
        } else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => {
        if (data) {

          auth.login(data.jwt_token);
          // TODO add if statements based on user to navigate to correct page on login!
          navigate('/');
        } else {
          setErrors(data);
        }
      })
      .catch(console.log);
  };

  const handleUsernameChange = ((event: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value);
  })

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    setPassword(event.target.value);
  }

  // TODO implement security/authController
  return (
    <>
      {/* Add conditional logic for existing vs new user - if new send to user form on submit */}
      <h1 className="text-center">Login</h1>
      <Container>
        <Errors errors={errors} />
        <Card className="rounded-0 col-md-8 mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formUsername">
              <Form.Label column sm={2} htmlFor="username">Username</Form.Label>
              <Col sm={9}>
                <Form.Control id="username" type="text" placeholder="Username" name="username" value={username['username']} onChange={handleUsernameChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formPassword">
              <Form.Label column sm={2} htmlFor="password">Password</Form.Label>
              <Col sm={9}>
                <Form.Control id="password" type="text" placeholder="Password" name="passowrd" value={password['password']} onChange={handlePasswordChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ offset: 8 }}>
                <Button type="submit">Login</Button>
                <Form.Text className="ms-3">
                  <a href="/newuserlogin">Sign-up</a>
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