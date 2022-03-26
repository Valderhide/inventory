import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav className="home">
        <h1 clas>Inventory System Home Page</h1>
        <Link to="/">HomePage</Link> | <Link to="/inventory">Inventory</Link>
      </nav>
      <Outlet />
    </div>
  );
}
