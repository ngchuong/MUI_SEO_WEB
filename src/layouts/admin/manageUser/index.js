import { useEffect } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";

import ListUser from "./list";

function ManageUser() {
  useEffect(() => {}, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDTypography variant="h4" style={{ borderBottom: "solid 1px #c1c1c1" }}>
          Quản lý tài khoản
        </MDTypography>
        <MDBox>
          <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
            <MDTypography variant="h6" fontWeight="medium">
              Danh sách tài khoản
            </MDTypography>
            {/* <MDButton color="primary" size="small">
              Đăng ký tài khoản
            </MDButton> */}
          </MDBox>
          <MDBox p={2} style={{ width: "100%" }}>
            <ListUser />
          </MDBox>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default ManageUser;
