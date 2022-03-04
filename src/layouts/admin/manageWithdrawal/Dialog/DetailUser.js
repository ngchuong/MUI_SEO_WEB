import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import { host } from "configs.js";

const DisplayUserDetail = ({ info, shadow }) => {
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
  const renderItems = dataUser.map((item, index) => {
    return (
      <MDBox key={item.key} display="flex" py={1} pr={2}>
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          {item.label}: &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          &nbsp;{item.value}
        </MDTypography>
      </MDBox>
    );
  });

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
      <MDBox display="flex" justifyContent="space-between" p={2}>
        <MDBox>{renderItems}</MDBox>
        <MDBox width="50%">
          <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
            Ảnh chứng minh nhân dân:
          </MDTypography>
          <MDBox style={{ display: "flex", flexDirection: "column" }}>
            <DisplayImg />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default function FormDetailUser({ handleClose, open, dataForm }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>Chi tiết user</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          <DisplayUserDetail info={dataForm} shadow={false} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Quay về</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
