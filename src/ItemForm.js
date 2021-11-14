import { Row, Col, Button, Form} from 'react-bootstrap';

<Form>
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
export default Form