import { Table } from "react-bootstrap";

export default function Print() {
  let data = JSON.parse(localStorage.getItem("properties"));

  let sum = data.reduce(
    (accumulator, data) =>
      accumulator + parseInt(data.amount) * parseInt(data.price),
    0
  );

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, price, amount }) => (
          <tr>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{price}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <td> Total</td>
        <td></td>
        <td> {sum} </td>
      </tfoot>
    </Table>
  );
}
