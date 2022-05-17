import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import App from "./App";
import Inv from "./pages/Inventory";
import Print from "./pages/Print Shopping List";
import HomePage from "./pages/Homepage";

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

const InventoryApp = () => {
  const [data, setData] = useState(getProperties());
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [filter3, setFilter3] = useState("");
  const [filter4, setFilter4] = useState("");
  const [filter5, setFilter5] = useState("");
  const [filter6, setFilter6] = useState("");
  const [filter7, setFilter7] = useState("");
  let filterObj = {
    filter1,
    filter2,
    filter3,
    filter4,
    filter5,
    filter6,
    filter7,
  };
  let setFilterObj = {
    setFilter1,
    setFilter2,
    setFilter3,
    setFilter4,
    setFilter5,
    setFilter6,
    setFilter7,
  };
  const [tableData, setTableData] = useState(data);
  const [filters, setFilters] = useState(filterObj);
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
              />
            }
          />
        </Route>
        <Route
          path="shoppingList"
          element={<Print tableData={tableData} setTableData={setTableData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

render(<InventoryApp />, rootElement);
