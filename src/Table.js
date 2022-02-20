import { Table } from 'react-bootstrap';


export default function ItemTable({ info }) {
  return (
    <Table striped borderless hover variant="dark" size="sm">
      <thead className='table'>
        <tr>
          <th>#</th>
          <th>picture</th>
          <th>Product Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {info.map(({ categories, picture, name, color, amount, price, description, store }) => (
          <tr>
            <td></td>
            <td>{picture}</td>
            <td>{name}</td>
            <td>{color}</td>
            <td>{amount}</td>
            <td>{price}</td>
            <td>{description}</td>
            <td>{store}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}