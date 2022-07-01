import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

type RESERVATION_DEFAULT = {
  reservationId: string | undefined,
  appUserId: string,
  companyId: string,
  reservationDate: string,
  reservationCode: string,
  reservationTitle: string
};

function SingleUserReservation() {
  const [reservation, setReservation] = useState<RESERVATION_DEFAULT>({
    reservationId: "",
    appUserId: "",
    companyId: "",
    reservationDate: "",
    reservationCode: "",
    reservationTitle: "",
  });

  const { id } = useParams();

  useEffect(() => {
    if(id) {
    fetch(`http://localhost:8080/test/reservation/${id}`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => setReservation(data))
      .catch(console.log);
    }
  }, [id]);

  

  return (
    <>
      <h1 className="text-center">Your Reservation</h1>
      <h3 style={{ textDecoration: "underline" }}>Reservation Specifics</h3>
      <Table size="sm">
        <thead>
          <tr>
            <th>Trip Title</th>
            <th>Date</th>
            <th>Transport Company</th>
            <th>Company Website</th>
            <th>Reservation Number</th>
          </tr>
        </thead>
        <tbody>
          <tr key={reservation['reservationId']}>
            <td>{reservation['reservationTitle']}</td>
            <td>{reservation['reservationDate']}</td>
            <td>{reservation['companyId']}</td>
            <td>{company['url']}</td>
            <td>{reservation['reservationCode']}<Button className="text-dark">Copy</Button></td>
          </tr>
        </tbody>
      </Table>
      <Button>Edit Reservation</Button>
      <Button>Delete Reservation</Button>
    </>
  );
}

export default SingleUserReservation;