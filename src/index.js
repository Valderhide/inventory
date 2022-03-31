import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Inv from "./Pages/inventory";
import Print from "./Pages/shoppingList";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          index
          element={
            <div className="descript">
              Enim magna sunt laborum deserunt. Magna minim ipsum laborum velit
              anim occaecat irure culpa exercitation officia esse sunt. Amet
              cillum voluptate excepteur et cupidatat laboris irure do
              adipisicing pariatur laborum. Consequat anim elit officia deserunt
              commodo aliquip qui irure esse.
            </div>
          }
        />
        <Route path="inventory" element={<Inv />} />
        <Route path="shoppingList" element={<Print />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
