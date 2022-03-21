import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Inventory System Home Page</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/inventory">Inventory</Link> |{" "}
      </nav>
    </div>
  );
}
