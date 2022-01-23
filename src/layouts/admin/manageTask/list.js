import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DataTable from "examples/Tables/DataTable";

const columns = [
  {
    Header: "Tên nhiệm vụ",
    accessor: "name",
    width: "20%",
    align: "left",
  },
  {
    Header: "Mô tả nhiệm vụ",
    width: "50%",
    accessor: "description",
    align: "left",
  },
  {
    Header: "Hình ảnh",
    width: "30%",
    accessor: "image",
    align: "left",
  },
];
const rows = [];
for (let i = 0; i < 10; i += 1) {
  rows.push({
    name: `search_website_${i}`,
    description: `vào google, nhập từ khóa tìm kiếm_${i}`,
    image: `100.000đ`,
  });
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
              Danh sách nhiệm vụ
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
