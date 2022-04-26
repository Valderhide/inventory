import { Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function App() {
  let data = JSON.parse(localStorage.getItem("properties"));

  const categoryString = (categories) => {
    let kv = Object.entries(categories)
      .map((x) => x.join(":"))
      .join("/n");
    return kv;
  };

  let maths = data.reduce(
    (accumulator, data) =>
      accumulator + parseFloat(data.amount) * parseFloat(data.price),
    0
  );
  let sum = maths.toFixed(2);

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
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Quilting Inventory</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/inventory">Inventory</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
