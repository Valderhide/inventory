import { Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Quilting Inventory</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Homepage">Homepage</Nav.Link>
              <Nav.Link href="/inventory">Inventory</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
