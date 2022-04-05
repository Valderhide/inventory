import { Table, Button } from "react-bootstrap";

export default function ItemTable({ data, onRowDelete }) {
  return (
    <Table striped borderless hover variant="dark" size="sm">
      <thead>
        <tr>
          <th>Fabrics</th>
          <th>Patterns</th>
          <th>Buttons</th>
          <th>picture</th>
          <th>Product Name</th>
          <th> color </th>
          <th> amount </th>
          <th>price</th>
          <th>description</th>
          <th>store</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>
              <input type="text" size="5" />
            </p>
          </td>
          <td>
            <p>
              <input type="text" size="5" />
            </p>
          </td>
          <td>
            <p>
              <input type="text" size="5" />
            </p>
          </td>
          <td>
            <p>
              <input type="text" size="5" />
            </p>
          </td>
          <td>
            <p>
              <input type="text" size="5" />
            </p>
          </td>
        </tr>
        {data.map(
          ({
            categories,
            base64,
            name,
            color,
            amount,
            price,
            description,
            store,
          }) => (
            <tr>
              <td>{`${categories?.Fabrics}`}</td>
              <td>{`${categories?.Patterns}`}</td>
              <td>{`${categories?.Buttons}`}</td>
              <td>
                {" "}
                <img src={base64} alt="" />{" "}
              </td>
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
          )
        )}
      </tbody>
    </Table>
  );
}
