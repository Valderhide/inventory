import { Table} from 'react-bootstrap';

export default function ItemTable() {
return(
<Table striped borderless hover variant="dark" size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>picture</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Mitchell</td>
              <td>GetCoding</td>
              <td>@CodeMaster</td>
            </tr>
          </tbody>
        </Table>
);
}