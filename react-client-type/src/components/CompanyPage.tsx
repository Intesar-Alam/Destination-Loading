
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function CompanyPage() {
  return (
    <>
    <h1 className="text-center">Company Name Here, Company Informaiton</h1>

    <h3 style={{ textDecoration: "underline" }}>Company Specifics</h3>
    <Table size="sm">
      <tr>
        <th>Company Name</th>
        <td>Delta</td>
      </tr>
      <tr>
        <th>Company Website</th>
        <td>10/22/2023</td>
      </tr>
      <tr>
        <th>Favicon</th>
        <td><i class="bi bi-bicycle"></i></td>
      </tr>
      <tr>
        <th>Transport Type</th>
        <td>Plane</td>
      </tr>
    </Table>
    <Button>Edit Company Info</Button>
    <Button>View Reservationa</Button>
  </>
  );
}

export default CompanyPage;