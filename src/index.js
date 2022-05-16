import { render } from "react-dom";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Inv from "./pages/Inventory";
import Print from "./pages/Print Shopping List";
import HomePage from "./pages/Homepage";

const rootElement = document.getElementById("root");

// filter1(state, price), filter2(state, amount), filter3(state), filter4(state)
// filter(state) = {price: 10, amount: 20}

const InventoryApp = () => {
  const [tableData, setTableData] = useState();
  const [filters, setFilters] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route
            path="inventory"
            element={<Inv tableData={tableData} setTableData={setTableData} />}
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
