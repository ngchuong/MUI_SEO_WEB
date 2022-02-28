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

const DisplayTaskDetail = ({ info, shadow }) => {
  const relatedData = info.related_data ? JSON.parse(info.related_data) : {};
  const dataUser = [
    {
      key: "type_task",
      label: "Loại nhiệm vụ",
      value: info.type_task,
    },
    {
      key: "name",
      label: "Tên nhiệm vụ",
      value: info.name,
    },
    {
      key: "description",
      label: "Mô tả",
      value: info.description,
    },
    {
      key: "key_word",
      label: "Từ khóa",
      value: info.key_word,
    },
    {
      key: "origin",
      label: "Trang web đích",
      value: info.origin,
    },
    {
      key: "priority",
      label: "Độ ưu tiên",
      value: info.priority,
    },
    {
      key: "reward",
      label: "Tiền thưởng",
      value: info.reward,
    },
    {
      key: "created_at",
      label: "Ngày tạo nhiệm vụ",
      value: info.created_at,
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
    const files = relatedData.image;
    if (files && Array.isArray(files)) {
      return files.map((fileId) => {
        if (fileId) {
          return (
            <div key={fileId} style={{ margin: 1 }}>
              <img height={300} width={450} src={`${host}/api/files/${fileId}`} alt="#" />
            </div>
          );
        }
        return null;
      });
    }
    return null;
  };

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      {/* <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Chi tiết nhiệm vụ
        </MDTypography>
      </MDBox> */}
      <MDBox display="flex" justifyContent="space-between" p={2}>
        <MDBox>{renderItems}</MDBox>
        <MDBox width="50%">
          <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
            Ảnh mô tả:
          </MDTypography>
          <MDBox style={{ display: "flex", flexDirection: "column" }}>
            <DisplayImg />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default function FormDetailTask({ handleClose, open, dataForm }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>Chi tiết nhiệm vụ</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          <DisplayTaskDetail info={dataForm} shadow={false} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Quay về</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
