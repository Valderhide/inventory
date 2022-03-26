import { Table } from "react-bootstrap";

export default function Print() {
  let data = JSON.parse(localStorage.getItem("properties"));

  let sum = data.reduce(
    (accumulator, data) => accumulator + parseInt(data.price),
    0
  );

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, price }) => (
          <tr>
            <td>{name}</td>
            <td>{price}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <td> Total</td>
        <td> {(window.onload = sum)} </td>
      </tfoot>
    </Table>
  );
}
