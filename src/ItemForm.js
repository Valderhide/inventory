import { DropdownButton, ButtonGroup, Dropdown, Accordion, Row, Col, Button, Form } from 'react-bootstrap';
import categories from './categories.json';

// {
//   "title": "Patterns", // Accordion
//   "items": [
//     {
//       "title": "Dropdown 1", // Dropdown
//       "subCategories": ["Chevron", "Paisley"]
//     },
//     {
//       "title": "Dropdown 2", // Dropdown
//       "subCategories": ["Chevron", "Paisley"]
//     },
//     {
//       "title": "Dropdown 2", // Dropdown
//       "subCategories": ["Chevron", "Paisley"]
//     }
//   ]
// },

function Category({ title, subCategories, items }) {
  return (
    <Col>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{title}</Accordion.Header>
          {items.map(
            ({ items: {
              titles, subCategories }, }) => (
              <Accordion.Body>
                <DropdownButton
                  as={ButtonGroup}
                  key={titles}
                  variant="primary"
                  title={titles}
                >
                  {subCategories.map(subCatergory => (
                    <Dropdown.Item key={subCatergory}>{subCatergory}</Dropdown.Item>
                  ))}
                </DropdownButton>
              </Accordion.Body>
            ))}
        </Accordion.Item>
      </Accordion>
    </Col>
  );
}

export default function AddItemForm({ handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      {categories.map(
        ({ title, subCategories }) => (
          <Category key={title} title={title} subCategories={subCategories} />
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