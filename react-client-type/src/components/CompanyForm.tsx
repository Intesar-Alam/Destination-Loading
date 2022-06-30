import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';


import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Errors from './Errors';

type COMPANY_DEFAULT = {
  companyName: string,
  url: string,
  icon: string,
  transportationMode: string
};

function CompanyForm() {
  const [company, setCompany] = useState<COMPANY_DEFAULT>({
    companyName: "",
    url: "",
    icon: "",
    transportationMode: "",
  });
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const { companyId } = useParams();

  useEffect(() => {
    if (companyId) {
      fetch(`http://localhost:8080/api/company/${companyId}`)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .then(data => setCompany(data))
    }
  }, [companyId]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {

    setCompany({...company,[event.target.name] : event.target.value});
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {

    setCompany({...company,[event.target.name] : event.target.value});
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if (companyId) {
    //   // updateCompany();
    // } else {
      addCompany();
    // }
  };

  const addCompany = () => {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${auth.user.token}`
      },
      body: JSON.stringify(company)
    };

    fetch('http://localhost:8080/api/company', init)
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
      if (data['companyId']) {
        navigate('/companylist');
      } else {
        console.log(data)
        setErrors(data);
      }
    })
    .catch(console.log);
};
  

  return (
    <>
      {/* Conditional rendering edit, add (delete) */}
      <h1 className="text-center">Add/Edit Company</h1>

      {/* <Errors /> */}

      <Container>
        <Card className="rounded-0 col-md-8 mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formCompanyName">
              <Form.Label column sm={2}>Company Name</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter Company Name" name="companyName" value={company['companyName']} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formCompanyUrl">
              <Form.Label column sm={2}>Company URL/Website</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter Company URL" name="url" value={company.url} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formIcon">
              <Form.Label column sm={2}>Company Icon</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="icon" name="icon" value={company.icon} onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formTransportationMode">
              <Form.Label column sm={2}>Transport Mode</Form.Label>
              <Col sm={9}>
                <Form.Select aria-label="Select Transportation Mode" name="transportationMode" value={company.transportationMode} onChange={handleSelectChange}>
                  <option value="1">AIR</option>
                  <option value="2">RAIL</option>
                  <option value="3">GROUND</option>
                  <option value="4">WATER</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <hr style={{ color: 'gray', height: '1px' }} />
            {/* <Form.Group as={Row} className="mb-2 ms-3" controlId="formRepIdSelect">
              <Form.Label column sm={2}>Company Rep</Form.Label>
              <Col sm={9}>
                <Form.Select aria-label="Select Company Representative" value={company['repId']} onChange={handleChange}>
                  <option>Select One</option>
                  // TODO add map/fetch for rep users 
                  <option>AIR</option>
                </Form.Select>
              </Col> */}
            {/* </Form.Group> */}
            {/* TODO add conditional rendering for create/edit(update) user */}
            <Form.Group className="mb-3">
              <Row>
                <Col md={{ span: 5, offset: 7 }}>
                  <Button type="submit" className="me-2">Create Company</Button>
                  <Link className="btn btn-primary" to="/companylist">Cancel</Link>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default CompanyForm;