// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import MDButton from "components/MDButton";
import { host } from "configs.js";

function ProfileInfoCard({ title, info, shadow, openDialog, isEdit }) {
  // build dataa
  const relatedData = info.related_data ? JSON.parse(info.related_data) : {};
  const dataUser = [
    {
      key: "name",
      label: "Họ tên",
      value: info.name,
    },
    {
      key: "email",
      label: "Email",
      value: info.email,
    },
    {
      key: "telephone",
      label: "Số điện thoại",
      value: info.telephone,
    },
    {
      key: "address",
      label: "Địa chỉ",
      value: info.address,
    },
    {
      key: "balance",
      label: "Số dư",
      value: `${info.balance} đồng`,
    },
    {
      key: "user_social_id",
      label: "Số cmnd/cccd",
      value: info.user_social_id,
    },
    {
      key: "bank_number",
      label: "Số tài khoản ngân hàng",
      value: relatedData.bank_number,
    },
    {
      key: "bank_name",
      label: "Tên ngân hàng, chi nhánh",
      value: relatedData.bank_name,
    },
  ];

  // Render the card info items
  const renderItems = dataUser.map((item, index) => (
    <MDBox key={item.key} display="flex" py={1} pr={2}>
      <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {item.label}: &nbsp;
      </MDTypography>
      <MDTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{item.value}
      </MDTypography>
    </MDBox>
  ));

  // display image
  const DisplayImg = () => {
    const fileId = relatedData.image;
    if (fileId) {
      return (
        <div>
          <img height={200} width={250} src={`${host}/api/files/${fileId}`} alt="#" />;
        </div>
      );
    }
    return null;
  };

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MDTypography>
        {isEdit ? (
          <MDButton onClick={openDialog}>
            <Tooltip title="Edit Profile" placement="top">
              <Icon>edit</Icon>
            </Tooltip>
          </MDButton>
        ) : null}
      </MDBox>
      <MDBox p={2}>
        <MDBox>{renderItems}</MDBox>
        <MDBox>
          <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
            Ảnh chứng minh nhân dân:
          </MDTypography>
          <MDBox>
            <DisplayImg />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ProfileInfoCard;
