import { Table } from "react-bootstrap";

export default function Print() {
  let data = JSON.parse(localStorage.getItem("properties"));

  let maths = data.reduce(
    (accumulator, { amount, price }) =>
      accumulator + parseFloat(amount) * parseFloat(price),
    0
  );
  let sum = maths.toFixed(2);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Store</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, price, amount, store }) => (
            <tr>
              <td>{name}</td>
              <td>{amount}</td>
              <td>{price}</td>
              <td>{store}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <td> Total</td>
          <td></td>
          <td> {sum} </td>
        </tfoot>
      </Table>

      <button class="no-print" onClick={window.print}>
        Print
      </button>
    </div>
  );
}
