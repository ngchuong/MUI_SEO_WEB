import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import FormDialog from "components/Dialog";

import { useModal } from "components/Modal";
import { ConfirmDialog } from "components/Modal/dialog";
import ListTask from "./list";

import { reqAllTask, reqCreateTask } from "../../../actions/admin";

function ManageTask() {
  const dispatch = useDispatch();
  const { setModal, unSetModal } = useModal();

  const allTask = useSelector((state) => state.admin.allTask);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(reqAllTask());
  }, []);

  const handleClickOpen = () => {
    // setOpen(true);
    // setModal(
    //   <SimpleDialog
    //     content={
    //       <div>
    //         <button type="button" onClick={unSetModal}>
    //           button
    //         </button>
    //         <div>111111111111111</div>
    //       </div>
    //     }
    //   />
    // );
    setModal(
      <ConfirmDialog
        content={
          <div>
            <div>xoa khong?</div>
          </div>
        }
        onCancel={unSetModal}
        onSubmit={unSetModal}
      />
    );
  };
  const handleClose = () => {
    setOpen(false);
  };

  const createTask = (data) => {
    dispatch(reqCreateTask(data));
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDTypography variant="h4" style={{ borderBottom: "solid 1px #c1c1c1" }}>
          Quản lý nhiệm vụ
        </MDTypography>
        <MDBox>
          <MDBox py={1} display="flex" justifyContent="space-between" alignItems="center">
            <MDTypography variant="h6" fontWeight="medium">
              Danh sách nhiệm vụ
            </MDTypography>
            <MDButton onClick={handleClickOpen} color="primary" size="small">
              Tạo thêm nhiệm vụ
            </MDButton>
          </MDBox>
          <MDBox style={{ width: "100%" }}>
            <ListTask data={allTask} />
          </MDBox>
        </MDBox>
      </MDBox>
      {open && <FormDialog handleClose={handleClose} open={open} onSubmit={createTask} />}
    </DashboardLayout>
  );
}

export default ManageTask;
