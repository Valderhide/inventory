import './App.css';
import { Button, Modal, DropdownButton } from "react-bootstrap"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItemForm from './ItemForm.js';
import ItemTable from './Table.js';





function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState(JSON.parse(localStorage.getItem('properties')))
  const info = JSON.parse(localStorage.getItem('properties'))

  const makeHandleSubmit = (categories) => (e) => {
    const picture = e.target[0].value;
    const pName = e.target[1].value;
    const color = e.target[2].value;
    const amount = e.target[3].value;
    const price = e.target[4].value;
    const description = e.target[5].value;
    const store = e.target[6].value;
    //localStorage.clear();
    let originalValue = localStorage.getItem('properties');
    let previousValue = JSON.parse(originalValue) ?? [];
    let newValue = { categories, picture, pName, color, amount, price, description, store };
    previousValue.push(newValue);
    localStorage.setItem('properties', JSON.stringify(previousValue));
    setData(originalValue);
    // Put console log for final result here...
    e.preventDefault();

  }

  /*const removeItem = () => {
    let originalValue = localStorage.getItem('properties');
    let previousValue = JSON.parse(originalValue) ?? [];
    previousValue.splice('properties', 1);
    localStorage.setItem('properties', JSON.stringify(previousValue));
    setData(originalValue);

  }*/

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
          {info.map(({ pName }))}
          <DropdownButton variant="primary"
            title="Remove Item"
          /*onClick={removeItem}*/>
            Remove Item
          </DropdownButton>
          <ItemTable data={data} info={info} />
        </header>
      </div>
    </>
  );

}

export default App;
