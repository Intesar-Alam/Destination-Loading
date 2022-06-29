import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/test/useraccount')
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return Promise.reject(`Unexpected status code: ${response.status}`);
      }
    })
    .then(data => setUsers(data))
    .catch(console.log);
  }, []);

  return (
    <>
      <h1>All Customers We Work With</h1>
      {/* <Table>
        <thead className="thead-dark">
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Date of Birth</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {.map( => (
            <tr key={.id}>
              <td>{.id}</td>
              <td>{.firstName} {.lastName}</td>
              <td>{.email}</td>
              <td>{.address}</td>
              <td>{.phone}</td>
              <td>{.dob}</td>
              <td>
                <div className="float-right mr-2">
                  <Link className="btn btn-primary btn-sm mr-2" to={`}`}>
                    <i className="bi bi-pencil-square"></i> Edit
                  </Link>
                  {auth.user && auth.user.hasRole('ROLE_ADMIN') && (
                    <Button className="btn btn-danger btn-sm" onClick={() => handleDeletePanel(.id)}>
                      <i className="bi bi-trash"></i> Delete
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
      <Button>Edit Customer</Button>
    </>
  );
}

export default UserList;