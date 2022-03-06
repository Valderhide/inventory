import { Table, Button } from 'react-bootstrap';


export default function ItemTable({ data, onRowDelete }) {
  return (
    <Table striped borderless hover variant="dark" size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>picture</th>
          <th>Product Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ base64, name, color, amount, price, description, store }) => (
          <tr>
            <td></td>
            <td> <img src={base64} /> </td>
            <td>{name}</td>
            <td>{color}</td>
            <td>{amount}</td>
            <td>{price}</td>
            <td>{description}</td>
            <td>{store}</td>
            <td>
              <Button onClick={() => onRowDelete(name)}> Delete </Button>

            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}