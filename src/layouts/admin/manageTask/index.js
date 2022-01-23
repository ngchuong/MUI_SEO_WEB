import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import FormDialog from "components/Dialog";

import ListTask from "./list";

import { reqAllTask, reqCreateTask } from "../../../actions/admin";

function ManageTask() {
  const dispatch = useDispatch();
  const allTask = useSelector((state) => state.admin.allTask);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(reqAllTask());
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
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
          <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
            <MDTypography variant="h6" fontWeight="medium">
              Danh sách nhiệm vụ
            </MDTypography>
            <MDButton onClick={handleClickOpen} color="primary" size="small">
              Tạo thêm nhiệm vụ
            </MDButton>
          </MDBox>
          <MDBox p={2} style={{ width: "100%" }}>
            <ListTask data={allTask} />
          </MDBox>
        </MDBox>
      </MDBox>
      {open && <FormDialog handleClose={handleClose} open={open} onSubmit={createTask} />}
    </DashboardLayout>
  );
}

export default ManageTask;
