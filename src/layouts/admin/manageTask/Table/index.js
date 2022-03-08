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

import { requestDeleteTask } from "api/apiAdmin";
import { updateAllTask } from "store/reducers/admin";
import { reqEditTask } from "actions/admin";
import { StyledTableCell, StyledTableRow, useStyles } from "./subComponent";
import FormDialog from "../Dialog";
import FormDetailTask from "../Dialog/DetailTask";

export default function TableMUI({ columns, rows }) {
  const allTask = useSelector((state) => state.admin.allTask);

  const classes = useStyles();
  const dispatch = useDispatch();
  const { setModal, unSetModal } = useModal();
  const [open, setOpen] = useState(false);
  const [openDetailTask, setOpenDetailTask] = useState(false);
  const [idRow, setIdRow] = useState("");

  // pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // handle delete, edit
  const deleteTask = async (id) => {
    let res;
    try {
      res = await requestDeleteTask(id);
    } catch (err) {
      setModal(<SimpleDialog content={<div>Xóa nhiệm vụ thất bại!</div>} />);
      return;
    }

    if (res && /20[0-9]/.test(res.status)) {
      const data = allTask.filter((el) => el.id !== id);
      dispatch(updateAllTask(data));

      setModal(<SimpleDialog content={<div>Xóa nhiệm vụ thành công!</div>} />);
    }
  };
  const updateTask = (data, files) => {
    dispatch(reqEditTask(idRow, data, files));
  };

  // cancel, close dialog
  const doCancel = () => {
    unSetModal();
  };
  const handleClose = () => {
    setOpen(false);
    setOpenDetailTask(false);
  };

  // open dialog
  const OpenEdit = (e, id) => {
    e.stopPropagation();
    setOpen(true);
    setIdRow(id);
  };
  const OpenDelete = (e, id) => {
    e.stopPropagation();
    setModal(
      <ConfirmDialog
        content={<div>Bạn muốn xóa nhiệm vụ này không?</div>}
        onSubmit={() => deleteTask(id)}
        onCancel={doCancel}
      />
    );
  };
  const OpenDetail = (id) => {
    setOpenDetailTask(true);
    setIdRow(id);
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
              <StyledTableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.id}
                onClick={() => OpenDetail(row.id)}
                style={{ cursor: "pointer" }}
              >
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <StyledTableCell key={column.id} align={column.align}>
                      {column.format && typeof value === "number" ? column.format(value) : value}
                    </StyledTableCell>
                  );
                })}
                <StyledTableCell key="edit" align="center">
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={(e) => OpenEdit(e, row.id)}
                  >
                    <Icon fontSize="small">edit</Icon>
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell key="delete" align="center">
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={(e) => OpenDelete(e, row.id)}
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
          onSubmit={updateTask}
          dataForm={rows.filter((el) => el.id === idRow)[0]}
        />
      )}

      {openDetailTask && (
        <FormDetailTask
          handleClose={handleClose}
          open={openDetailTask}
          dataForm={rows.filter((el) => el.id === idRow)[0]}
        />
      )}
    </Paper>
  );
}
