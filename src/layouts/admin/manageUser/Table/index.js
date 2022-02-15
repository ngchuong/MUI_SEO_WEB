import React from "react";
import { useDispatch } from "react-redux";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

import { useModal } from "components/Modal";
import { SimpleDialog, ConfirmDialog } from "components/Modal/dialog";

import { requestDeleteUser } from "api/apiAdmin";
import { StyledTableCell, StyledTableRow, useStyles } from "./subComponent";

export default function TableMUI({ columns, rows }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { setModal, unSetModal } = useModal();

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

  // handle delete, edit
  const deleteUser = (id) => {
    try {
      requestDeleteUser(id);
    } catch (err) {
      setModal(<SimpleDialog content={<div>Xóa tài khoản thất bại!</div>} />);
      return;
    }

    setModal(<SimpleDialog content={<div>Xóa tài khoản thành công!</div>} />);
  };
  const doCancel = () => {
    unSetModal();
  };

  const ClickEdit = () => {};
  const ClickDelete = (id) => {
    setModal(
      <ConfirmDialog
        content={<div>Bạn muốn xóa user này không?</div>}
        onSubmit={() => deleteUser(id)}
        onCancel={doCancel}
      />
    );
  };

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
              {/* <StyledTableCell key="edit" align="center" style={{ minWidth: 100 }}>
                Sửa
              </StyledTableCell> */}
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
                {/* <StyledTableCell key="edit" align="center">
                  <IconButton size="small" aria-label="close" color="inherit" onClick={ClickEdit}>
                    <Icon fontSize="small">edit</Icon>
                  </IconButton>
                </StyledTableCell> */}
                <StyledTableCell key="delete" align="center">
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={() => ClickDelete(row.id)}
                  >
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
