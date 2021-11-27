import { FormControl, ButtonGroup, Dropdown, Accordion, Row, Col, Button, Form} from 'react-bootstrap';
import React, { useState, useEffect} from 'react';
import categories from './categories.json';


function Category({ title, items, selectedCategory, setSelectedCategory }) {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [Cust, setCust] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setCust(e.target.Cust)}
            value={Cust}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !Cust || child.props.children.toLowerCase().startsWith(Cust),
            )}
          </ul>
        </div>
      );
    },
  );
  
  const handleSelect = (value) => {
    setSelectedCategory((oldValues) => {
      console.log(oldValues)
      console.log( {...oldValues, [title]: value})
      return {...oldValues, [title]: value};
    })
  }
  return (
    <Col>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{title}</Accordion.Header>
          {items.map(({ titles, subCategories }) => (
            <Accordion.Body>
              <Dropdown>
              <Dropdown.Toggle id= "dropdown-custom-components"
                as={CustomToggle}
                key={titles}
                variant="primary"
                onSelect={handleSelect}
                title={titles}
              >
                {titles}
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                {subCategories.map(subCategory => (
                  <Dropdown.Item key={subCategory} eventKey={subCategory}>{subCategory}</Dropdown.Item>
                ))}
                </Dropdown.Menu>
              </Dropdown>
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
    <Form onSubmit={handleSubmit}>
      {categories.map(
        ({ title, items }) => (
          <Category key={title} title={title} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} items={items} />
        ),
      )}
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
  );
}
