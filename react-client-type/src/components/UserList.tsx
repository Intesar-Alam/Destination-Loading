import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function UserList() {
  const [userAccounts, setUserAccounts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/test/useraccount')
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => setUserAccounts(data))
      .catch(console.log);
  }, []);

  return (
    <>
      <h1 className="text-center">All Customers We Work With</h1>
      <Container>
        <Table>
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
          {userAccounts.map(userAccount => (
            <tr key={userAccount['userAccountId']}>
              <td>{userAccount['userAccountId']}</td>
              <td>{userAccount['firstName']} {userAccount['lastName']}</td>
              <td>{userAccount['email']}</td>
              <td>{userAccount['address']}</td>
              <td>{userAccount['phone']}</td>
              <td>{userAccount['dob']}</td>
              <td>
                <div className="float-right mr-2">
                  <Link className="btn btn-primary btn-sm mr-2" to={`}`}>
                    <i className="bi bi-pencil-square"></i> Edit
                  </Link>
                  {/* {auth.user && auth.user.hasRole('ROLE_ADMIN') && (
                    <Button className="btn btn-danger btn-sm" onClick={() => handleDeletePanel(user.id)}>
                      <i className="bi bi-trash"></i> Delete
                    </Button>
                  )} */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        </Table>
        <Button>Edit Customer</Button>
      </Container>
    </>
  );
}

export default UserList;