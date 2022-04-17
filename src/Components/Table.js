import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function ItemTable({ data, onRowDelete }) {
  const categoryString = (categories) => {
    let kv = Object.entries(categories)
      .map((x) => x.join(":"))
      .join("/n");
    return kv;
  };

  const [filter1, setFilter1] = useState();
  const [filter2, setFilter2] = useState();
  const [filter3, setFilter3] = useState();
  const [filter4, setFilter4] = useState();
  const [filter5, setFilter5] = useState();
  const [filter6, setFilter6] = useState();
  const [filter7, setFilter7] = useState();
  const [newData, setNewData] = useState();

  const [tableInfo, setTableInfo] = useState(data);

  /*var newData = data.filter((item) => item.name.includes(filter1));
  useEffect(() => {
    setTableInfo(newData);
  }, [filter1, filter2, filter3, filter4, filter5, filter6, filter7]);

  const filterTable = () => {
    console.log(data.filter((item) => item.name.includes(filter1)));
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
                id="search1"
                placeholder="Search"
                onKeyUp={() => setFilter1("F")}
                size="5"
              ></input>
            </p>
          </th>
          <th>
            <p>
              <input
                type="text"
                id="search2"
                placeholder="Search"
                //onKeyUp={() => filterTable()}
                size="5"
              ></input>
            </p>
          </th>
        </tr>

        {tableInfo.map(
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
