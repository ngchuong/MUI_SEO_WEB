import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";

function DoTask() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <div>Nhận nhiệm vụ</div>
        <div>làm nhiệm vụ</div>
      </MDBox>
    </DashboardLayout>
  );
}

export default DoTask;
