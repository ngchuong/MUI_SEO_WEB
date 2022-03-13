import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import { host } from "configs.js";

import { requestDeleteUser } from "api/apiAdmin";
import { updateAllUser } from "store/reducers/admin";
import { StyledTableCell, StyledTableRow, useStyles } from "./subComponent";
import FormDialog from "../Form";

export default function TableMUI({ columns, rows }) {
  const allUser = useSelector((state) => state.admin.allUser);

  const classes = useStyles();
  const dispatch = useDispatch();
  const { setModal, unSetModal } = useModal();
  const [open, setOpen] = useState(false);
  const [idRow, setIdRow] = useState("");

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
  const deleteUser = async (id) => {
    let res;
    try {
      res = await requestDeleteUser(id);
    } catch (err) {
      setModal(<SimpleDialog content={<div>Xóa tài khoản thất bại!</div>} />);
      return;
    }

    if (res && /20[0-9]/.test(res.status)) {
      const data = allUser.filter((el) => el.id !== id);
      dispatch(updateAllUser(data));
      setModal(<SimpleDialog content={<div>Xóa tài khoản thành công!</div>} />);
    }
  };
  const doCancel = () => {
    unSetModal();
  };

  // const ClickEdit = () => {};
  const ClickDelete = (e, id) => {
    console.log(id);
    e.stopPropagation();
    setModal(
      <ConfirmDialog
        content={<div>Bạn muốn xóa user này không?</div>}
        onSubmit={() => deleteUser(id)}
        onCancel={doCancel}
      />
    );
  };

  // open dialog detail user
  const openDetailUser = (id) => {
    setOpen(true);
    setIdRow(id);
  };
  const handleClose = () => {
    setOpen(false);
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
              <StyledTableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.id}
                onClick={() => openDetailUser(row.id)}
                style={{ cursor: "pointer" }}
              >
                {columns.map((column) => {
                  const value = row[column.id];
                  if (column.id === "img_social_id") {
                    if (!value) {
                      return <StyledTableCell key={column.id} />;
                    }
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                        <img
                          height={100}
                          width={150}
                          src={`${host}/files/${value || ""}`}
                          alt="#"
                        />
                      </StyledTableCell>
                    );
                  }
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
                    onClick={(event) => ClickDelete(event, row.id)}
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
      {open && (
        <FormDialog
          handleClose={handleClose}
          open={open}
          dataForm={rows.filter((el) => el.id === idRow)[0]}
        />
      )}
    </Paper>
  );
}
