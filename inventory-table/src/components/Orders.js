import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



function createBabyProd(
  item: string,
  quantity: number,
  date: number,
) {
  return {
    item,
    quantity,
    date,
    
    history: [
      {
        item: 'Diapers',
        quantity: '200',
        date: 'March 10, 2022',
      },
      {
        item: 'Baby Lotions',
        quantity: '107',
        date: 'June 17, 2022',
      },
      {
        item: 'Diapers',
        quantity: '1109',
        date: 'May 2, 2022',
      },
      {
        item: 'Wipes',
        quantity: '1000',
        date: 'March 4, 2022',
      },
      {
        item: 'Baby Formula',
        quantity: '1109',
        date: 'December 20, 2022',
      },
      {
        item: 'Baby Clothing',
        quantity: '107',
        date: 'April 20, 2022',
      },
      {
        item: 'Baby Toys',
        quantity: '1109',
        date: 'March 20, 2022',
      },
      {
        item: 'Baby Lotions',
        quantity: '107',
        date: 'September 20, 2022',
      },
    ],
  };
}

function createHygiene(
  item: string,
  quantity: number,
  date: number,
) {
  return {
    item,
    quantity,
    date,
    
    history: [
      {
        item: 'Toothbrush',
        quantity: '75',
        date: '3/7/22',
      },
      {
        item: 'Toothpaste',
        quantity: '50',
        date: '3/7/22',
      },
      {
        item: 'Deordorant',
        quantity: '322',
        date: '3/7/22',
      },
      {
        item: 'Lotions',
        quantity: '250',
        date: '3/7/22',
      },
      {
        item: 'Diapers',
        quantity: '1109',
        date: '3/7/22',
      },
      {
        item: 'Baby Lotions',
        quantity: '107',
        date: '3/7/22',
      },
      {
        item: 'Diapers',
        quantity: '1500',
        date: '3/7/22',
      },
      {
        item: 'Baby Lotions',
        quantity: '10',
        date: '3/7/22',
      },
    ],
  };
}

function createFood(
  item: string,
  quantity: number,
  date: number,
) {
  return {
    item,
    quantity,
    date,
    
    history: [
      {
        item: 'Chips',
        quantity: '1109',
        date: '3/7/2022',
      },
      {
        item: 'Bread',
        quantity: '107',
        date: '3/7/22',
      },
      {
        item: 'Milk',
        quantity: '300',
        date: '3/7/2022',
      },
      {
        item: 'Spaghetti',
        quantity: '119',
        date: '3/7/22',
      },
      {
        item: 'Fruits',
        quantity: '2500',
        date: '3/7/2022',
      },
      {
        item: 'Cookies',
        quantity: '317',
        date: '3/7/22',
      },
      {
        item: 'Meats',
        quantity: '217',
        date: '3/7/2022',
      },
      {
        item: 'Water',
        quantity: '5000',
        date: '3/7/22',
      },
    ],
  };
}


function createClothing(
  item: string,
  quantity: number,
  date: number,
) {
  return {
    item,
    quantity,
    date,
    
    history: [
      {
        item: 'Mens Shirts',
        quantity: '1109',
        date: '9/7/2022',
      },
      {
        item: 'Womens Shirts',
        quantity: '100',
        date: '3/17/22',
      },
      {
        item: 'Mens Pants',
        quantity: '1250',
        date: '9/10/2022',
      },
      {
        item: 'Womens Skirt',
        quantity: '90',
        date: '12/27/22',
      },
      {
        item: 'Mens Shoes',
        quantity: '320',
        date: '3/7/2022',
      },
      {
        item: 'Womens Shoes',
        quantity: '75',
        date: '3/7/22',
      },
      {
        item: 'Pajamas',
        quantity: '122',
        date: '3/7/2022',
      },
      {
        item: 'Socks',
        quantity: '110',
        date: '3/7/22',
      },
    ],
  };
}

function createKitchen(
  item: string,
  quantity: number,
  date: number,
) {
  return {
    item,
    quantity,
    date,
    
    history: [
      {
        item: 'Pans',
        quantity: '1109',
        date: '3/7/2022',
      },
      {
        item: 'Pots',
        quantity: '107',
        date: '3/7/22',
      },
      {
        item: 'Kitchen Utensils',
        quantity: '1109',
        date: '3/7/2022',
      },
      {
        item: 'Tupperware',
        quantity: '107',
        date: '3/7/22',
      },
      {
        item: 'Ice Trays',
        quantity: '1109',
        date: '3/7/2022',
      },
      {
        item: 'Paper Towels',
        quantity: '107',
        date: '3/7/22',
      },
      {
        item: 'Paper Plates',
        quantity: '1109',
        date: '3/7/2022',
      },
      {
        item: 'Plastic Utensils',
        quantity: '107',
        date: '3/7/22',
      },
    ],
  };
}

function createMisc(
  item: string,
  quantity: number,
  date: number,
) {
  return {
    item,
    quantity,
    date,
    
    history: [
      {
        item: 'Candles',
        quantity: '1109',
        date: '3/7/2022',
      },
      {
        item: 'Fans',
        quantity: '107',
        date: '3/7/22',
      },
      {
        item: 'Books',
        quantity: '1109',
        date: '3/7/2022',
      },
      {
        item: 'Blankets',
        quantity: '107',
        date: '3/7/22',
      },
      {
        item: 'Paper',
        quantity: '1109',
        date: '3/7/2022',
      },
      {
        item: 'Pens',
        quantity: '107',
        date: '3/7/22',
      },
      {
        item: 'Air Freshner',
        quantity: '1109',
        date: '3/7/2022',
      },
      {
        item: 'Batteries',
        quantity: '107',
        date: '3/7/22',
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.item}
        </TableCell>
        <TableCell align="right">{row.quantity}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell><b>Item/Description</b></TableCell>
                    <TableCell><b>Quantity</b></TableCell>
                    <TableCell align="right"><b>Date Received</b></TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.item}
                      </TableCell>
                      <TableCell>{historyRow.quantity}</TableCell>
                      <TableCell align="right">{historyRow.date}</TableCell>
                      <TableCell align="right">
                      
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createBabyProd('Baby Products'),
  createHygiene('Hygiene'),
  createFood('Food'),
  createClothing('Clothing'),
  createKitchen('Kitchen Items'),
  createMisc('New Items'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell><h3>Current Inventory:</h3></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
