import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AuthContext from '../AuthContext';

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

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
    if (auth === undefined || auth.user === null) {
      window.alert('You must be logged in to access this feature')
      navigate('/login');
      return;
    }

    const company: any = companies.find(company => company['companyId'] === companyId);

    if (window.confirm(
      `    Deletion is permanent.
    Are you sure you want to proceded?
    Delete company ${company['companyName']}?`)) {
      const init = {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${auth.user.token}`
        },
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
      <h1 className="text-center my-5">All Companies We Work With</h1>
      <Container>
        <Table className="table">
          <thead>
            <tr className="thead">
              {auth && auth.user && auth.user.hasRole('ROLE_ADMIN') && (
                <th>Company Id</th>
              )}
              <th>Company Name</th>
              <th>Company Website</th>
              <th>Transportation Mode</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {companies.map(company => (
              <tr key={company['companyId']}>
                {auth && auth.user && auth.user.hasRole('ROLE_ADMIN') && (
                  <td>{company['companyId']}</td>
                )}
                <td>{company['companyName']}</td>
                <td><img src={company['icon']} style={{ width: '32px' }} /> &nbsp;<a href={company['url']} target="_blank">{company['url']}</a></td>
                <td>{company['transportationMode']}</td>
                <td>
                  <Row>
                    <Col className="col-md-6">
                      {auth && auth.user && auth.user.hasRole('ROLE_ADMIN') && (
                        <Button className="deleteButton btn-sm" onClick={() => handleDeleteCompany(company['companyId'])}>
                          <i className="bi bi-trash"></i>
                        </Button>
                      )}
                    </Col>
                  </Row>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {auth && auth.user && auth.user.hasRole('ROLE_ADMIN') && (
          <Link className="pageButton" to={'/company'}>Add Company</Link>
        )}
      </Container>
    </>
  );
}

export default CompanyList;