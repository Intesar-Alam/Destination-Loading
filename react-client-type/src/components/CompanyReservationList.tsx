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

function CompanyReservationList() {
  const [company, setCompany] = useState<COMPANY_DEFAULT>({
    companyId: "",
    companyName: "",
    url: "",
    icon: "",
    transportationMode: "",
  });

  const [reservations, setReservations] = useState([]);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

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
      fetch(`http://localhost:8080/api/reservation/company/${id}`, init)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .then(data => setReservations(data))
        .catch(console.log);
    }
  }, [id]);

  const length = reservations.length;


  return (
    <>
      <h1 className="text-center my-5">All Reservations for {company['companyName']}</h1>
      <Container>
        <Table className="table">
          <thead>
            <tr className="thead">
              <th>Reservation Title</th>
              <th>Date</th>
              <th>Reservation Code</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {reservations.map(reservation => (
              <tr key={reservation['reservationId']}>
                <td>{reservation['reservationTitle']}</td>
                <td>{reservation['reservationDate']}</td>
                <td>{reservation['reservationCode']}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="tfoot">
            <tr>
              <td colSpan={3}>Total Number of Reservations: {length}</td>
            </tr>
          </tfoot>
        </Table>
        <Link to={`/companypage/${id}`}><i className="bi bi-arrow-left-short"></i>Back</Link>
      </Container>

    </>
  );
}

export default CompanyReservationList;