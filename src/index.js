import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Inv from "./inventory";
import Print from "./shoppingList";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="inventory" element={<Inv />} />
      <Route path="shoppingList" element={<Print />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
