import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import "./index.css";
import App from "./App";
import Inv from "./pages/Inventory";
import Print from "./pages/Print";
import HomePage from "./pages/Homepage";
import { categoryString } from "./pages/Inventory";

const rootElement = document.getElementById("root");

// filter1(state, price), filter2(state, amount), filter3(state), filter4(state)
// filter(state) = {price: 10, amount: 20}

const getProperties = () => {
  const properties = JSON.parse(localStorage.getItem("properties"));

  if (!properties) {
    localStorage.setItem("properties", JSON.stringify([]));
    return [];
  }
  return properties;
};

const reducer = (state, event) => {
  return { ...state, ...event };
};

const InventoryApp = () => {
  const [data, setData] = useState(getProperties());
  const [state, dispatch] = useReducer(reducer, {
    category: "",
    name: "",
    color: "",
    amount: "",
    price: "",
    description: "",
    store: "",
  });
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    const newData = data.filter(
      (item) =>
        categoryString(item.categories)
          .toLowerCase()
          .includes(state.category.toLowerCase()) &&
        item.name.toLowerCase().includes(state.name.toLowerCase()) &&
        item.color.toLowerCase().includes(state.color.toLowerCase()) &&
        item.amount.toLowerCase().includes(state.amount.toLowerCase()) &&
        item.price.toLowerCase().includes(state.price.toLowerCase()) &&
        item.description
          .toLowerCase()
          .includes(state.description.toLowerCase()) &&
        item.store.toLowerCase().includes(state.store.toLowerCase())
    );
    setTableData(newData);
  }, [state, data]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route
            path="inventory"
            element={
              <Inv
                tableData={tableData}
                setTableData={setTableData}
                data={data}
                setData={setData}
                dispatch={dispatch}
                state={state}
              />
            }
          />
        </Route>
        <Route
          path="shoppingList"
          element={<Print tableData={tableData} setTableData={setTableData} />}
        />
      </Routes>
      {console.log(state)}
    </BrowserRouter>
  );
};

render(<InventoryApp />, rootElement);
