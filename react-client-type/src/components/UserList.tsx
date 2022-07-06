import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import AdminMenuBar from './AdminMenuBar';

import AuthContext from '../AuthContext';


function UserList() {
  const [userAccounts, setUserAccounts] = useState([]);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (auth === undefined || auth.user === null) {
      navigate('/login');
      return ;
    }
    const init = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${auth.user.token}`
      },
    };
    fetch('http://localhost:8080/api/useraccount', init)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 403) {
          return navigate('/forbidden');
        } 
        else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then(data => setUserAccounts(data))
      .catch(console.log);
  }, []);

  const handleDeleteUser = (appUserId: number) => {
    if (auth === undefined || auth.user === null) {
      navigate('/login');
      return;
    }

    const userAccount: any = userAccounts.find(userAccount => userAccount['appUserId'] === appUserId);

    if (window.confirm(
      `    Deletion is permanent.
    Are you sure you want to proceded?
    Delete user ${userAccount['firstName']} ${userAccount['lastName']}?`)) {
      const init = {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${auth.user.token}`
        },
      };

      fetch(`http://localhost:8080/api/useraccount/${appUserId}`, init)
        .then(response => {
          if (response.status === 204) {
            const newUserAccount = userAccounts.filter(userAccount => userAccount['appUserId'] !== appUserId);
            setUserAccounts(newUserAccount);
          } else if (response.status === 403) {
            navigate('/forbidden');
            return;
          }
           else {
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
        <Table className="table">
          <thead className="thead">
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
          <tbody className="tbody">
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
                    <Button variant="danger" className="deleteButton btn-sm" onClick={() => handleDeleteUser(userAccount['appUserId'])}>
                      <i className="bi bi-trash"></i>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default UserList;