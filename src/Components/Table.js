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

  const filterTable1 = () => {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
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

  const filterTable2 = () => {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
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
          <th>picture</th>
          <th>Category</th>
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
        <th></th>
        <th>
          <p>
            <input
              type="text"
              id="myInput1"
              placeholder="Search"
              onKeyUp={() => filterTable1()}
              size="5"
            ></input>
          </p>
        </th>
        <th>
          <p>
            <input
              type="text"
              id="myInput2"
              placeholder="Search"
              onKeyUp={() => filterTable2()}
              size="5"
            ></input>
          </p>
        </th>

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
              <td>
                {" "}
                <img src={base64} alt="" />{" "}
              </td>
              <td>{categoryString(categories)}</td>

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
