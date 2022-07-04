import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AdminMenuBar from './AdminMenuBar';
// TODO add authorization for admin only, must be logged in to view page
function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/company')
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => setCompanies(data))
      .catch(console.log);
  }, []);

  const handleDeleteCompany = (companyId: number) => {
    const company: any = companies.find(company => company['companyId'] === companyId);

    if(window.confirm(
    `    Deletion is permanent.
    Are you sure you want to proceded?
    Delete company ${company['companyName']}?`)) {
      const init = {
        method: 'DELETE',
        // headers: {
        //   'Authorization': `Bearer ${auth.user.token}`
        // },
      };

      fetch(`http://localhost:8080/api/company/${companyId}`, init)
      .then(response => {
        if (response.status === 204) {
          const newCompanies = companies.filter(company => company['companyId'] !== companyId);
          setCompanies(newCompanies);
        } else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .catch(console.log);
    }
  };

  return (
    <>
    <AdminMenuBar />
      <h1 className="text-center mb-5">All Companies We Work With</h1>
      <Container>
        <Table>
          <thead className="thead-dark">
            <tr>
              <th>Company Id</th>
              <th>Company Name</th>
              <th>Company Website</th>
              <th>Transportation Mode</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(company => (
              <tr key={company['companyId']}>
                <td>{company['companyId']}</td>
                <td>{company['companyName']}</td>
                <td><img src={company['icon']} style={{ width: '32px'}} /> &nbsp;<a href={company['url']} target="_blank">{company['url']}</a></td>
                <td>{company['transportationMode']}</td>
                <td>
                  <Row>
                    <Col className="col-md-6">
                      <Link className="btn btn-primary btn-sm mr-2" to={`/company/${company['companyId']}`}>
                        <i className="bi bi-pencil-square"></i>
                      </Link>
                    </Col>
                    <Col className="col-md-6">
                      <Button className="btn btn-danger btn-sm" onClick={() => handleDeleteCompany(company['companyId'])}>
                        <i className="bi bi-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Link className="btn btn-primary" to={'/company'}>Add Company</Link>
      </Container>
    </>
  );
}

export default CompanyList;