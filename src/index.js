import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Inv from "./pages/Inventory";
import Print from "./pages/Print Shopping List";
import HomePage from "./pages/Homepage";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="inventory" element={<Inv />} />
      </Route>
      <Route path="shoppingList" element={<Print />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
