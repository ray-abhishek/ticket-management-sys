import React, { useState } from 'react'
import { TableContainer, Button } from '@material-ui/core';
import TablePaginationActions from './TablePaginationActions'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
  });

export default function TicketsTable({tickets}){
    const classes = useStyles()
    const [ page , setPage ] = useState(0)
    const [ rowsPerPage , setRowsPerPage ] = useState(10)

    const emptyRows = rowsPerPage - Math.min(rowsPerPage , tickets.length - page * rowsPerPage)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    return (
        <TableContainer component={Paper} style={tableStyle}>
            <Table className={classes.table}>
            <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Raised On</TableCell>
          </TableRow>
        </TableHead>
                <TableBody>
                {(rowsPerPage > 0
            ? tickets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : tickets
          ).map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell component="th" scope="row">
                {ticket[0]}
              </TableCell>
              <TableCell component="th" scope="row">
                <Link to={{pathname:"/respond",
                            state : ticket}}>{ticket[1]}</Link>  
              </TableCell>
              <TableCell style={{ width: 160 }} >
                {ticket[5]}
              </TableCell>
              <TableCell style={{ width: 160 }} >
                  <Button variant="outlined" color={ticket[4]==='Pending'?"primary" : ticket[4]==='On Hold' ? "secondary" : "green"}>{ticket[4]}</Button>
                
              </TableCell>
              <TableCell style={{ width: 160 }} >
                {ticket[3].slice(0,ticket[3].lastIndexOf('00:00:00'))}
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
              rowsPerPageOptions={[10, 15, 20, { label: 'All', value: -1 }]}
              colSpan={3}
              count={tickets.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
            </Table>
        </TableContainer>
    )
}

const tableStyle = {
    textAlign : 'left !important',
}