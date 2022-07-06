import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import AuthContext from '../AuthContext';

// TODO styling
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

  const auth = useContext(AuthContext);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (auth === undefined || auth.user === null) {
      navigate('/login');
      return;
    }
    const init = {
      headers: {
        'Authorization': `Bearer ${auth.user.token}`
      },
    };
    if (id) {
      fetch(`http://localhost:8080/api/company/${id}`, init)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else if (response.status === 404) {
            navigate('/');  
          }  
           else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .then(data => setCompany(data))
        .catch(console.log);
    }
  }, [id]);

  return (
    <>
      <h1 className="text-center my-5">{company['companyName']}, Company Information</h1>
      <Container>
        <h3>Company Specifics</h3>
        <Table className="table" size="sm">
          <thead>
            <tr className="thead">
              <th>Company Name</th>
              <th>Company Website</th>
              <th>Transport Type</th>
            </tr>
          </thead>
          <tbody className="tbody">
            <tr key={company['companyId']}>
              <td>{company['companyName']}</td>
              <td><img src={company['icon']} style={{ width: '32px' }} /> &nbsp;<a href={company['url']} target="_blank">{company['url']}</a></td>
              <td>{company['transportationMode']}</td>
            </tr>
          </tbody>
        </Table>
        <Link className="pageButton btn me-3" to={`/company/${company['companyId']}`}>Edit Company Info</Link>
        <Link className="pageButton btn" to={`/companyreservationlist/${company['companyId']}`}>View Reservations</Link>
      </Container>
    </>
  );
}

export default CompanyPage;