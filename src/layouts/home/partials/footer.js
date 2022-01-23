import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Footer() {
  return (
    <MDBox
      py={3}
      style={{
        display: "flex",
      }}
    >
      <MDBox mt={4.5} style={{ width: "50%" }}>
        <MDTypography variant="h5">Liên hệ</MDTypography>
        <div>SĐT: 0982.828.229</div>
        <div>Email: kiemtien@gmail.com</div>
      </MDBox>
      <MDBox mt={4.5} style={{ width: "50%" }}>
        <MDTypography variant="h5"> Địa chỉ</MDTypography>
        <div>Số 10, ngõ 10, trương định, quận 1, Hồ Chí Minh</div>
      </MDBox>
    </MDBox>
  );
}

export default Footer;
