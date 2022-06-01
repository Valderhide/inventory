import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

export default function HomePage() {
  return (
    <div>
      <Container>
        <h2>Introduction</h2>
        <p>
          <a href="https://github.com/Valderhide/inventory">Github Page</a>
        </p>
        <p>
          Welcome to my Inventory management app. The reason for making this app
          is because my mother suggested this idea while I was brainstorming
          ideas for what I wanted my first React app to be. She has A LOT of
          fabrics, sewing, and quilting material and I was looking to move in a
          different direction than my previous Javascript Snake Game.
        </p>
        <h2>How to use the App</h2>
        <p>
          The bulk of the work is done with the "Add Item" button found at the
          top of the table, below the Navigation bar. Click the "Add Item"
          button and a new menu will open with all the options you can assign
          the item being made.
        </p>
        <p>
          The first option is the Category you want to assign the item to,
          Fabrics, Patterns, or Buttons (If you see this, more will be added in
          the future). Only one Category can be assigned to the item, and each
          category reveals a dropdown with subcategories, which further reveals
          a list of properties.
        </p>
        <p>
          After that you can choose to upload an image of the item from your
          computer. The last remaining options, name, color, amount, price, item
          description and store location are filled in manually. Once done,
          click save changes and the item will be saved and displayed in the
          table.
        </p>
        <p>
          You will also see a little search box at the top of each column. These
          are used to filter the properties below them. Type in the box what you
          are looking for, and the rest will be removed from the table. Repeat
          this for each search box and the the more items that will be filtered
          out.
        </p>

        <p>
          Click the link bellow or at the top of the page to access the
          Inventory system itself
        </p>

        <Link to="/inventory">
          <Button variant="primary">Inventory Page</Button>
        </Link>
      </Container>
    </div>
  );
}
