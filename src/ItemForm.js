/*
import { Container, Row, Col, Button, Form, Dropdown, DropdownButton, ButtonGroup, Accordion } from 'react-bootstrap';

function App() {
  const handleSubmit = (e) => {
    const picture = e.target[0].value;
    const name = e.target[1].value;
    const color = e.target[2].value;
    const amount = e.target[3].value;
    const price = e.target[4].value;
    const description = e.target[5].value;
    const store = e.target[6].value;
    console.log({ picture, name, color, amount, price, description, store });
    // Put console log for final result here...
    e.preventDefault();
  }


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

export default
*/