import './App.css';
import { Button, Modal } from "react-bootstrap"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItemForm from './ItemForm.js';
import ItemTable from './Table.js';





function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = JSON.parse(localStorage.getItem('properties'))

  const makeHandleSubmit = (categories) => (e) => {
    const picture = e.target[0].value;
    const name = e.target[1].value;
    const color = e.target[2].value;
    const amount = e.target[3].value;
    const price = e.target[4].value;
    const description = e.target[5].value;
    const store = e.target[6].value;
    //localStorage.clear();
    let originalValue = localStorage.getItem('properties');
    let previousValue = JSON.parse(originalValue) ?? [];
    let newValue = { categories, picture, name, color, amount, price, description, store };
    previousValue.push(newValue);
    localStorage.setItem('properties', JSON.stringify(previousValue));
    // Put console log for final result here...
    e.preventDefault();

  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Button variant="primary" onClick={handleShow}>
            Add Item
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Item</Modal.Title>
            </Modal.Header>
            <Modal.Body> <AddItemForm makeHandleSubmit={makeHandleSubmit} /> </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose} type="submit" form="submitForm">
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <ItemTable data={data} />
        </header>
      </div>
    </>
  );

}

export default App;
