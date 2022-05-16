import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/App.css";
import AddItemForm from "../components/ItemForm.js";
import ItemTable from "../components/Table.js";

const getProperties = () => {
  const properties = JSON.parse(localStorage.getItem("properties"));

  if (!properties) {
    localStorage.setItem("properties", JSON.stringify([]));
    return [];
  }
  return properties;
};

function Inv() {
  //Back end Inventory functions
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState(getProperties());

  const makeHandleSubmit = (categories) => async (e) => {
    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };

    const name = e.target[1].value;
    const color = e.target[2].value;
    const amount = e.target[3].value;
    const price = e.target[4].value;
    const description = e.target[5].value;
    const store = e.target[6].value;
    let originalValue = localStorage.getItem("properties");
    let previousValue = JSON.parse(originalValue) ?? [];
    let base64 = "";
    if (e.target[0].files[0]) {
      base64 = await convertBase64(e.target[0].files[0]);
    }
    let newValue = {
      categories,
      base64,
      name,
      color,
      amount,
      price,
      description,
      store,
    };
    previousValue.push(newValue);
    localStorage.setItem("properties", JSON.stringify(previousValue));
    setData(previousValue);
    e.preventDefault();
  };

  const onRowDelete = (name) => {
    const properties = JSON.parse(localStorage.getItem("properties"));
    const newProperties = properties.filter(function (filtered) {
      return filtered.name !== name;
    });

    localStorage.setItem("properties", JSON.stringify(newProperties));
    setData(newProperties);
  };

  //Table functions
  const categoryString = (categories) => {
    let kv = Object.entries(categories)
      .map((x) => x.join(":"))
      .join("/n");
    return kv;
  };

  let maths = data.reduce(
    (accumulator, data) =>
      accumulator + parseFloat(data.amount) * parseFloat(data.price),
    0
  );
  let sum = maths.toFixed(2);

  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [filter3, setFilter3] = useState("");
  const [filter4, setFilter4] = useState("");
  const [filter5, setFilter5] = useState("");
  const [filter6, setFilter6] = useState("");
  const [filter7, setFilter7] = useState("");
  const [tableInfo, setTableInfo] = useState(data);

  const resetFilters = () => {
    setFilter1("");
    setFilter2("");
    setFilter3("");
    setFilter4("");
    setFilter5("");
    setFilter6("");
    setFilter7("");
  };

  useEffect(() => {
    const newData = data.filter(
      (item) =>
        categoryString(item.categories)
          .toLowerCase()
          .includes(filter1.toLowerCase()) &&
        item.name.toLowerCase().includes(filter2.toLowerCase()) &&
        item.color.toLowerCase().includes(filter3.toLowerCase()) &&
        item.amount.toLowerCase().includes(filter4.toLowerCase()) &&
        item.price.toLowerCase().includes(filter5.toLowerCase()) &&
        item.description.toLowerCase().includes(filter6.toLowerCase()) &&
        item.store.toLowerCase().includes(filter7.toLowerCase())
    );
    setTableInfo(newData);
    localStorage.setItem("filteredTable", JSON.stringify(newData));
  }, [filter1, filter2, filter3, filter4, filter5, filter6, filter7, data]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Button variant="primary" onClick={handleShow}>
            Add Item
          </Button>

          <Link
            to={{
              pathname: "/shoppingList",
              state: tableInfo,
            }}
          >
            <Button variant="primary">Shopping List</Button>
          </Link>

          {/*Modals*/}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <AddItemForm makeHandleSubmit={makeHandleSubmit} />{" "}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={handleClose}
                type="submit"
                form="submitForm"
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </header>

        {/*Table*/}

        <ItemTable
          data={data}
          onRowDelete={onRowDelete}
          filter1={filter1}
          filter2={filter2}
          filter3={filter3}
          filter4={filter4}
          filter5={filter5}
          filter6={filter6}
          filter7={filter7}
          setFilter1={setFilter1}
          setFilter2={setFilter2}
          setFilter3={setFilter3}
          setFilter4={setFilter4}
          setFilter5={setFilter5}
          setFilter6={setFilter6}
          setFilter7={setFilter7}
          resetFilters={resetFilters}
          tableInfo={tableInfo}
          categoryString={categoryString}
          sum={sum}
        />
      </div>
    </>
  );
}

export default Inv;
