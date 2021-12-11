import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItemForm from './ItemForm.js';
import ItemTable from './Table.js';
import categories from './categories.json';




function App() {

  const handleSubmit = (e) => {
    const offset = categories.length;
    const picture = e.target[offset + 9].value;
    const name = e.target[offset + 10].value;
    const color = e.target[offset + 11].value;
    const amount = e.target[offset + 12].value;
    const price = e.target[offset + 13].value;
    const description = e.target[offset + 14].value;
    const store = e.target[offset + 15].value;
    //localStorage.clear();
    console.log({ picture, name, color, amount, price, description, store });
    let originalValue = localStorage.getItem('properties');
    let previousValue = JSON.parse(originalValue) ?? [];
    let newValue = { picture, name, color, amount, price, description, store };
    previousValue.push(newValue);
    localStorage.setItem('properties', JSON.stringify(previousValue));
    // Put console log for final result here...
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <AddItemForm handleSubmit={handleSubmit} />
        {/*<ItemTable />*/}
      </header>
    </div>
  );
}

export default App;
