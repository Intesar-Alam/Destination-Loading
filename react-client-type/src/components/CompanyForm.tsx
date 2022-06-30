import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const COMPANY_DEFAULT = {
  companyName: '',
  url: '',
  icon: '',
  transportationMode: ''
};

function CompanyForm() {
  const [company, setCompany] = useState(COMPANY_DEFAULT);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const { companyId } = useParams();

  useEffect(() => {
    if (companyId) {
      fetch(`http://localhost:8080/test/company/${companyId}`)
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

    setCompany('');
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

    fetch('http://localhost:8080/test/company', init)
    .then(response => {
      if (response.status === 201 || response.status === 400) {
        return response.json();
      } else {
        return Promise.reject(`Unexpected status code: ${response.status}`);
      }
    })
    .then(data => {
      if (data.companyId) {
        navigate('/companylist');
      } else {
        setErrors(data);
      }
    })
    .catch(console.log);
};
  

  return (
    <>
      {/* Conditional rendering edit, add (delete) */}
      <h1 className="text-center">Add/Edit Company</h1>

      <Container>
        <Card className="rounded-0 col-md-8 mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="my-2 ms-3" controlId="formCompanyName">
              <Form.Label column sm={2} htmlFor="companyName">Company Name</Form.Label>
              <Col sm={9}>
                <Form.Control id="companyName" type="text" placeholder="Enter Company Name" onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formCompanyUrl">
              <Form.Label column sm={2} htmlFor="url">Company URL/Website</Form.Label>
              <Col sm={9}>
                <Form.Control id="url" type="text" placeholder="Enter Company URL" onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formIcon">
              <Form.Label column sm={2} htmlFor="icon">Company Icon</Form.Label>
              <Col sm={9}>
                <Form.Control id="icon" type="text" placeholder="icon" onChange={handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formTransportationMode">
              <Form.Label column sm={2} htmlFor="transportationMode">Transport Mode</Form.Label>
              <Col sm={9}>
                <Form.Select id="transportationMode" aria-label="Select Transportation Mode" onChange={handleChange}>
                  <option>Select One</option>
                  <option value="1">AIR</option>
                  <option value="2">RAIL</option>
                  <option value="3">GROUND</option>
                  <option value="4">WATER</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <hr style={{ color: 'gray', height: '1px' }} />
            <Form.Group as={Row} className="mb-2 ms-3" controlId="formRepIdSelect">
              <Form.Label column sm={2} htmlFor="repIdSelect">Company Rep</Form.Label>
              <Col sm={9}>
                <Form.Select id="repIdSelect" aria-label="Select Company Representative" onChange={handleChange}>
                  <option>Select One</option>
                  {/* TODO add map/fetch for rep users */}
                  <option>AIR</option>
                </Form.Select>
              </Col>
            </Form.Group>
            {/* TODO add conditional rendering for create/edit(update) user */}
            <Form.Group className="mb-3">
              <Row>
                <Col md={{ span: 5, offset: 7 }}>
                  <Button type="submit" className="me-2">Create Company</Button>
                  <Button type="submit">Cancel</Button>
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