import { Table } from "react-bootstrap";

export default function Print({ tableData }) {
  let maths = tableData.reduce(
    (accumulator, { amount, price }) =>
      accumulator + parseFloat(amount) * parseFloat(price),
    0
  );
  let sum = maths.toFixed(2);

  const id = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

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
          {tableData.map(({ name, price, amount, store }) => (
            <tr key={id()}>
              <td key={name}>{name}</td>
              <td key={amount}>{amount}</td>
              <td key={price}>{price}</td>
              <td key={store}>{store}</td>
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
