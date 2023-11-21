import {
  TableHead,
  TableRow,
  Table,
  TableContainer,
  TableCell,
  TableBody,
} from '@mui/material';
import ITable from '../interfaces/ITable';

function TableList({ headers, items }: ITable) {
  return (
    <div>
      <div className="bg-white m-6 rounded flex items-center">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow>
                  <TableCell key={item.name}> {item.name}</TableCell>
                  <TableCell key={item.genre}> {item.genre}</TableCell>
                  <TableCell key={item.genre}> {item.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default TableList;
