import { Table } from 'react-bootstrap';


export default function ItemTable() {
  var data = JSON.parse(localStorage.getItem('properties'));
  console.log(data)
  return (
    <Table striped borderless hover variant="dark" size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>picture</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ categories, picture, name, color, amount, price, description, store }) => (
          <tr>
            <td></td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}