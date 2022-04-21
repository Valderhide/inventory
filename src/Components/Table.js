import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

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
            <form>
              <input
                type="text"
                value={filter1}
                onChange={(e) => setFilter1(e.target.value)}
                placeholder="Search"
              />
            </form>
          </th>
          <th>
            <form>
              <input
                type="text"
                value={filter2}
                onChange={(e) => setFilter2(e.target.value)}
                placeholder="Search"
                size={5}
              />
            </form>
          </th>
          <th>
            <form>
              <input
                type="text"
                value={filter3}
                onChange={(e) => setFilter3(e.target.value)}
                placeholder="Search"
                size={5}
              />
            </form>
          </th>
          <th>
            <form>
              <input
                type="text"
                value={filter4}
                onChange={(e) => setFilter4(e.target.value)}
                placeholder="Search"
                size={5}
              />
            </form>
          </th>
          <th>
            <form>
              <input
                type="text"
                value={filter5}
                onChange={(e) => setFilter5(e.target.value)}
                placeholder="Search"
                size={5}
              />
            </form>
          </th>
          <th>
            <form>
              <input
                type="text"
                value={filter6}
                onChange={(e) => setFilter6(e.target.value)}
                placeholder="Search"
                size={5}
              />
            </form>
          </th>
          <th>
            <form>
              <input
                type="text"
                value={filter7}
                onChange={(e) => setFilter7(e.target.value)}
                placeholder="Search"
                size={5}
              />
            </form>
          </th>
          <th>
            <Button onClick={() => resetFilters()}> Reset </Button>
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
