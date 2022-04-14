import { Table, Button } from "react-bootstrap";
import { useState } from "react";

export default function ItemTable({ data, onRowDelete }) {
  const categoryString = (categories) => {
    let kv = Object.entries(categories)
      .map((x) => x.join(":"))
      .join("/n");
    return kv;
  };

  const [filter1, setFilter1] = useState("l");
  const [filter2, setFilter2] = useState("b");

  const filterTable = () => {
    console.log(
      data.filter((item) => (item.length = 1))
      //data.filter((item) => item.contains(filter1) && item.contains(filter2)
    );
  };

  /*let col = [0, 1, 2, 3, 4, 5, 6];

  const filterTable = (col) => {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[col];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };*/

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
        <tr>
          <th></th>
          <th>
            <p>
              <input
                type="text"
                id="myInput"
                placeholder="Search"
                onKeyUp={() => filterTable()}
                size="5"
              ></input>
            </p>
          </th>
          <th>
            <p>
              <input
                type="text"
                id="myInput"
                placeholder="Search"
                onKeyUp={() => filterTable()}
                size="5"
              ></input>
            </p>
          </th>
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
