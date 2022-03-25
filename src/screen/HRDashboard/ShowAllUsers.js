// import { Button, Container, Paper } from "@mui/material";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import SampleUser from "./SampleUser";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";

// function ShowAllUsers() {
//     const state = useSelector((state) => {
//         console.log(state);
//         return state;
//     });

//     const dispatch = useDispatch();
    
//     function createData(name, calories, fat, carbs, protein, price) {
//         return {
//             name,
//             calories,
//             fat,
//             carbs,
//             protein,
//             price,
//             history: [
//                 {
//                     date: "2020-01-05",
//                     customerId: "11091700",
//                     amount: 3,
//                 },
//                 {
//                     date: "2020-01-02",
//                     customerId: "Anonymous",
//                     amount: 1,
//                 },
//             ],
//         };
//     }
//     const rows = [
//         createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
//         createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
//         createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
//         createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//         createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
//         createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
//         createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
//         createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
//         createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//         createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
//         createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
//         createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
//         createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
//         createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//         createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
//     ];
//     return (
//         <div>
//             <TableContainer component={Container}>
//                 <Table aria-label="collapsible table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell />
//                             <TableCell>
//                                 <strong>Dessert (100g serving)</strong>
//                             </TableCell>
//                             <TableCell align="right">Calories</TableCell>
//                             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                             <TableCell align="right">
//                                 Protein&nbsp;(g)
//                             </TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {rows.map((row) => (
//                             <SampleUser key={row.name} row={row} />
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>

//             <Button
//                 variant="contained"
//                 onClick={() => {
//                     dispatch({ type: "SHOW", payload: true });
//                     //dispatch(setuser(users));
//                 }}
//             >
//                 Button
//             </Button>
//         </div>
//     );
// }

// export default ShowAllUsers;






import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{tableCellClasses} from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from '@mui/material/TableHead';
import { Button } from '@mui/material';
import{makeStyles} from "@mui/styles"
import { Delete, Edit } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Cupcake', 305, 3.7),
  createData('Donut', 452, 25.0),
  createData('Eclair', 262, 16.0),
  createData('Frozen yoghurt', 159, 6.0),
  createData('Gingerbread', 356, 16.0),
  createData('Honeycomb', 408, 3.2),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Jelly Bean', 375, 0.0),
  createData('KitKat', 518, 26.0),
  createData('Lollipop', 392, 0.2),
  createData('Marshmallow', 318, 0),
  createData('Nougat', 360, 19.0),
  createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function ShowAllUsers() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const useStyles = makeStyles({
    customTableContainer: {
      overflowX: "initial"
    }
  });

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
     
      
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding:"2% auto"
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const classes = useStyles();

  return (

    
    
    
    <TableContainer component={Paper} classes={{ root: classes.customTableContainer }}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table" stickyHeader>
      <TableHead > 
          <TableRow >
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.calories}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.fat}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <IconButton  color="primary">
                    <Edit/>
                </IconButton>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <LoadingButton  color="error">
                    <Delete/>
                </LoadingButton>
              </TableCell>

            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
   
    
   
  );
}





// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';

// const columns = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//   {
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'edit',
//     label: 'Edit',
    
//     minWidth: 170,
//     align: 'right',
//     //format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'Delete',
//     label: 'Delete',
//     minWidth: 170,
//     align: 'right',
//     //format: (value) => value.toFixed(2),
//   },
// ];

// function createData(name, code, population, edit) {
//   //const density = population / size;
//   return { name, code, population, edit };
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ].sort((a, b) => (a.name < b.name ? -1 : 1));

// export default function ShowAllUsers() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === 'number'
//                             ? column.format(value)
//                             : value}
                            
//                         </TableCell>
//                       );
//                     })}
                   
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }

