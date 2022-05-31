import { Table, Button } from "react-bootstrap";
import { categoryString } from "../pages/Inventory";

export default function ItemTable({
  state,
  dispatch,
  onRowDelete,
  tableData,
  sum,
}) {
  const id = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
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
          <th>Picture</th>
          <th>Category</th>
          <th>Product Name</th>
          <th>Color</th>
          <th>Amount</th>
          <th>Price</th>
          <th>Description</th>
          <th>Store</th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th>
            <form>
              <input
                type="text"
                value={state.category}
                onChange={(e) => dispatch({ category: e.target.value })}
                //onChange={(e) => setFilter1(e.target.value)}
                placeholder="Search"
                size={5}
              />
            </form>
          </th>
          <th>
            <form>
              <input
                type="text"
                value={state.name}
                onChange={(e) => dispatch({ name: e.target.value })}
                //onChange={(e) => setFilter2(e.target.value)}
                placeholder="Search"
                size={5}
              />
            </form>
          </th>
          <th>
            <form>
              <input
                type="text"
                value={state.color}
                onChange={(e) => dispatch({ color: e.target.value })}
                placeholder="Search"
                size={5}
              />
            </form>
          </th>
          <th>
            <form>
              <input
                type="text"
                value={state.amount}
                onChange={(e) => dispatch({ amount: e.target.value })}
                placeholder="Search"
                size={5}
              />
            </form>
          </th>
          <th>
            <form>
              <input
                type="text"
                value={state.price}
                onChange={(e) => dispatch({ price: e.target.value })}
                placeholder="Search"
                size={5}
              />
            </form>
          </th>
          <th>
            <form>
              <input
                type="text"
                value={state.description}
                onChange={(e) => dispatch({ description: e.target.value })}
                placeholder="Search"
                size={5}
              />
            </form>
          </th>
          <th>
            <form>
              <input
                type="text"
                value={state.store}
                onChange={(e) => dispatch({ store: e.target.value })}
                placeholder="Search"
                size={5}
              />
            </form>
          </th>

          <th>
            <Button
              onClick={(e) =>
                dispatch({
                  category: "",
                  name: "",
                  color: "",
                  amount: "",
                  price: "",
                  description: "",
                  store: "",
                })
              }
            >
              {" "}
              Reset{" "}
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(
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
            <tr key={id()}>
              <td key={base64}>
                {" "}
                <img src={base64} alt="" />{" "}
              </td>
              <td key={categoryString(categories)}>
                {categoryString(categories)}
              </td>

              <td key={name}>{name}</td>
              <td key={color}>{color}</td>
              <td key={amount}>{amount}</td>
              <td key={price}>{price}</td>
              <td key={description}>{description}</td>
              <td key={store}>{store}</td>
              <td>
                <Button onClick={() => onRowDelete(name)}> Delete </Button>
              </td>
            </tr>
          )
        )}
        <th id="No Data" class="hope">
          <td> No Item Detected</td>
        </th>
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
