import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Button, Alert, Card, Form, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
const categories = ['Fabric', 'Patterns', 'Buttons', 'Threads'];
const subCategories = ['Colors', 'Themes', 'Material Type',]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <>
            {categories.map(
              (name) => (
                <DropdownButton
                  as={ButtonGroup}
                  key={name}
                  variant="primary"
                  title={name}
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Active Item
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              ),
            )}
          </>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
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
              <Form.Control placeholder="Item Description" />
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Form.Label>Store Location</Form.Label>
              <Form.Control placeholder="Store Location" />
            </Form.Group>
            <Button variant="secondary" type="submit">Submit</Button>
          </Form>
        </Container>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
