import './App.css';
import { Container, Row, Col, Button, Form, Dropdown, DropdownButton, ButtonGroup, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import categories from './categories.json';
//import FormInput from './ItemForm.js';
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>


//Find way to generate Accordions


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

  function Category({ title, subCategories }) {
    return (
      <Col>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
              <DropdownButton
                as={ButtonGroup}
                key={title}
                variant="primary"
                title={title}
              >
                {subCategories.map(subCategory => (
                  <Dropdown.Item key={subCategory}>{subCategory}</Dropdown.Item>
                ))}
              </DropdownButton>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Main Category1</Accordion.Header>
                  <Accordion.Body>
                    {categories.map(
                      ({ title }) => (
                        <DropdownButton
                          as={ButtonGroup}
                          key={title}
                          variant="primary"
                          title={title}
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
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>


            <Col>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Main Category2</Accordion.Header>
                  <Accordion.Body>
                    {categories.map(
                      ({ title }) => (
                        <DropdownButton
                          as={ButtonGroup}
                          key={title}
                          variant="primary"
                          title={title}
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
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Main Category3</Accordion.Header>
                  <Accordion.Body>
                    {categories.map(
                      ({ title }) => (
                        <DropdownButton
                          as={ButtonGroup}
                          key={title}
                          variant="primary"
                          title={title}
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
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Main Category4</Accordion.Header>
                  <Accordion.Body>
                    {categories.map(
                      ({ title }) => (
                        <DropdownButton
                          as={ButtonGroup}
                          key={title}
                          variant="primary"
                          title={title}
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
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Main Category5</Accordion.Header>
                  <Accordion.Body>
                    {categories.map(
                      ({ title }) => (
                        <DropdownButton
                          as={ButtonGroup}
                          key={title}
                          variant="primary"
                          title={title}
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
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Main Category6</Accordion.Header>
                  <Accordion.Body>
                    {categories.map(
                      ({ title }) => (
                        <DropdownButton
                          as={ButtonGroup}
                          key={title}
                          variant="primary"
                          title={title}
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
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
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
        </Container>
      </header>
    </div>
  );
}

export default App;
