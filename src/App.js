import { Button, Modal } from "react-bootstrap"
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

  const makeHandleSubmit = (categories) => async (e) => {

    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
          reject(error);
        }
      });
    };

    const name = e.target[1].value;
    const color = e.target[2].value;
    const amount = e.target[3].value;
    const price = e.target[4].value;
    const description = e.target[5].value;
    const store = e.target[6].value;
    let originalValue = localStorage.getItem('properties');
    let previousValue = JSON.parse(originalValue) ?? [];
    let base64 = "";
    if (e.target[0].files[0]) {
      base64 = await convertBase64(e.target[0].files[0]);
    }
    let newValue = { categories, base64, name, color, amount, price, description, store };
    previousValue.push(newValue);
    localStorage.setItem('properties', JSON.stringify(previousValue));
    setData(previousValue);
    e.preventDefault();

  }

  const onRowDelete = (name) => {
    const properties = JSON.parse(localStorage.getItem('properties'))
    const newProperties = properties.filter(function (filtered) {
      return filtered.name !== name;
    }
    );

    localStorage.setItem('properties', JSON.stringify(newProperties));
    setData(newProperties);
  }


  const [modalState, setModalState] = useState("close")

  const handleShowAddItem = () => {
    setModalState("modal-one")
  }

  const handleShowShoppingList = () => {
    setModalState("modal-two")
  }

  const modalClose = () => {
    setModalState("close")
  }

  return (
    <>
      <div className="App">
        <header className="App-header">

          {/*Modal Buttons*/}
          <Button variant="primary" onClick={handleShowAddItem}>
            Add Item
          </Button>

          <Button variant="primary" onClick={handleShowShoppingList}>
            Get Shopping List
          </Button>

          {/*Modals*/}
          <Modal show={modalState === "modal-one"} onHide={modalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Item</Modal.Title>
            </Modal.Header>
            <Modal.Body> <AddItemForm makeHandleSubmit={makeHandleSubmit} /> </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={modalClose}>
                Close
              </Button>
              <Button variant="primary" onClick={modalClose} type="submit" form="submitForm">
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={modalState === "modal-two"} onHide={modalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Shopping List</Modal.Title>
            </Modal.Header>
            <Modal.Body> Test </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={modalClose}>
                Close
              </Button>
              <Button variant="primary" onClick={modalClose} type="submit" form="submitForm">
                Export/Print
              </Button>
            </Modal.Footer>
          </Modal>

        </header>

        {/*Table*/}
        <table className="inv-table">
          <ItemTable data={data} onRowDelete={onRowDelete} />
        </table>
      </div>
    </>
  );

}

export default App;
