import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

// This is the company landing page (where they go after logging in)
// TODO add authorization for rep only to view this page, must be logged in
type COMPANY_DEFAULT = {
  companyId: string | undefined,
  companyName: string,
  url: string,
  icon: string,
  transportationMode: string
};

function CompanyPage() {
  const [company, setCompany] = useState<COMPANY_DEFAULT>({
    companyId: "",
    companyName: "",
    url: "",
    icon: "",
    transportationMode: "",
  });

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/api/company/${id}`)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .then(data => setCompany(data))
        .catch(console.log);
    }
  }, [id]);

  return (
    <>
      <h1 className="text-center mb-5">{company['companyName']}, Company Information</h1>
      <Container>
        <h3 style={{ textDecoration: "underline" }}>Company Specifics</h3>
        <Table size="sm">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Company Website</th>
              <th>Transport Type</th>
            </tr>
          </thead>
          <tbody>
            <tr key={company['companyId']}>
              <td>{company['companyName']}</td>
              <td><img src={company['icon']} style={{ width: '32px' }} /> &nbsp;<a href={company['url']} target="_blank">{company['url']}</a></td>
              <td>{company['transportationMode']}</td>
            </tr>
          </tbody>
        </Table>
        <Link className="btn btn-primary me-3" to={`/company/${company['companyId']}`}>Edit Company Info</Link>
        <Link className="btn btn-primary" to={`/companyreservationlist/${company['companyId']}`}>View Reservations</Link>
      </Container>
    </>
  );
}

export default CompanyPage;