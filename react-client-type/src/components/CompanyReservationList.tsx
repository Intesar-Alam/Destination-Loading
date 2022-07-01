import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

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


  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/api/reservation/company/${id}`)
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


  return (
    <>
      <h1 className="text-center mb-5">All Reservations for {company['companyName']}</h1>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Reservation Title</th>
              <th>Date</th>
              <th>Reservation Code</th>
            </tr>
          </thead>

          <tbody>
            {reservations.map(reservation => (
              <tr key={reservation['reservationId']}>
                <td>{reservation['reservationTitle']}</td>
                <td>{reservation['reservationDate']}</td>
                <td>{reservation['reservationCode']}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total Number of Reservations: (count)</td>
            </tr>
          </tfoot>
        </Table>
      </Container>

      {/* <Link to={`/companypage/${company['companyId']}`}><i className="bi bi-arrow-left-short"></i>Back</Link> */}

    </>
  );
}

export default CompanyReservationList;