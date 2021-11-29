import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItemForm from './ItemForm.js';
import ItemTable from './Table.js';
import categories from './categories.json';
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>




function App() {

  const handleSubmit = (e) => {
    const offset = categories.length;
    const picture = e.target[offset +9].value;
    const name = e.target[offset + 10].value;
    const color = e.target[offset + 11].value;
    const amount = e.target[offset + 12].value;
    const price = e.target[offset + 13].value;
    const description = e.target[offset + 14].value;
    const store = e.target[offset + 15].value;
    //localStorage.setItem({ picture, name, color, amount, price, description, store });
    console.log({ picture, name, color, amount, price, description, store });
    console.log(e.target)
    // Put console log for final result here...
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <AddItemForm handleSubmit={handleSubmit} />
        <ItemTable />
      </header>
    </div>
  );
}

export default App;
