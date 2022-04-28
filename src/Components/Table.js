import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function ItemTable({
  data,
  onRowDelete,
  filter1,
  filter2,
  filter3,
  filter4,
  filter5,
  filter6,
  filter7,
  setFilter1,
  setFilter2,
  setFilter3,
  setFilter4,
  setFilter5,
  setFilter6,
  setFilter7,
  resetFilters,
  tableInfo,
  categoryString,
  sum,
}) {
  return (
    <Table
      id="myTable"
      striped
      borderless
      hover
      variant="dark"
      size="sm"
      className="inv-table"
    >
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
      <tfoot>
        <tr>
          <td> Total Value</td>
          <td> ${sum} </td>
        </tr>
      </tfoot>
    </Table>
  );
}
