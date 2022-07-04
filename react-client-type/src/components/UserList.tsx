import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import AdminMenuBar from './AdminMenuBar';


function UserList() {
  const [userAccounts, setUserAccounts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/useraccount')
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

  // TODO handleDeleteUser
  const handleDeleteUser = (appUserId: number) => {
    const userAccount: any = userAccounts.find(userAccount => userAccount['appUserId'] === appUserId);

    if(window.confirm(
    `    Deletion is permanent.
    Are you sure you want to proceded?
    Delete user ${userAccount['firstName']} ${userAccount['lastName']}?`)) {
      const init = {
        method: 'DELETE',
        // headers: {
        //   'Authorization': `Bearer ${auth.user.token}`
        // },
      };

      fetch(`http://localhost:8080/api/useraccount/${appUserId}`, init)
      .then(response => {
        if (response.status === 204) {
          const newUserAccount = userAccounts.filter(userAccount => userAccount['appUserId'] !== appUserId);
          setUserAccounts(newUserAccount);
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
            <tr key={userAccount['appUserId']}>
              <td>{userAccount['appUserId']}</td>
              <td>{userAccount['firstName']} {userAccount['lastName']}</td>
              <td>{userAccount['email']}</td>
              <td>{userAccount['address']}</td>
              <td>{userAccount['phone']}</td>
              <td>{userAccount['dob']}</td>
              <td>
                <div className="float-right mr-2">
                  <Link className="btn btn-primary btn-sm mr-2 me-2" to={`/userupdateform/${userAccount['appUserId']}`}>
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                    <Button variant="danger" className="btn-sm" onClick={() => handleDeleteUser(userAccount['appUserId'])}>
                      <i className="bi bi-trash"></i>
                    </Button>
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