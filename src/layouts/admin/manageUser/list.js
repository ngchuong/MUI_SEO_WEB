import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DataTable from "examples/Tables/DataTable";

const columns = [
  {
    Header: "STT",
    accessor: "stt",
    width: "5%",
    align: "left",
  },
  {
    Header: "Tên",
    accessor: "name",
    width: "20%",
    align: "left",
  },
  {
    Header: "Email",
    accessor: "email",
    width: "20%",
    align: "left",
  },
  {
    Header: "Số điện thoại",
    accessor: "telephone",
    width: "20%",
    align: "left",
  },
  {
    Header: "Địa chỉ",
    accessor: "address",
    width: "20%",
    align: "left",
  },
  {
    Header: "Tiền kiếm được",
    accessor: "balance",
    width: "15%",
    align: "left",
  },
];

export default function UserList({ data }) {
  const rows = data.map((el, index) => ({ ...el, stt: index + 1 }));

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
