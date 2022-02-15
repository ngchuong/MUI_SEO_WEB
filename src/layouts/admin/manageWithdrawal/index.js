import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";

import ListUser from "./list";

import { reqAllWithdrawal } from "../../../actions/admin";

function ManageWithdrawal() {
  const dispatch = useDispatch();
  const allWithdrawal = useSelector((state) => state.admin.allWithdrawal) || [];

  useEffect(() => {
    dispatch(reqAllWithdrawal());
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDTypography variant="h4" style={{ borderBottom: "solid 1px #c1c1c1" }}>
          Quản lý rút tiền
        </MDTypography>
        <MDBox>
          <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
            <MDTypography variant="h6" fontWeight="medium">
              Danh sách yêu cầu rút tiền
            </MDTypography>
            {/* <MDButton color="primary" size="small">
              Đăng ký tài khoản
            </MDButton> */}
          </MDBox>
          <MDBox p={2} style={{ width: "100%" }}>
            <ListUser data={allWithdrawal} />
          </MDBox>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default ManageWithdrawal;
