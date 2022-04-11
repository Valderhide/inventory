import { Table, Button } from "react-bootstrap";

export default function ItemTable({ data, onRowDelete }) {
  const categoryString = (categories) => {
    let kv = Object.entries(categories)
      .map((x) => x.join(":"))
      .join("/n");
    return kv;
    // Use Object.entries(categories) to turn the categories into string (Fabric:)
    // Use Object.entires(value) to turn the subcategories into strings (Color:)
    // Then just append the next value (Red)
    // Fabric: Red
    //`${category}:${value}`;
  };

  return (
    <Table id="myTable" striped borderless hover variant="dark" size="sm">
      <thead>
        <tr>
          <th>Category</th>
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
              <input
                type="text"
                id="myInput"
                placeholder="Search"
                onKeyUp={() => console.log("filterTable()")}
                size="15"
              ></input>
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
              <td>{categoryString(categories)}</td>
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
