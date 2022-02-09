import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

import { StyledTableCell, StyledTableRow, useStyles } from "./subComponent";

export default function TableMUI({ columns, rows }) {
  const classes = useStyles();

  // pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // handle open dialog
  // const [openDialog, setOpenDialog] = useState(false);
  // TODO: handle delete, edit
  const OpenEdit = () => {};
  const OpenDelete = () => {};

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className={classes.thead}>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
              <StyledTableCell key="edit" align="center" style={{ minWidth: 100 }}>
                Sửa
              </StyledTableCell>
              <StyledTableCell key="delete" align="center" style={{ minWidth: 100 }}>
                Xóa
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <StyledTableCell key={column.id} align={column.align}>
                      {column.format && typeof value === "number" ? column.format(value) : value}
                    </StyledTableCell>
                  );
                })}
                <StyledTableCell key="edit" align="center">
                  <IconButton size="small" aria-label="close" color="inherit" onClick={OpenEdit}>
                    <Icon fontSize="small">edit</Icon>
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell key="delete" align="center">
                  <IconButton size="small" aria-label="close" color="inherit" onClick={OpenDelete}>
                    <Icon fontSize="small">delete</Icon>
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
