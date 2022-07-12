import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import IsoIcon from '@mui/icons-material/Iso';
import { Button } from '@mui/material';

// Generate Order Data
function createData(id, item, quantity, date) {
  return { id, item, quantity, date };
}

const rows = [
  createData(
    0,
    'Toothpaste/Toothbrush',
    '78',
    'March 21, 2022'
  ),
  createData(
    1,
    'Hygiene Products',
    '212',
    'July 11, 2022'
  ),
  createData(
    2, 
    'Diapers', 
    '500', 
    'June 19, 2022'
  ),
    
  createData(
    3,
    'Clothes',
    '1200',
    'January 7, 2022',
    
  ),
  createData(
    4,
    'Canned Goods',
    '750',
    'March 18, 2022',
    
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Current Inventory</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Item:</TableCell>
            <TableCell>Quantity:</TableCell>
            <TableCell>Date Received:</TableCell>
            {/* <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <IsoIcon fontSize='medium'></IsoIcon>
              {/* <Button size='large'>+/-</Button> */}
              <TableCell>{row.item}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.date}</TableCell>
              {/* <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more items...
      </Link>
    </React.Fragment>
  );
}