import logo from './logo.svg';
import './App.css';
import { Button, Alert, Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card classname="mb-3" style={{color: "black"}}>
          <Card.Img src="https://picsum.photos/200/100"/>
          <Card.Body>
            <Card.Title> Title Card Example </Card.Title>
            <Card.Text> This is an example of Card.text </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        <img src={logo} className="App-logo" alt="logo" />
        <Breadcrumb>
          <BreadcrumbItem active>TEST</BreadcrumbItem>
          <BreadcrumbItem>TEST2</BreadcrumbItem>
          <BreadcrumbItem active>TEST3</BreadcrumbItem>
          <BreadcrumbItem>TEST4</BreadcrumbItem>
          <BreadcrumbItem active>TEST5</BreadcrumbItem>
        </Breadcrumb>
        <Alert variant="success"> This is an Alert</Alert>
        <Button>Test Button</Button>
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
