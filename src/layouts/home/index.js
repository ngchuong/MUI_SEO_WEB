import { useNavigate } from "react-router-dom";

import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDButton from "components/MDButton";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "./partials/footer";

// white","primary","secondary","info","success","warning","error","light","dark
function Home() {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <MDBox
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg?size=626&ext=jpg")`,
        }}
      >
        <MDBox style={{ display: "flex", justifyContent: "flex-end" }}>
          <MDBox mr={1}>
            <MDButton
              onClick={() => navigate("/authentication/sign-up")}
              size="small"
              color="primary"
            >
              Đăng ký
            </MDButton>
          </MDBox>
          <MDBox>
            <MDButton onClick={() => navigate("/authentication/sign-in")} size="small" color="info">
              Đăng nhập
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox py={3}>
          <MDBox mt={4.5}>Đây là nội dung trang chủ</MDBox>
        </MDBox>
        <Footer />
      </MDBox>
    </DashboardLayout>
  );
}

export default Home;
