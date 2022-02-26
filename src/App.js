import { Button, Modal, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddItemForm from './ItemForm.js';
import ItemTable from './Table.js';


const getProperties = () => {
  const properties = JSON.parse(localStorage.getItem('properties'))

  if (!properties) {
    localStorage.setItem('properties', JSON.stringify([]));
    return []
  }
  return properties
}


function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState(getProperties())

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
    setData(previousValue);
    // Put console log for final result here...
    e.preventDefault();

  }

  const onRowDelete = () => {
    const properties = JSON.parse(localStorage.getItem('properties'))
    const newProperties = properties.filter(function(filtered)
    {
      return filtered.name !=='Fifth'
    }
    );
    console.log(newProperties);

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

          <DropdownButton
            as={ButtonGroup}
            variant="primary"
            onSelect={onRowDelete}
            title='Remove Item'

          >
            {data.map(({ name }) => (
              <Dropdown.Item key={name} eventKey={name}>{name}</Dropdown.Item>

            ))}
          </DropdownButton>

          <ItemTable data={data} onRowDelete={onRowDelete} />
        </header>
      </div>
    </>
  );

}

export default App;
