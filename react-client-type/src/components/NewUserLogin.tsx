import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

  const [errors, setErrors] = useState([]);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  // TODO implement security/authController
  // TODO create (POST) 
  // TODO onsubmit go to useraddform

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(appUser)
    };

    //needs to be tested with security
    fetch('http://localhost:8080/api/appuser', init)
    .then(response => {
      if(response.status === 201 || response.status == 400){
        return response.json();
      }else{
        return Promise.reject(`Unexpected status code: ${response.status}`);
      }
    })
    .then(data =>{
      if(data) {
        if(data['appUserId']){
          //TODO set auth context here
          navigate('/useraddform');
        }else{
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
      console.log("alls good");
      setErrors([]);
    }else{
      console.log("alls not good");
      //Flag for insttructors
      const msg: string [] = ["Passwords do not match"];
      setErrors(msg);
    }
  };
  

  // fetch('http://localhost:8080/api/authenticate', init)

  return (
    <>
      <h1 className="text-center mb-3 mt-5">Welcome! We're Glad You're Here!</h1>
      <h2 className="text-center mb-5">Create a New Account!</h2>
      <Container>
        <Errors errors={errors} />
        <Card className="rounded-0 col-md-8 mx-auto">
          <Form>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formUsername">
              <Form.Label column sm={2}>Username</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Username" name="username" value={appUser['username']} onChange={handleChange}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formPassword">
              <Form.Label column sm={2}>Password</Form.Label>
              <Col sm={9}>
                <Form.Control type="password" placeholder="Password" name="password" value={appUser['password']} onChange={handleChange}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formConfirmPassword">
              <Form.Label column sm={2}>Confirm Password</Form.Label>
              <Col sm={9}>
                <Form.Control type="password" placeholder="Password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmChange}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ offset: 8 }}>
                <Button type="submit">Create Account</Button>
              </Col>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default NewUserLogin;