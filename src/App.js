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
    const uploadImage = async () => {
      const file = e.target[0].files[0]
      return await convertBase64(file)
    }
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


    //const picture = e.target[0].value;
    const name = e.target[1].value;
    const color = e.target[2].value;
    const amount = e.target[3].value;
    const price = e.target[4].value;
    const description = e.target[5].value;
    const store = e.target[6].value;
    let originalValue = localStorage.getItem('properties');
    let previousValue = JSON.parse(originalValue) ?? [];
    const base64 = await uploadImage();
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

          <ItemTable data={data} onRowDelete={onRowDelete} />
        </header>
      </div>
    </>
  );

}

export default App;
