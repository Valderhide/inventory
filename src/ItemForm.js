import { DropdownButton, ButtonGroup, Dropdown, Accordion, Row, Col, Button, Form, } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import categories from './categories.json';


function Category({ title, items, selectedCategory, setSelectedCategory }) {
  const handleSelect = (value) => {
    setSelectedCategory((oldValues) => {
      console.log(oldValues)
      console.log({ ...oldValues, [title]: value })
      return { ...oldValues, [title]: value };
    })
  }
  return (
    <Col>
      <Accordion>
        <Accordion.Item eventKey="0" classname="categories-container">
          <Accordion.Header>{title}</Accordion.Header>
          {items.map(({ titles, subCategories }) => (
            <Accordion.Body>
              <DropdownButton
                as={ButtonGroup}
                key={titles}
                variant="primary"
                onSelect={handleSelect}
                title={titles}

              >
                {subCategories.map(subCategory => (
                  <Dropdown.Item key={subCategory} eventKey={subCategory}>{subCategory}</Dropdown.Item>
                ))}
              </DropdownButton>
            </Accordion.Body>
          ))}
        </Accordion.Item>
      </Accordion>
      {selectedCategory[title]}
    </Col>
  );
}

export default function AddItemForm({ handleSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState({});
  return (
    <>
      {categories.map(
        ({ title, items }) => (
          <Category key={title} title={title} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} items={items} />
        ),
      )}
      <Form onSubmit={handleSubmit}>
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
          <Form.Control placeholder="Item Description" style={{ height: '100px' }} />
        </Form.Group>
        <Form.Group controlId="formLocation">
          <Form.Label>Store Location</Form.Label>
          <Form.Control placeholder="Store Location" />
        </Form.Group>
        <Button variant="secondary" type="submit">Submit</Button>
      </Form>
    </>
  );
}