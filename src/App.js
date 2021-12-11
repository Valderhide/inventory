import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItemForm from './ItemForm.js';
import ItemTable from './Table.js';
import categories from './categories.json';




function App() {

  const handleSubmit = (e) => {
    const picture = e.target[0].value;
    const name = e.target[1].value;
    const color = e.target[2].value;
    const amount = e.target[3].value;
    const price = e.target[4].value;
    const description = e.target[5].value;
    const store = e.target[6].value;
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
