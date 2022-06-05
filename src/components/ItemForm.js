import {
  Table,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  Accordion,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import { useState } from "react";
import categories from "./categories.json";
import { categoryString } from "../pages/Inventory";

function Category({ title, items, setSelectedCategory }) {
  const handleSelect = (value) => {
    setSelectedCategory(() => {
      return { [title]: value };
    });
  };
  return (
    <Col>
      <Table>
        <thead>{title}</thead>
        {items.map(({ titles, subCategories }) => (
          <tr key={titles}>
            <tr
              as={ButtonGroup}
              variant="primary"
              onSelect={handleSelect}
              title={titles}
            >
              {subCategories.map((subCategory) => (
                <td key={subCategory} eventKey={subCategory}>
                  {subCategory}
                </td>
              ))}
            </tr>
          </tr>
        ))}
      </Table>
    </Col>
  );
}

export default function AddItemForm({ makeHandleSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState({});
  return (
    <>
      {categories.map(({ title, items }) => (
        <Category
          key={title}
          title={title}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          items={items}
        />
      ))}
      <p>{categoryString(selectedCategory)}</p>
      <Form onSubmit={makeHandleSubmit(selectedCategory)} id="submitForm">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Item Picture</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Row>
          <Col md>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Name of Material" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formColor">
              <Form.Label>Color</Form.Label>
              <Form.Control placeholder="Color" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group controlId="formLength">
              <Form.Label>Amount</Form.Label>
              <Form.Control placeholder="Length" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control placeholder="Price" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formDescription">
          <Form.Label>Item Description</Form.Label>
          <Form.Control
            placeholder="Item Description"
            style={{ height: "100px" }}
          />
        </Form.Group>
        <Form.Group controlId="formLocation">
          <Form.Label>Store Location</Form.Label>
          <Form.Control placeholder="Store Location" />
        </Form.Group>
      </Form>
    </>
  );
}
