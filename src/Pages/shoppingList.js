import { Table, Button } from "react-bootstrap";
import { useState } from "react";

export default function Print() {
  let data = JSON.parse(localStorage.getItem("properties"));
  const [isPrinting, setIsPrinting] = useState(false);

  const printItems = () => {
    setIsPrinting(true);
    window.print();
  };

  let sum = data.reduce(
    (accumulator, data) =>
      accumulator + parseFloat(data.amount) * parseFloat(data.price),
    0
  );

  return (
    <div>
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
      {!isPrinting && (
        <Button>
          <Button name="print" onClick={printItems}>
            {" "}
            Print{" "}
          </Button>
        </Button>
      )}
    </div>
  );
}
