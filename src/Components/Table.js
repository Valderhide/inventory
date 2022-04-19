import { Table, Button } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";

export default function ItemTable({ data, onRowDelete }) {
  const categoryString = (categories) => {
    let kv = Object.entries(categories)
      .map((x) => x.join(":"))
      .join("/n");
    return kv;
  };

  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [filter3, setFilter3] = useState("");
  const [filter4, setFilter4] = useState("");
  const [filter5, setFilter5] = useState("");
  const [filter6, setFilter6] = useState("");
  const [filter7, setFilter7] = useState("");
  const [tableInfo, setTableInfo] = useState(data);

  const resetFilters = () => {
    setFilter1("");
    setFilter2("");
    setFilter3("");
    setFilter4("");
    setFilter5("");
    setFilter6("");
    setFilter7("");
  };

  useEffect(() => {
    const newData = data.filter(
      (item) =>
        categoryString(item.categories)
          .toLowerCase()
          .includes(filter1.toLowerCase()) &&
        item.name.toLowerCase().includes(filter2.toLowerCase()) &&
        item.color.toLowerCase().includes(filter3.toLowerCase()) &&
        item.amount.toLowerCase().includes(filter4.toLowerCase()) &&
        item.price.toLowerCase().includes(filter5.toLowerCase()) &&
        item.description.toLowerCase().includes(filter6.toLowerCase()) &&
        item.store.toLowerCase().includes(filter7.toLowerCase())
    );
    setTableInfo(newData);
  }, [filter1, filter2, filter3, filter4, filter5, filter6, filter7, data]);

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
                onKeyUp={() =>
                  setFilter1(document.getElementById("search1").value)
                }
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
                onKeyUp={() =>
                  setFilter2(document.getElementById("search2").value)
                }
                size="5"
              ></input>
            </p>
          </th>
          <th>
            <p>
              <input
                type="text"
                id="search3"
                placeholder="Search"
                onKeyUp={() =>
                  setFilter3(document.getElementById("search3").value)
                }
                size="5"
              ></input>
            </p>
          </th>
          <th>
            <p>
              <input
                type="text"
                id="search4"
                placeholder="Search"
                onKeyUp={() =>
                  setFilter4(document.getElementById("search4").value)
                }
                size="5"
              ></input>
            </p>
          </th>
          <th>
            <p>
              <input
                type="text"
                id="search5"
                placeholder="Search"
                onKeyUp={() =>
                  setFilter5(document.getElementById("search5").value)
                }
                size="5"
              ></input>
            </p>
          </th>
          <th>
            <p>
              <input
                type="text"
                id="search6"
                placeholder="Search"
                onKeyUp={() =>
                  setFilter6(document.getElementById("search6").value)
                }
                size="5"
              ></input>
            </p>
          </th>
          <th>
            <th>
              <p>
                <input
                  type="text"
                  id="search7"
                  placeholder="Search"
                  onKeyUp={() =>
                    setFilter7(document.getElementById("search7").value)
                  }
                  size="5"
                ></input>
              </p>
            </th>
            <th>
              <Button onClick={() => resetFilters()}> Reset </Button>
            </th>
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
