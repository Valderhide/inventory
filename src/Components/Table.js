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

  const filterTable = () => {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
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
          <th>
            <p>
              <input
                type="text"
                id="myInput"
                placeholder="Search"
                onKeyUp={() => console.log(filterTable())}
                size="15"
              ></input>
            </p>
          </th>
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
