import './App.css';
import { Container, Row, Col, Button, Form, Dropdown, DropdownButton, ButtonGroup, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './categories.json';
import FormInput from './ItemForm.js';
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>


//Find way to generate Accordions


function App() {
  const handleSubmit = (e) => {
    const picture = e.target[0].value;
    const name = e.target[1].value;
    const color = e.target[2].value;
    const amount = e.target[3].value;
    const price = e.target[4].value;
    const description = e.target[5].value;
    const store = e.target[6].value;
    console.log({ picture, name, color, amount, price, description, store });
    // Put console log for final result here...
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
      

      </header>
    </div>
  );
}

export default App;
