import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItemForm from './ItemForm.js';
import ItemTable from './Table.js';
import categories from './categories.json';
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>




function App() {
  
  const handleSubmit = (e) => {
    const offset = categories.length;
    const picture = e.target[offset].value;
    const name = e.target[offset + 1].value;
    const color = e.target[offset + 2].value;
    const amount = e.target[offset + 3].value;
    const price = e.target[offset + 4].value;
    const description = e.target[offset + 5].value;
    const store = e.target[offset + 6].value;
    //localStorage.setItem({ picture, name, color, amount, price, description, store });
    console.log({ picture, name, color, amount, price, description, store });
    console.log(e.target[offset])
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
