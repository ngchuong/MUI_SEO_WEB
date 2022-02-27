// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation({ bills }) {
  console.log(1, bills);
  const DisplayBill = bills.map((el, index) => {
    const DefineStatus = {
      0: "Đang chờ về",
      1: "Đã rút thành công",
    };
    return (
      // <Bill
      //   key={el}
      //   name="oliver liam"
      //   company="viking burrito"
      //   email="oliver@burrito.com"
      //   vat="FRB1235476"
      // />
      <div
        key={el.id}
        style={{ border: "1px solid #c1c1c1", fontSize: "15px", borderRadius: "4px", padding: 4 }}
      >
        <div>{`Số tiền rút: ${el.amount}`}</div>
        <div>{`Trạng thái rút: ${DefineStatus[el.status]}`}</div>
        <div>{`Ngày rút: ${el.created_at}`}</div>
      </div>
    );
  });
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Danh sách hóa đơn
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {DisplayBill}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
