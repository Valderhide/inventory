import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1 className="inv-table">
        Inventory System Home Page
        <nav>
          <Link to="/inventory">Inventory</Link>
          <p>
            Laborum ullamco ullamco enim deserunt ipsum in esse velit sint elit
            Lorem est ad. Id cupidatat aliquip occaecat tempor velit
            reprehenderit voluptate sint enim laboris. Laborum voluptate culpa
            occaecat dolore sint aliqua anim aliquip occaecat quis quis anim.
            Fugiat excepteur nostrud non minim quis nostrud fugiat officia nulla
            officia laboris. Irure ullamco sunt proident aliqua Lorem.
            Exercitation non ea cupidatat ullamco occaecat veniam sint voluptate
            adipisicing commodo deserunt ipsum. Nisi elit ipsum nostrud nostrud
            velit.
          </p>
        </nav>
      </h1>
    </div>
  );
}
