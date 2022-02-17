// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation({ bills }) {
  const DisplayBill = bills.map((el, index) => {
    return (
      <Bill
        key={el}
        name="oliver liam"
        company="viking burrito"
        email="oliver@burrito.com"
        vat="FRB1235476"
      />
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
