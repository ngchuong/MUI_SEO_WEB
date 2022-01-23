import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DataTable from "examples/Tables/DataTable";

const columns = [
  {
    Header: "Tên",
    accessor: "name",
    width: "45%",
    align: "left",
  },
  {
    Header: "Email",
    accessor: "email",
    align: "left",
  },
  {
    Header: "Tiền kiếm được",
    accessor: "money",
    align: "left",
  },
];
const rows = [];
for (let i = 0; i < 10; i += 1) {
  rows.push({ name: `user_${i}`, email: `user_${i}@gmail.com`, money: `100.000đ` });
}

export default function UserList() {
  return (
    <MDBox pt={3} pb={3}>
      <Grid item xs={12}>
        <Card>
          <MDBox
            mx={2}
            mt={-3}
            py={3}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
              Danh sách user
            </MDTypography>
          </MDBox>
          <MDBox pt={3}>
            <DataTable
              table={{ columns, rows }}
              isSorted={false}
              entriesPerPage={false}
              showTotalEntries={false}
              noEndBorder
            />
          </MDBox>
        </Card>
      </Grid>
    </MDBox>
  );
}
