import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import AuthContext from '../AuthContext';
import Errors from './Errors';

type APPUSER_DEFAULT = {
  username: string,
  password: string,
  companyId: 1
};

function NewUserLogin() {

  const [appUser, setAppUser] = useState<APPUSER_DEFAULT>({
    username: "",
    password: "",
    companyId: 1
  })

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [errors, setErrors] = useState<string[]>([]);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if(confirmPassword !== appUser['password']){
      setErrors(["Passwords do not match"]);
      return;
    }

    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(appUser)
    };

    fetch('http://localhost:8080/api/appuser', init)
    .then(response => {
      if(response.status === 201 || response.status == 400){
        console.log("Valid Response");
        return response.json();
      }else{
        return Promise.reject(`Unexpected status code: ${response.status}`);
      }
    })
      .then(data => {
        if (data) {
          if (data['appUserId']) {
            const authAttempt = {
              username: appUser['username'],
              password: appUser['password']
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
                    console.log("Something went wrong");
                    navigate('/login');
                    return;
                  }
                  auth.login(data.jwt_token);
                  navigate(`/useraddform`);
                } else {
                  setErrors(data);
                }
              })
          } else {
            setErrors(data);
          }
        }
      })
      .catch(console.log);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAppUser({ ...appUser, [event.target.name]: event.target.value });
  };

  const handleConfirmChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setConfirmPassword(event.target.value);
    if(event.target.value === appUser['password']){
      setErrors([]);
    }else{
      setErrors(["Passwords do not match"]);
    }
  };
  

  return (
    <>
      <h1 className="text-center mb-3 mt-5">Welcome! We're Glad You're Here!</h1>
      <h2 className="text-center mb-5">Create a New Account!</h2>
      <Container>
        <Errors errors={errors} />
        <Card className="rounded-0 col-md-8 mx-auto">
          <Form className="form" onSubmit={handleSubmit}>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formUsername">
              <Form.Label className="formLabel" column sm={2}>Username</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="example@gmail.com" name="username" value={appUser['username']} onChange={handleChange}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formPassword">
              <Form.Label className="formLabel" column sm={2}>Password</Form.Label>
              <Col sm={9}>
                <Form.Control type="password" placeholder="Password" name="password" value={appUser['password']} onChange={handleChange}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formConfirmPassword">
              <Form.Label className="formLabel" column sm={2}>Confirm Password</Form.Label>
              <Col sm={9}>
                <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmChange}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ offset: 8 }}>
                <Button className="pageButton" type="submit">Create Account</Button>
              </Col>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default NewUserLogin;