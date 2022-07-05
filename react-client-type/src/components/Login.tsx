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


// TODO fix navigation paths for users
function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

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
        console.log(response);
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 403) {
          return null;
        } else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => {
        console.log(data);
        if (data) {

          if (auth === undefined) {
            navigate('/');
            return;
          }
          auth.login(data.jwt_token);
          if(auth.user === null){
            console.log("user is null");
          }
          console.log(auth.user);
          // TODO add if statements based on user to navigate to correct page on login, add if statement if not a user to send to new user login/register page'git
          navigate('/');
        } else {
          setErrors(data);
        }
      })
      .catch(console.log);
  };

  const handleRedirect = () => {
    if (auth === undefined || auth.user === null) {
      navigate('/');
      return;
    }
    if (auth.user.hasRole('USER')) {
      navigate(`/userreservationlist/user`)
    } else if (auth.user.hasRole('ADMIN')) {
      navigate("/adminpage");
    } else if (auth.user.hasRole('REP')) {
      // navigate(`/companypage/${auth.user.}`);
    } else {
      navigate("/newuserlogin")
    }
  }

  const handleUsernameChange = ((event: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value);
  })

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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
              <Form.Label column sm={2}>Username</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Username" name="username" value={username} onChange={handleUsernameChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formPassword">
              <Form.Label column sm={2}>Password</Form.Label>
              <Col sm={9}>
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handlePasswordChange} />
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